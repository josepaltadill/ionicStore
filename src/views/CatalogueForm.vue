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
              <ion-title>Insertar nou producte</ion-title>
            </ion-col>
            <ion-col size-lg="8" size-xs="12">
              <ion-searchbar placeholder="Buscar productes..."></ion-searchbar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <div class="content-formulari">
          <ion-list>
            <ion-item>
              <ion-label position="floating">Nom del producte</ion-label>
              <ion-input type="text" id="nom" name="nom" placeholder="Afegeix el nom"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Descripció del producte</ion-label>
              <ion-textarea id="descripcio" name="descripcio" placeholder="Afegeix la descripció"></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Imatge del producte</ion-label>
              <ion-input class="input-file" type="file" id="imatge" name="imatge" placeholder="Afegeix el nom"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Categoria</ion-label>
              <ion-select placeholder="Tria una categoria" ok-text="OK" cancel-text="CANCEL·LAR">
                <ion-select-option value="01">men clothing</ion-select-option>
                <ion-select-option value="02">jewelery</ion-select-option>
                <ion-select-option value="03">electronics</ion-select-option>
                <ion-select-option value="04">women clothing</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Preu</ion-label>
              <ion-input type="number" id="preu" name="preu" placeholder="Afegeix el preu"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button color="secondary">Afegir nou producte</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelectOption,
  IonSelect,
  IonButton,
  loadingController
} from '@ionic/vue';
export default {
  name: "CatalogueForm",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonTitle,
    IonMenuButton,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelectOption,
    IonSelect,
    IonButton
  },
  mounted() {
    this.presentLoading();
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
      }, 30);
    },
  }
}
</script>

<style scoped>
ion-content > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
.content-formulari {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 30px;
  -webkit-box-shadow: 2px 2px 7px var(--ion-color-warning-contrast);
  box-shadow: 2px 2px 7px var(--ion-color-warning-contrast);
}
.content-formulari ion-item {
  padding: 10px 0;
}
.content-formulari ion-item ion-label {
  margin-bottom: 10px;
}
ion-input.input-file {
  line-height: 2em;
}
</style>
