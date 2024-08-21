<template>

  <ion-header>
    <ion-toolbar>


      <ion-buttons slot="start">
        <ion-button shape="round"> <img class="logo" src="../theme/assets/LogoEscrita.svg" alt=""> </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button shape="round"><img src="../theme/assets/icons/BellIcon.svg" alt=""></ion-button>
      </ion-buttons>

    </ion-toolbar>
  </ion-header>

</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonButton, IonButtons } from '@ionic/vue';

defineProps({
  name: String,
});
</script>

<style scoped>
.container {}

.logo {
  width: 6rem;
}

ion-header {
  box-shadow: none;
}

ion-toolbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  --padding: 1rem;
}
</style>
