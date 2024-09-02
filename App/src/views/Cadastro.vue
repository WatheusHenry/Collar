<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-button><img class="backIcon" src="../theme/assets/icons/BackIcon.svg" alt=""></ion-button>
          <div style="display: flex;flex-direction:column ;padding: 2rem;gap: 0.3rem;">
            <h1>Cadastro</h1>
            <p>Encontre seu animalzinho</p>
          </div>
        </ion-toolbar>
      </ion-header>
      <section style="display: flex;flex-direction: column;justify-content: center;">
        <ion-avatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <h2
          style="margin: auto; width: 30%;text-align: center;font-size: medium;margin-top: 1rem;font-weight: 600;color: #FF934B;">
          Adicione uma imagem de perfil</h2>
      </section>

      <section class="inputs">
        <InputText placeholder="Nome completo" type="text" v-model="nome" />
        <InputText placeholder="E-mail" type="text" v-model="email" />
        <InputText placeholder="Telefone" type="text" v-model="telefone" />
        <InputText placeholder="Senha" type="text" v-model="senha" />
        <InputText placeholder="Repetir senha" type="text" v-model="repetirSenha" />
      </section>
      <div style="width: 100vw;display: flex;margin-top: 4rem">

        <Button class="InButton">Entrar</Button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonContent, IonRouterOutlet, IonAvatar } from '@ionic/vue';
import { ref } from 'vue';

const nome = ref(null);
const email = ref(null);
const telefone = ref(null);
const senha = ref(null);
const repetirSenha = ref(null);
const contaCriada = ref(false)

const criarConta = () => {
  contaCriada.value = true;
}


</script>

<style scoped>
ion-header {
  box-shadow: none !important;

}

ion-avatar {
  margin: auto
}


ion-button {
  position: absolute;
  --background: none;
  --box-shadow: none;
  top: 3vh;
  left: 4vw;
}

ion-button img.backIcon {
  filter: invert(25%) sepia(100%) saturate(1000%) hue-rotate(340deg);
}


ion-toolbar {
  --background: #FFE2B7;

  h1 {
    color: #D94509;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin: 0;

  }

  p {
    margin: 0;
    color: #646464;
    font-size: 14px;
    text-align: center;
  }
}

ion-content {
  --background: #FFE2B7;
}


.inputs {
  padding-top: 2rem;
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;


  ion-input {
    --background: #FFB78E;
    --color: #F17441;
    height: 2.5rem !important;
    border-bottom: none !important;
    border: #D94509 2px solid;
    border-radius: 0.5rem;


  }

  label {
    border-radius: 0.5rem !important;
    /* padding: 1rem !important; */
  }
}

.p-inputtext {
  border: #F17441 2px solid !important;
  background-color: #FFB78E !important;
  color: #F17441 !important;
}

.p-placeholder {
  color: #F17441 !important;
}

.p-button {
  margin: auto;
  background: #D94509 !important;
  border: none;
  width: 10rem;
  font-weight: 600;
}
</style>