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
        <ion-item>
          <ion-avatar slot="start">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Finn</h2>
            <h3>I'm a big deal</h3>
            <p>Listen, I've had a pretty messed up day...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Han</h2>
            <h3>Look, kid...</h3>
            <p>I've got enough on my plate as it is, and I...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Rey</h2>
            <h3>I can handle myself</h3>
            <p>You will remove these restraints and leave...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
          </ion-avatar>
          <ion-label>
            <h2>Luke</h2>
            <h3>Your thoughts betray you</h3>
            <p>I feel the good in you, the conflict...</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';

export default {
  name: 'Folder',
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
    IonAvatar,
    IonLabel
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