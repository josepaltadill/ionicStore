<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title><h1>{{ product.title }}</h1></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="single-product-card">
        <div class="product-image">
          <img :src="product.image" alt="" />
        </div>
        <div class="product-content">
          <ion-card-content>
            {{ product.description }}
          </ion-card-content>
          <ion-badge class="content-preu" color="tertiary" slot="end">{{ product.price }} €</ion-badge>
          <div class="content-compra">
            <ion-item lines="none">
              <ion-label>Quantitat</ion-label>
              <ion-input placeholder="0" type="number"></ion-input>
            </ion-item>
            <ion-button color="secondary">Comprar</ion-button>
          </div>
          <div class="socials">
            <ion-icon src="assets/img/logo-facebook.svg"></ion-icon>
            <ion-icon src="assets/img/logo-instagram.svg"></ion-icon>
            <ion-icon src="assets/img/logo-twitter.svg"></ion-icon>
            <ion-icon src="assets/img/logo-pinterest.svg"></ion-icon>
          </div>
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
  IonCardContent,
  IonCard,
  IonBadge,
  IonItem,
  IonLabel,
  IonInput
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
    IonCardContent,
    IonCard,
    IonBadge,
    IonItem,
    IonLabel,
    IonInput
  },
}
</script>

<style scoped>
  .single-product-card {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 90px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    align-items: center;
    box-shadow: none;
  }
  .single-product-card .product-image {
    padding: 0 20px;
  }
  .single-product-card ion-card-content {
    padding-left: 0;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .single-product-card .content-preu {
    padding: 10px 20px;
    font-size: 20px;
  }
  .single-product-card .content-compra {
    display: flex;
    margin-top: 20px;
  }
  .content-compra > ion-item {
    width: 50%;
    margin-right: 20px;
    border: 1px solid var(--ion-color-light-shade);
    border-radius: 4px;
  }
  .socials {
    margin-top: 30px;
  }
  .socials ion-icon {
    width: 40px;
    height: 40px;
  }
  .socials ion-icon:not(:last-child) {
    margin-right: 10px;
  }
</style>