<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue Grid</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <product :product="product"></product>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: null
    }
  }
}
</script>

<style scoped>

</style>