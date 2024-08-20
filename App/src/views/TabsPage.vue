<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/app/home">
          <ion-icon  :icon="home" />
        </ion-tab-button>

        <ion-tab-button tab="Create" href="/app/create">
          <ion-icon  :icon="addCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="Search" href="/app/search">
          <ion-icon  :icon="searchOutline" />
        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/app/profile">
          <ion-icon  :icon="personCircleOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {
  searchOutline, home, addCircleOutline, personCircleOutline
  
 } from 'ionicons/icons';
</script>
