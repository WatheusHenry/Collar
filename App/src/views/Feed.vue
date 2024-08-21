<template>
  <ion-page>
    <FeedHeader />
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <span class="locale">
        <p>Marília-SP</p><img class="icon" src="../theme/assets/icons/PinIcon.svg" alt="">
      </span>
      <div class="publications" v-for="(pub, index) in feedObjs">
        <CardPublication class="" :feed-obj="pub" />
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
import { IonPage, IonContent } from '@ionic/vue';
import FeedHeader from '@/components/FeedHeader.vue';
import CardPublication from '@/components/CardPublication.vue';

const handleRefresh = (event: CustomEvent) => {
  setTimeout(() => {
    // Fazendo o cast para o tipo correto antes de acessar a propriedade `complete`
    const refresher = event.target as HTMLIonRefresherElement;
    refresher.complete();
  }, 2000);
};


const feedObjs = [
  {
    userId: 1,
    pubId: 1,
    images: [3, 2, 1],
    username: "Jorginho",
    animalStatus: "Animal desaparecido",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra leo et odio hendrerit, id tempor tortor faucibus.Curabitur gravida at mauris vitae ornare...",
  }, {
    userId: 2,
    pubId: 2,
    images: [],
    username: "Fulano da silva pereira",
    animalStatus: "Animal desaparecido",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra leo et odio hendrerit, id tempor tortor faucibus.Curabitur gravida at mauris vitae ornare...",
  }, {
    userId: 3,
    pubId: 3,
    images: [],
    username: "Fulano da silva pereira",
    animalStatus: "Animal desaparecido",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra leo et odio hendrerit, id tempor tortor faucibus.Curabitur gravida at mauris vitae ornare...",
  },
]
</script>
