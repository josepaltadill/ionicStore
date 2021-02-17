<template>
  <div class="grid-card" v-if="data">
    <div class="card-image">
      <img :src="product.image">
    </div>
    <div class="card-content">
      <h2>{{ product.title }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <ion-chip outline color="primary">
        <ion-label>{{ product.category }}</ion-label>
      </ion-chip>
      <ion-badge color="tertiary" slot="end">{{ product.price }} €</ion-badge>
    </div>
    <div>
      <ion-button expand="full" color="secondary" :router-link="{name:'product', params:{id:product.id}}">Comprar</ion-button>
    </div>
  </div>
  <div v-if="!data">
    <div class="ion-padding custom-skeleton">
      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
      <ion-skeleton-text animated></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    </div>
    <div class="grid-card">
      <div class="card-image">
        <ion-skeleton-text animated width="100%"></ion-skeleton-text>
      </div>
      <div class="card-content">
        <h2><ion-skeleton-text animated width="100%"></ion-skeleton-text></h2>
        <p class="product-description"><ion-skeleton-text animated width="100%"></ion-skeleton-text></p>
        <ion-chip outline color="primary">
          <ion-label><ion-skeleton-text animated width="100%"></ion-skeleton-text></ion-label>
        </ion-chip>
        <ion-badge color="tertiary" slot="end"><ion-skeleton-text animated width="100%"></ion-skeleton-text></ion-badge>
      </div>
      <div>
        <ion-button expand="full" color="secondary" :router-link="{name:'product', params:{id:product.id}}"><ion-skeleton-text animated width="100%"></ion-skeleton-text></ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  IonLabel,
  IonChip,
  IonBadge,
  IonButton,
  IonSkeletonText
} from '@ionic/vue';
import {ref} from 'vue';
export default {
  name: "Product",
  components: {
    IonLabel,
    IonChip,
    IonBadge,
    IonButton,
    IonSkeletonText
  },
  data() {
    return {
      value: ''
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
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.grid-card {
  height: 100%;
  box-shadow: 2px 2px 7px var(--ion-color-warning-contrast);

  display: flex;
  flex-direction: column;
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
  left: 25px;
  background-color: rgba(var(--ion-color-base-rgb), 0.50);
  color: var(--ion-color-primary-contrast);
}
.card-content ion-label {
  font-size: 12px;
}

.card-content ion-badge {
  padding: 10px;
  font-size: 16px;
}
</style>
