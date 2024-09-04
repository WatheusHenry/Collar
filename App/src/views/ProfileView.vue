<template>
  <ion-page>
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
        <p style="text-align: center; color: #F17441;">fulanodasilva@gmail.com</p>
      </div>
      <div>
        <button class="profile">
          Editar Perfil
        </button>
      </div>
      <div class="container-image">
        <button class="tamanho">
          <img src="../theme/assets/icons/image-line.svg" alt="Ícone" style="width: 25px; height: auto;">
          Publicações
        </button>
        <button class="tamanho">
          <img src="../theme/assets/icons/like.svg" alt="Ícone" style="width: 25px; height: auto;">
          Salvos
        </button>
      </div>
      
      <div class="exit">
        <button class="exit-ajuste">
      <img src="../theme/assets/icons/exit.svg" alt="Ícone" style="width: 25px; height: auto;">
      Sair
    </button>
  </div>
  
</div>
</ion-page>

</template>

<script setup lang="ts">
import { IonIcon, IonButton, IonAvatar,IonPage } from '@ionic/vue';
import FeedHeader from '@/components/FeedHeader.vue';
</script>



<style>
.container-perfil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem
}


.button-solid {
  background: none;
}

.profile {
  color: #D94509;
  background-color: #FFB78E;
  width: 7rem;
  height: 3rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding-left: 1rem;
}

.tamanho {
  color: #696969;
  background-color: #D9D9D9;
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding-left: 1rem;
  gap: 10px;
  border-top: #D9D9D9 1px solid;





}

.container-image {
  margin-top: 2rem;
  background-color: #D9D9D9;
  border-radius: 1rem;

}


.exit {
  margin-top: 20rem;
}

.exit-ajuste {
  color: #D90909;
  background-color: #D9D9D9;
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding-left: 1rem;
  gap: 10px;

}
</style>