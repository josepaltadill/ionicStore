<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Producte individual</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="single-product-card">
        <div class="product-image">
          <img :src="product.image" alt="" />
        </div>
        <div class="product-content">
          <ion-card-header>
            <ion-card-title>
              <h1>{{ product.title }}</h1>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ product.description }}
          </ion-card-content>
          <ion-badge color="tertiary" slot="end">{{ product.price }} €</ion-badge>
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import {
  IonToolbar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonBadge
} from '@ionic/vue';

export default {
  name: "ProductInd",
  data() {
    return {
      id:this.$route.params.id,
      product: {}
    }
  },
  mounted() {
    axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then(response => {
          this.product = response.data
        })
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonBadge
  },
}
</script>

<style scoped>
  .single-product-card {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 100px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    box-shadow: none;
  }
</style>