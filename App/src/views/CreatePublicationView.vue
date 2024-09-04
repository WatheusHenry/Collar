<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section style="display: flex;flex-direction: column;height: 90vh;">

        <p class="header">Nova publicação</p>
        <div style="width: 90vw;display: flex;justify-content: center;flex-direction: column;margin-inline:auto;">
          <p style="color: #696969;font-size: 14px;font-weight: 600;">Imagens</p>
          <FileUpload mode="basic"  @select="onFileSelect" customUpload :multiple="true"
            chooseLabel="Selecionar imagens">
          </FileUpload>
          <div style="display: flex; gap: 0.5rem;margin-top: 1rem;">
            <div v-if="images.length == 0"
              style="height: 7rem;width: 7rem;border: 1px solid #F2F2F2;border-radius: 0.5rem; display: flex;"> <img
                src="../theme/assets/icons/cameraIcon.svg" alt="" style="margin: auto;" /></div>
            <div v-if="images.length == 0"
              style="height: 7rem;width: 7rem;border: 1px solid #F2F2F2;border-radius: 0.5rem; display: flex;"> <img
                src="../theme/assets/icons/cameraIcon.svg" alt="" style="margin: auto;" /></div>
            <div v-if="images.length == 0"
              style="height: 7rem;width: 7rem;border: 1px solid #F2F2F2;border-radius: 0.5rem; display: flex;"> <img
                src="../theme/assets/icons/cameraIcon.svg" alt="" style="margin: auto;" /></div>
            <div v-if="images.length != 0" class="image-scroll">

              <div v-for="(img, index) in images" :key="index" class="image-container">
                <img :src="img" alt="Image" class="uploaded-image"
                  style="height: 7rem;width:7rem;border-radius: 0.5rem;" />
                <button class="remove-button" @click="removeImage(index)">x</button>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 90vw;display: flex;justify-content: center;flex-direction: column;margin-inline:auto;">
          <p style="color: #696969;font-size: 14px;font-weight: 600;">Detalhes</p>
          <Textarea
            placeholder="Informe os detalhes do desaparecimento do animal. Ex: Local, ultima vez visto, detalhes do animal"
            v-model="details" rows="8" cols="30" />

        </div>
        <div style="width: 90vw;display: flex;justify-content: center;flex-direction: column;margin-inline:auto;">
          <p style="color: #696969;font-size: 14px;font-weight: 600;">Informações para contato</p>
          <Textarea placeholder="Informe aqui as opções de contato caso o animal tenha sido encontrado" v-model="infos"
            rows="8" cols="30" />

        </div>
        <div style="display: flex;justify-content: center;width: 100vw;margin: auto;">
          <Button class="pubButton">Publicar</Button>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { ref } from 'vue';

const images: any = ref([])
const details: any = ref(null)
const infos: any = ref(null)


function onFileSelect(event: { files: File[] }) {
  const files = event.files;

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  });
}

function removeImage(index: number) {
  images.value.splice(index, 1);
}


const upload = () => {
  images.value.upload();
};

</script>

<style scoped>
.image-scroll {
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  max-width: 90vw;
}

.image-container {
  position: relative;
  flex: 0 0 auto;
  border: 1px solid #F2F2F2;
  border-radius: 0.5rem;
}

.uploaded-image {
  height: 7rem;
  width: 7rem;
  border-radius: 0.5rem;
}

.remove-button {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.pubButton {
  background-color: #D94509 !important;
  padding: 0.8rem !important;
  border-radius: 0.5rem !important;
  width: 15rem !important;
  font-weight: 600 !important;
  color: white !important;
}




.header {
  text-align: center;
  color: #696969;
  font-weight: 600;
  font-size: 14px;
  margin-top: 1.5rem;
}

ion-content {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}
</style>
