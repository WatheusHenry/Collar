<template>
  <div class="card">
    <TabView class="tabview-custom">
      <TabPanel>
        <template #header>
          <div class="flex align-items-center gap-2">
            <img src="../assets/icons/icon_pata.svg" class="icon-ajuste">
          </div>
        </template>
        <div class="align-image">
          <div v-for="dog in dogs" :key="dog.animal.id">
            <img v-for="url in dog.image_urls" :src="url" :key="url" class="cachorro" style="height: auto;">
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const dogs = ref([]);
    const userId = localStorage.getItem('userId'); // Obtém o ID do usuário do armazenamento local

    const fetchDogs = async () => {
      try {
        const ownerId = userId; // Use o ID do usuário do localStorage, se disponível
        const response = await fetch(`http://localhost:8000/api/owners/${ownerId}/animals`);
        if (!response.ok) {
          throw new Error('Falha ao obter os dados dos cachorros.');
        }
        const data = await response.json();
        dogs.value = data; // Supondo que a resposta da API seja um objeto com uma propriedade "dogs" contendo a lista de cachorros
        console.log(dogs.value);
      } catch (error) {
        console.error('Erro ao buscar dados dos cachorros:', error);
      }
    };

    onMounted(fetchDogs);

    return {
      dogs
    };
  }
};
</script>

  
 

<style>
h2 {
  font-weight: bolder;
  text-align: left;
  color: black;
}

.cachorro {
  width: 100%;
}

h3 {
  font-weight: bolder;
  text-align: left;
  margin-left: 5px;
  color: black;
  font-size: 15px;
}

.border {
  height: auto;
  width: 100px;
  margin-right: 0.50rem;
}

.icon-center {
  margin-top: 4rem;
}

.icon-ajuste {
  display: flex;
  justify-content: center;
  margin: auto;
}

.card {
  margin-top: 3rem;
  margin: auto;
  width: 100vw;
  padding-top: 2rem
}

.align-image {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Cria três colunas de largura igual */
  gap: 1px;
  /* Espaço entre as colunas */
}

p {
  font-size: 14px;
}

.p-tabview .p-tabview-ink-bar {
  background-color: orangered;
}

.p-tabview-nav {
  margin: auto !important;
}

.p-tabview-nav-link .p-tabview-header-action {
  display: flex;
  justify-content: center;
  width: 100%;
}

.p-tabview-header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.p-tabview-panels {
  min-height: 50vh;
}

.editar {
  border: 1px solid transparent;
  margin-left: 1rem;
  width: 2rem;
  background-color: transparent;
}

.editar {
  color: black;
}

.p-button:not(:disabled):hover {
  background-color: transparent;
}
</style>
