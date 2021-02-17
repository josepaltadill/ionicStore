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
      <div v-if="data">
        <ion-list>
          <ion-item :router-link="{name:'product', params:{id:item.id}}" v-for="item in items" :key="item.id">
            <ion-thumbnail slot="start">
              <img :src="item.image">
            </ion-thumbnail>
            <ion-label>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <ion-badge class="llista-cat">{{ item.category }}</ion-badge>
              <ion-badge color="primary">{{ item.price }} €</ion-badge>
              <ion-button expand="full" color="secondary" :router-link="{name:'item', params:{id:item.id}}">Comprar</ion-button>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
      <ion-infinite-scroll threshold="100px" id="infinite-scroll" @ionInfinite="loadData($event)" :disabled="isDisabled">
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
      <div v-if="!data">
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </div>
        <ion-list>
          <ion-item :router-link="{name:'product', params:{id:item.id}}" v-for="item in items" :key="item.id">
            <ion-thumbnail slot="start">
              <ion-skeleton-text animated width="20%"></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h2><ion-skeleton-text animated width="60%"></ion-skeleton-text></h2>
              <p><ion-skeleton-text animated width="100%"></ion-skeleton-text></p>
              <ion-badge class="llista-cat"><ion-skeleton-text animated width="70%"></ion-skeleton-text></ion-badge>
              <ion-badge color="primary"><ion-skeleton-text animated width="70%"></ion-skeleton-text></ion-badge>
              <ion-button expand="full" color="secondary" :router-link="{name:'product', params:{id:item.id}}"><ion-skeleton-text animated width="70%"></ion-skeleton-text></ion-button>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
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
  loadingController,
  IonSkeletonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/vue';
import axios from "axios";
import {ref} from 'vue';

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
    IonSearchbar,
    IonSkeletonText,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  },
  data() {
    return {
      products: [],
      items: [],
      i: 0,
      isDisabled: false
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
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data
          setTimeout(() => {
            for (; this.i < 10; this.i++) {
              this.items.push(this.products[this.i]);
            }
          }, 500)
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

    loadData(event) {
      setTimeout(() => {
        this.addMoreItems();
        if (this.items.length == this.products.length) {
          this.isDisabled = true
        }
      },500);
    },
    addMoreItems() {
      const max = this.items.length + 10;
      const min = max - 10;
      for (let i = min; i < max; i++) {
        this.items.push(this.products[i]);
      }
    }
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
