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
              <ion-title>Llistat de productes</ion-title>
            </ion-col>
            <ion-col size-lg="8" size-xs="12">
              <ion-searchbar placeholder="Buscar productes..."></ion-searchbar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item :router-link="{name:'product', params:{id:product.id}}" v-for="product in products" :key="product.id">
          <ion-thumbnail slot="start">
            <img :src="product.image">
          </ion-thumbnail>
          <ion-label>
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <ion-badge class="llista-cat">{{ product.category }}</ion-badge>
            <ion-badge color="primary">{{ product.price }} €</ion-badge>
            <ion-button expand="full" color="secondary" :router-link="{name:'product', params:{id:product.id}}">Comprar</ion-button>

          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonBadge,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  loadingController
} from '@ionic/vue';
import axios from "axios";

export default {
  name: 'CatalogueList',
  components: {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonBadge,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar
  },
  data() {
    return {
      products: [],
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
      }, 1900);
    },
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-item {
  cursor: pointer;
}

ion-thumbnail img {
  text-align: center;
  -o-object-fit: contain;
  object-fit: contain;
}

ion-label .llista-cat {
  background-color: cornflowerblue;
  margin-right: 10px;
}
</style>
