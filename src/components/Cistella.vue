<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{{ content }}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {{producte}}
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardContent>
        <div>
          Unitats: {{unitats}}
        </div>
        <div>
          Preu unitari: {{preu}}
        </div>
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardContent>
        <IonCardTitle>Total compra: {{total}}</IonCardTitle>
      </IonCardContent>
    </IonCard>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, modalController } from '@ionic/vue';
export default {
  name: "Cistella",
  props: {
    title: { type: String, default: 'Super Modal' },
    content: { type: String, default: 'Super Modal' },
    unitats: {type: Number, default: 0},
    producte: {type: String},
    preu: {type: Number},
  },
  data() {
    return {
      total: this.unitats * this.preu
    }
  },
  methods: {
    dismissModal() {
      return modalController.dismiss();
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,IonButtons, IonButton }
}
</script>

<style scoped>

</style>
