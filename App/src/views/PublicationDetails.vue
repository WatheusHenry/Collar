<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <FeedHeader />
      <div class="buttons">
        <button class="backButton" @click="back()"><img src="../theme/assets/icons/BackIcon.svg" alt=""></button>
        <button class="backButton" @click="back()"><img src="../theme/assets/icons/OptionsIcon.svg" alt=""></button>
      </div>

      <section class="cards">
        <div class="cardPublication">
          <swiper pagination :modules="[Virtual, Pagination]" :slides-per-view="1" :space-between="2" virtual>
            <swiper-slide v-for="(slideContent, index) in slides" :key="index" :virtualIndex="index">
              <p class="images">{{ slideContent }}</p>
            </swiper-slide>
          </swiper>
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


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonAvatar } from '@ionic/vue';
import { inject, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Virtual, Pagination } from 'swiper/modules';
import FeedHeader from '@/components/FeedHeader.vue';
import 'swiper/css';
import 'swiper/css/pagination';

onMounted(() => {
  
})


  const slides = Array.from({ length: 5 }).map(
    (el, index) => `Slide ${index + 1}`
  );
const router: any = inject('navManager')


const back = () => {
  router.navigate({
    routerDirection: 'none',
    routerLink: `/app/home`
  });
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

  .avatarInfos {
    margin: auto;

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
