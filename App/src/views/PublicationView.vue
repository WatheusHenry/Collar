<template>
    <ion-page>
      <ion-header>
      </ion-header>
      <ion-content :fullscreen="true">
        <section @click="openDetails()" class="cardPublication">
          <div style="padding: 1rem;">
            <ion-avatar>
              <img class="avatarIcon" alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
          </div>
          <div style="display: flex;flex-direction: column;padding-top: 1rem;padding-right: 1rem;">
            <h1>Fulano da silva pereira</h1>
            <p style="font-weight: bolder;">Animal Desaparecido</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta elit eget nibh auctor, quis placerat
              nunc ultricies. Nulla at dignissim sapien.</p>
            <div style="margin-top: 1rem; display: flex; gap: 5px;">
                <img src="../theme/assets/images/dog.svg" alt="" />
              <img src="../theme/assets/images/dog.svg" alt="" />
              <img src="../theme/assets/images/dog.svg" alt="" />
            </div>
          </div>
        </section>
        <section @click="openDetails()" class="cardPublication">
          <div style="padding: 1rem;">
            <ion-avatar>
              <img class="avatarIcon" alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
          </div>
          <div style="display: flex;flex-direction: column;padding-top: 1rem;padding-right: 1rem;">
            <h1>Fulano da silva pereira</h1>
            <p style="font-weight: bolder;">Animal Desaparecido</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra leo et odio hendrerit, id tempor tortor faucibus. Curabitur gravida at mauris vitae ornare...</p>
            <div style="margin-top: 1rem; display: flex; gap: 5px;">
                <img src="../theme/assets/images/dog.svg" alt="" />
              <img src="../theme/assets/images/dog.svg" alt="" />
            </div>
          </div>
        </section>
        
  
  
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonContent, IonAvatar, IonSearchbar } from '@ionic/vue';
  import { inject } from 'vue';
  const ionRouter: any = inject('navManager');
  
  const openDetails = () => {
    ionRouter.navigate({
      routerDirection: 'none',
      routerLink: `/app/details/${1}`
    });
  }
  </script>
  
  <style scoped>
  ion-header {
    box-shadow: none;
    border-bottom: 1px solid #EBEBEB;
    margin-top: 3rem;
  }
  
  ion-searchbar.custom {
    width: 90vw;
    margin: auto;
    --color: #383838;
    --background: #FFF;
    --border-radius: 4px;
    --box-shadow: none !important;
    --border: 1px solid black;
  
  }
  </style>
  
  <style>
  input {
    height: 2rem !important;
    border: 1px solid #EBEBEB !important;
  }
  
  .searchbar-search-icon.sc-ion-searchbar-md {
    top: 6px;
    width: 1.3125rem;
    height: 1.3125rem;
  }
  
  .avatarIcon {
    width: 2rem;
    height: 2rem;
  }
  
  ion-avatar {
    width: 2rem;
    height: 2rem;
  }
  
  .cardPublication {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: #EBEBEB 1px solid;
  
    h1 {
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      margin-bottom: 0.5rem;
    }
  
    p {
      font-size: 12px;
      margin: 0;
    }
  }
  </style>
  