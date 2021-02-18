<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-searchbar placeholder="Buscar productes..."></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="data">
        <ion-card class="single-product-card">
          <div class="product-image">
            <img :src="product.image" alt="" />
          </div>
          <div class="product-content">
            <ion-card-title><h1>{{ product.title }}</h1></ion-card-title>
            <ion-card-content>
              {{ product.description }}
            </ion-card-content>
            <div class="section-preu">
              <p class="content-preu">{{ product.price }} €</p>
              <ion-fab-button color="secondary" @click="openModalFavorits">
                <ion-icon :md="heart"></ion-icon>
              </ion-fab-button>
              <ion-fab-button color="secondary" @click="openEditProduct">
                <ion-icon :md="pencil"></ion-icon>
              </ion-fab-button>
            </div>
            <div class="content-compra">
              <ion-item lines="none">
                <ion-label>Quantitat</ion-label>
                <ion-input placeholder="0" type="number" v-model="quantitat"></ion-input>
              </ion-item>
              <ion-button @click="openModal" color="secondary">Comprar</ion-button>
            </div>
            <div class="socials">
              <ion-icon src="assets/img/logo-facebook.svg"></ion-icon>
              <ion-icon src="assets/img/logo-instagram.svg"></ion-icon>
              <ion-icon src="assets/img/logo-twitter.svg"></ion-icon>
              <ion-icon src="assets/img/logo-pinterest.svg"></ion-icon>
            </div>
          </div>
        </ion-card>
      </div>
      <div v-if="!data">
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </div>
        <ion-card class="single-product-card">
          <div class="product-image">
            <ion-skeleton-text animated width="60%"></ion-skeleton-text>
          </div>
          <div class="product-content">
            <ion-card-title><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-card-title>
            <ion-card-content>
              <ion-skeleton-text animated width="60%"></ion-skeleton-text>
            </ion-card-content>
            <p class="content-preu"><ion-skeleton-text animated width="60%"></ion-skeleton-text></p>
            <div class="content-compra">
              <ion-item lines="none">
                <ion-label><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-label>
                <ion-input placeholder="0" type="number" v-model="quantitat"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-input>
              </ion-item>
              <ion-button @click="openModal" color="secondary"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-button>
            </div>
            <div class="socials">
              <ion-icon src="assets/img/logo-facebook.svg"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-icon>
              <ion-icon src="assets/img/logo-instagram.svg"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-icon>
              <ion-icon src="assets/img/logo-twitter.svg"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-icon>
              <ion-icon src="assets/img/logo-pinterest.svg"><ion-skeleton-text animated width="60%"></ion-skeleton-text></ion-icon>
            </div>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonCardContent,
  IonCardTitle,
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonSearchbar,
  loadingController,
  modalController,
  IonSkeletonText,
  IonFabButton,
  actionSheetController
} from '@ionic/vue';
import { heart, pencil, trash, close } from 'ionicons/icons';
import Cistella from "@/components/Cistella";
import {ref} from 'vue';
import AfegirFavoritsModal from "@/components/AfegirFavoritsModal";

export default {
  name: "ProductInd",
  data() {
    return {
      id:this.$route.params.id,
      product: {},
      quantitat: this.quantitat,
      heart,
      pencil,
      trash,
      close
    }
  },
  setup() {
    const data = ref();

    setTimeout(() => {
      data.value = {
      };
    }, 2000);

    return { data }
  },
  mounted() {
    this.presentLoading();
    axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then(response => {
          this.product = response.data
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
      }, 1800);
    },
    async openModal() {
      const modal = await modalController
          .create({
            component: Cistella,
            cssClass: 'my-cistella-class',
            componentProps: {
              title: 'Felicitats',
              content: "Producte afegit correctament a la cistella",
              producte: this.product.title,
              preu: this.product.price,
              unitats: this.quantitat
            },
          })
      return modal.present();
    },
    async openModalFavorits() {
      const modal = await modalController
          .create({
            component: AfegirFavoritsModal,
            cssClass: 'my-favorits-class',
            componentProps: {
              title: 'Felicitats',
              content: "Producte afegit correctament a la llista de favorits",
              producte: this.product.title,
            },
          })
      return modal.present();
    },
    async openEditProduct() {
      const actionSheet = await actionSheetController.create({
        header: 'Edita el producte',
        cssClass: 'actionSheet-class',
        buttons: [
          {
            text: 'Modificar',
            icon: pencil,
          },
          {
            text: 'Delete',
            icon: trash,
          },
          {
            text: 'Cancel',
            icon: close,
          }
        ]
      });
      return actionSheet.present();
    }
  },
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonToolbar,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    IonSearchbar,
    IonSkeletonText,
    IonFabButton
  },
}
</script>

<style scoped>
  ion-searchbar {
    max-width: 80%;
    margin: auto;
  }
  .single-product-card {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 90px 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 50px 1fr;
    grid-template-columns: repeat(2, 1fr);
    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: none;
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
    font-size: 20px;
    font-weight: 600;
    color: var(--ion-color-primary);
  }
  .single-product-card .content-compra {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
  }
  .section-preu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
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

  @media (max-width: 720px) {
    .single-product-card {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      row-gap: 50px;
    }
  }
</style>
