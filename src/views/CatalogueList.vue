<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Llistat de productes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="product in products" :key="product.id">
          <ion-thumbnail slot="start">
            <img :src="product.image">
          </ion-thumbnail>
          <ion-label>
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <ion-badge color="primary">{{ product.category }}</ion-badge>
            <p>{{product.price}}€</p>
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
  IonBadge
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
    IonBadge
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.products = response.data
        })
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
</style>