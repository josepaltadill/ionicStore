<template>
  <ion-content class="ion-padding">
    <div>{{ content }}</div>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
export default {
  name: "DescripcioPopover",
  props: {
    content: { type: String },
  },
  components: { IonContent }
}
</script>

<style scoped>

</style>
