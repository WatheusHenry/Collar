<template>
  <ion-page>
    <div class="container-perfil">
      <div class="perfil">
       <img src="../theme/assets/icons/perfil.svg">
      </div>
      <div>
        <h1 style="text-align: center;color: #646464;font-size: 25px;">Fulano da Silva</h1>
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
          <img src="../theme/assets/icons/seta.svg" alt="Ícone" style="width: 20px; height: auto; margin-left: 2.7rem;">
        </button>
        <button class="tamanho">
          <img src="../theme/assets/icons/like.svg" alt="Ícone" style="width: 25px; height: auto;">
          Salvos
          <img src="../theme/assets/icons/seta.svg" alt="Ícone" style="width: 20px; height: auto; margin-left: 5.2rem;">
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
  height: 2.4rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  padding-left: 1rem;
  text-align: center;
  
}

.tamanho {
  color: #696969;
  background-color: #F3F3F3;
  width: 16rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding-left: 1rem;
  gap: 10px;
  border-bottom: #D9D9D9 1px solid;
}

.container-image {
  margin-top: 2rem;
  background-color: #F3F3F3;
  border-radius: 1rem;
}


.exit {
  margin-top: 12rem;
}

.exit-ajuste {
  color: #D90909;
  background-color: #F3F3F3;
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding-left: 1rem;
  gap: 0.5rem;
  margin-top: 5rem;
  display: flexbox;
}
</style>