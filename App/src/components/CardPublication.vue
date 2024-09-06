<template>
  <section class="card">
    <div @click="openDetails">
      <img class="images" :src="images[0]" alt="">
      <span class="imageIcon">
        <img class="icon" src="../theme/assets/icons/ImagesIcon.svg" alt="">
        <p class="imageNumber">{{ imageNumber }}</p>
      </span>
      <div class="texts">
        <h1 class="userName">{{ props.feedObj.username }}</h1>
        <h2 class="animalDescription">{{ props.feedObj.animalStatus }}</h2>
        <p class="description">{{ props.feedObj.description }}</p>
      </div>
    </div>
    <div class="btns">
      <button @click="toggleReply">
        <img class="icon" :src="replyIcon" style="width: 1.2rem;" alt="">{{ replys }}
      </button>
      <button @click="toggleSave">
        <img class="icon" style="width: 1.1rem;" :src="saveIcon" alt="">{{ likes }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, inject, computed, onMounted } from 'vue';
import apoioIcon from '../theme/assets/icons/apoioIcon.svg';
import apoioIconActive from '../theme/assets/icons/apoioIconActive.svg';
import heartIcon from '../theme/assets/icons/HeartIcon.svg';
import heartIconActive from '../theme/assets/icons/HeartIconActive.svg';

const props = defineProps<{
  feedObj: {
    username: string;
    pubId: number;
    userId: number
    images: any
    animalStatus: string
    description: string
  }
}>();
const feedObj = props.feedObj;

onMounted(() => {
})

// Estados reativos para contadores
const likes = ref(0);
const replys = ref(137);

const ionRouter: any = inject('navManager');

const pubId = props.feedObj.pubId
const imageNumber = ref(props.feedObj.images.length);
const images = props.feedObj.images;

// Estados reativos para os ícones
const isReplied = ref(false);
const isSaved = ref(false);

const replyIcon = computed(() => isReplied.value ? apoioIconActive : apoioIcon);
const saveIcon = computed(() => isSaved.value ? heartIconActive : heartIcon);

const toggleReply = () => {
  isReplied.value = !isReplied.value;
  replys.value += isReplied.value ? 1 : -1;
}

const toggleSave = () => {
  isSaved.value = !isSaved.value;
  likes.value += isSaved.value ? 1 : -1;
}



const openDetails = () => {
  console.log('Navigating with feedObj:', props.feedObj);
  ionRouter.navigate({
    routerDirection: 'none',
    routerLink: `/app/details/${pubId}`,
  });
};
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
    width: 4.5vw;
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
    gap: 0.3rem;
    align-items: center !important;


    .icon {
      width: 1.5rem;
    }
  }
}
</style>
