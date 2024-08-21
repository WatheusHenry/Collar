<template>
  <section class="card" @click="openDetails">
    <img class="images" src="../theme/assets/images/Cachorro.png" alt="">
    <span class="imageIcon"> <img class="icon" src="../theme/assets/icons/ImagesIcon.svg" alt="">
      <p class="imageNumber">{{ imageNumber }}</p>
    </span>
    <div class="texts">
      <h1 class="userName">{{ props.feedObj.username }}</h1>
      <h2 class="animalDescription">{{ props.feedObj.animalStatus }}</h2>
      <p class="description">{{ props.feedObj.description }}</p>
    </div>
    <div class="btns">
      <button @click="reply()"><img class="icon" src="../theme/assets/icons/ReplyIcon.svg" alt="">Republicar</button>
      <button @click="save()"><img class="icon" src="../theme/assets/icons/HeartIcon.svg" alt="">Salvar</button>
    </div>
  </section>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { inject } from 'vue';

const props = defineProps<{
  feedObj: {
    username: string;
    pubId: number;
    userId: number
    images: Array<Object>
    animalStatus: string
    description: string
  }
}>();

const ionRouter: any = inject('navManager');

const pubId = props.feedObj.pubId
const imageNumber = ref(props.feedObj.images.length);

const save = () => {
  console.log("salvo")
}

const reply = () => {
  console.log("reply")
}

const openDetails = () => {
  ionRouter.navigate({
    routerDirection: 'none',
    routerLink: `/app/details/${pubId}`
  });
  console.log(props.feedObj)
}
</script>

<style scoped>
.card {
  margin: auto;
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 90vw;
  border: 1px solid #EBEBEB;
  border-radius: 0.5rem;
}

.images {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
}

.imageIcon {
  position: absolute;
  margin: 5%;
  right: 5%;

  .icon {
    width: 4vw;
  }

  .imageNumber {
    position: absolute;
    top: -1.5vh;
    right: 1vw;
    z-index: 10;
    font-weight: 600;
    font-size: 80%;
    color: #a3a3a3;
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

.btns {
  z-index: 10;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  button {
    background: none;
    font-size: 14px;
    color: #5c5c5c;
    display: flex;
    gap: 0.5rem;


    .icon {
      width: 1rem;
    }
  }
}
</style>
