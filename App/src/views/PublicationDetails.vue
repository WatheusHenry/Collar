<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <FeedHeader />

      <button @click="back()">back</button>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import FeedHeader from '@/components/FeedHeader.vue';
import { inject } from 'vue';
const router: any = inject('navManager')

const back = () => {
  router.navigate({
    routerDirection: 'none',
    routerLink: `/app/home`
  });
}
</script>
