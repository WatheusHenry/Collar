<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
        </ion-tab-button>

        <ion-tab-button tab="create" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
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
