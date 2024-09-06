<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <FeedHeader />
      <div class="buttons">
        <button class="backButton" @click="back()"><img src="../theme/assets/icons/BackIcon.svg" alt=""></button>
        <button class="backButton" @click="back()"><img src="../theme/assets/icons/OptionsIcon.svg" alt=""></button>
      </div>

      <section v-if="loading == true" class="cards">
        <div class="cardPublication">

          <Galleria :value="images" :showIndicatorsOnItem="true" :showIndicators="true"
            :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
          </Galleria>
          <div>

          </div>
          <div class="texts">
            <h1 class="userName">Fulano da silva</h1>
            <h2 class="animalDescription">Animal desaparecido</h2>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis velit, a
              pharetra lectus. Vivamus tristique faucibus molestie. Mauris ultricies enim ipsum, vitae pretium diam
              ullamcorper in. Aliquam pulvinar laoreet sapien varius vulputate. Aliquam rhoncus iaculis interdum.</p>
          </div>
        </div>

        <div class="cardInfos">
          <div class="avatar">
            <ion-avatar>
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <div class="avatarInfos">
              <h1 class="userName">Fulano da silva pereira</h1>
              <p>Dono do animal</p>
            </div>

          </div>
          <div class="contactInfos">

            <span class="contactInfo"><img src="../theme/assets/icons/PhoneIcon.svg" alt="">
              <h1>(99) 99999-9999</h1>
            </span>
            <span class="contactInfo"><img src="../theme/assets/icons/EmailIcon.svg" alt="">
              <h1>Fulano@teste.com</h1>
            </span>
            <span class="contactInfo"><img src="../theme/assets/icons/InstagramIcon.svg" alt="">
              <h1>@FulanoPereira</h1>
            </span>
          </div>
          <div class="contactDetails">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis velit, a
              pharetra lectus.</p>

          </div>
        </div>
      </section>

      <section v-if="loading == false" class="skeleton" style="width: 85vw;margin: auto;">
        <div style="display: flex; justify-content: center;margin-top: 2rem;flex-direction: column;align-items: start;">
          <Skeleton width="85vw" height="35vh"></Skeleton>
          <Skeleton width="10rem" style="margin-top: 1rem;" class="mb-2"></Skeleton>
          <Skeleton width="20rem" style="margin-top: 0.5rem;"></Skeleton>
          <Skeleton width="15rem" style="margin-top: 0.5rem;"></Skeleton>
        </div>

        <div style="display: flex; justify-content: center;margin-top: 1rem;flex-direction: column;align-items: start;">
          <Skeleton width="85vw" height="20vh"></Skeleton>
          <Skeleton width="16rem" style="margin-top: 1rem;" class="mb-2"></Skeleton>
          <Skeleton width="15rem" style="margin-top: 0.5rem;"></Skeleton>
          <Skeleton width="20rem" style="margin-top: 0.5rem;"></Skeleton>
        </div>
      </section>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonAvatar } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import FeedHeader from '@/components/FeedHeader.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { PublicationService } from '@/services/PublicationService';

const route = useRoute();
const loading = ref(true)
const routeParam = route.params.id

onMounted(() => {
  console.log(routeParam)
  const pub = PublicationService.getData()
});


const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);




const back = () => {
  history.back()
}
</script>

<style scoped>
.buttons {
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;

  .backButton {
    padding-inline: 1rem;
    margin-inline: 1rem;
    background: none;
  }
}

.cards {
  width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .cardPublication {
    display: flex;
    flex-direction: column;
    border: solid 1px #EBEBEB;
    border-radius: 0.5rem;
  }

  .images {
    width: 100%;
    height: 14rem;
    background: gray;
    margin: 0;
    border-radius: 0.5rem 0.5rem 0 0;
  }
}


.userName {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}

.animalDescription {
  margin: 0;
  margin-top: 0.1rem;
  font-size: 12px;
  font-weight: bold;
}

.description {
  margin: 0;
  font-size: 12px;
}

.texts {
  padding: 1rem;
  color: #5c5c5c;

}

.cardInfos {
  border: 1px solid #EBEBEB;
  border-radius: 0.5rem;
}

ion-avatar {
  width: 3rem;
  height: 3rem;
}

.avatar {
  padding: 1rem;
  display: flex;
  gap: 1rem;

  .avatarInfos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    h1 {
      color: #5c5c5c
    }

    p {
      font-size: 12px;
      color: #5c5c5c;
      margin: 0;
    }
  }
}

.contactInfos {
  display: flex;
  flex-direction: column;
  padding-inline: 1.5rem;
  gap: 0.5rem;
  color: #5c5c5c;
}

.contactInfo {
  display: flex;
  gap: 0.5rem;

  img {
    width: 1rem;
  }

  h1 {
    font-size: 14px;
    margin: 0;

  }
}

.contactDetails {
  padding-inline: 1rem;

  p {
    color: #5c5c5c;
    font-size: 12px;
  }
}
</style>
