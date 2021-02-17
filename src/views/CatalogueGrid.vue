<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col size-lg="4" size-xs="12">
              <ion-title>Catalogue Grid</ion-title>
            </ion-col>
            <ion-col size-lg="8" size-xs="12">
              <ion-searchbar placeholder="Buscar productes..."></ion-searchbar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col class="content-card" size-xl="3" size-md="4" size-sm="6" size-xs="12" v-for="product in products" :key="product.id">
            <product :product="product"></product>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  loadingController
} from '@ionic/vue';
import axios from "axios";
import Product from "@/components/Product";

export default {
  name: 'CatalogueGrid',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.presentLoading();
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data
        })
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: this.timeout,
          });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, 300);
    },
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    'product': Product
  },

}
</script>

<style scoped>
  .content-card {
    padding: 20px;
  }
  .grid-card {
    height: 100%;
    -webkit-box-shadow: 2px 2px 7px var(--ion-color-warning-contrast);
    box-shadow: 2px 2px 7px var(--ion-color-warning-contrast);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .card-image {
    padding: 10px;
    min-height: 250px;
    line-height: 250px;
    text-align: center;
    border-bottom: 1px solid var(--ion-color-text-650);
  }
  .card-image > img {
    max-height: 250px;
    vertical-align: middle;
  }
  .card-content {
    padding: 10px;
  }
  .card-content h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--ion-color-text-350);
  }
  .card-content .product-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--ion-color-text-350);
  }
  .card-content ion-chip {
    position: absolute;
    top: 30px;
    left: 15px;
    background-color: rgba(var(--ion-color-base-rgb), 0.50);
    color: var(--ion-color-primary-contrast);
  }
  .card-content ion-label {
    font-size: 12px;
  }
</style>
