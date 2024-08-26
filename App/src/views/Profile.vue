<template>
  
  <div class="container-perfil">
      <div class="perfil">
      <ion-avatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
    </div>
    <div>
      <h1 style="text-align: center;">Fulano da Silva</h1>
    </div>
    <div>
      <h5 style="text-align: center;">fulanodasilva@gmail.com</h5>
    </div>
    <div class="item">
    <ion-button size="small" style="color: #FFB78E;">
  <ion-icon slot="start" name="star" ></ion-icon>
  Editar Perfil
  </ion-button>
    </div>
</div>

</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import FeedHeader from '@/components/FeedHeader.vue';
</script>



<style>
.container-perfil{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}


.item{
  justify-content: ;
}

.button-solid{
  background: none;
}
</style>