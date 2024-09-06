<template>
  <ion-page>
    <FeedHeader />

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <span v-if="loading == true" class="locale">
        <p>Marília-SP</p><img class="icon" src="../theme/assets/icons/PinIcon.svg" alt="">
      </span>
      <div v-if="loading == true" class="publications" v-for="(pub, index) in feedObjs">
        <CardPublication class="" :feed-obj="pub" />
      </div>

      <!-- Skeleton -->
      <div v-if="loading == false" class="skeleton" style="width: 85vw;margin: auto;">
        <div v-for="i in 2"
          style="display: flex; justify-content: center;margin-top: 2rem;flex-direction: column;align-items: start;">
          <Skeleton width="85vw" height="30vh"></Skeleton>
          <Skeleton width="16rem" style="margin-top: 1rem;" class="mb-2"></Skeleton>
          <Skeleton width="15rem" style="margin-top: 0.5rem;"></Skeleton>
          <div style="display: flex; gap: 1rem;">
            <Skeleton width="5rem" height="1.5rem" style="margin-top: 0.5rem;"></Skeleton>
            <Skeleton width="5rem" height="1.5rem" style="margin-top: 0.5rem;"></Skeleton>
          </div>
        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<style>
.locale {
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 1rem 0;
  gap: 0.5rem;

  p {
    font-weight: 600;
    color: #D6D6D6;
    font-size: 14px;
    margin: 0;
    line-height: 1.5rem;
  }

  .icon {
    width: 1rem;
  }
}

.publications {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>

<script setup lang="ts">
import { IonPage, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import FeedHeader from '@/components/FeedHeader.vue';
import CardPublication from '@/components/CardPublication.vue';
import { onMounted, ref } from 'vue';
import { PublicationService } from '@/services/PublicationService';

const loading = ref(false)
const feedObjs: any = ref([])

onMounted(() => {
  feedObjs.value = PublicationService.getImages();
  setTimeout(() => {
    loading.value = true
  }, 2000);
})



const handleRefresh = (event: CustomEvent) => {
  setTimeout(() => {
    const refresher = event.target as HTMLIonRefresherElement;
    refresher.complete();
    window.location.reload()
  }, 2000);
};


</script>