Modal cad pet:

<template>
  <!-- <div class="card flex justify-content-center"> -->
    <!-- <Button class="buttonSearchBar" @click="showModal">
      <img src="../assets/icons/publicationIcon.svg" alt="" />
    </Button> -->
    <Dialog v-model:visible="visible" header="Cadastro de Animal" :style="{ width: '20rem' }">
      <span class="p-text-secondary block mb-5">Adicione imagens do seu animalzinho:</span>
      <div class="image-animals" @click="openFileSelector">
        <input type="file" name="file" id="file" class="inputfile" />
      </div>
      <div class="form-div-2">
        <div class="input-cad-pet-local">
          <label for="nome">Nome do animal:</label>
          <InputText class="input-pesquisar2" id="nome" v-model="nome" aria-describedby="username-help" />
        </div>
        <div class="input-cad-pet">
          <label for="situacao">Situação do animal:</label>
          <Dropdown
            v-model="selectedSituacao"
            :options="situacoes"
            optionLabel="name"
            placeholder="Selecione a situação"
            class="w-full dropdown-situacao input-pesquisar2"
          >
            <template #selectedItem>
              <div v-if="selectedSituacao">{{ selectedSituacao.name }}</div>
            </template>
          </Dropdown>
        </div>
        <div class="input-cad-pet">
          <label for="tipo">Tipo:</label>
          <Dropdown
            v-model="selectedTipo"
            :options="tipos"
            optionLabel="name"
            placeholder="Selecione o tipo"
            class="w-full dropdown-tipo input-pesquisar2"
          >
            <template #selectedItem>
              <div v-if="selectedTipo">{{ selectedTipo.name }}</div>
            </template>
          </Dropdown>
        </div>
        <div class="input-cad-pet">
          <label for="raca">Raça:</label>
          <Dropdown
            v-model="selectedRaca"
            :options="racas"
            optionLabel="name"
            placeholder="Selecione a raça"
            class="w-full dropdown-raca input-pesquisar2"
          >
            <template #selectedItem>
              <div v-if="selectedRaca">{{ selectedRaca.name }}</div>
            </template>
          </Dropdown>
        </div>
        <div class="input-cad-pet-local">
          <label for="local">Último local visto:</label>
          <InputText class="input-pesquisar2" id="local" v-model="local" aria-describedby="username-help" />
        </div>
      </div>
      <div class="flex justify-content-end button-publicar">
        <Button class="button-publicar1" type="button" label="Publicar" @click="hideModal"></Button>
      </div>
    </Dialog>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

// const showModal = () => {
//   visible.value = true;
// };

const hideModal = () => {
  visible.value = false;
};

const openFileSelector = () => {
  const fileInput = document.getElementById("file");
  fileInput.click();
};

const nome = ref("");
const selectedSituacao = ref(null);
// const raca = ref("");
const selectedRaca = ref(null);
const selectedTipo = ref(null);
const local = ref("");

const situacoes = [
  { name: "Perdido" },
  { name: "Abandonado" },
  { name: "Resgatado" },
  { name: "Adotado" },
];

const tipos = [
  { name: "Cachorro" },
  { name: "Gato" },
  { name: "Pássaro" },
  { name: "Outros" },
];

const racas = [
  { name: "Labrador" },
  { name: "Poodle" },
  { name: "Siamês" },
  { name: "Persa" },
];
</script>

<style scoped>
/* Estilos do modal */

.input-pesquisar2:enabled:focus {
  outline: 1px solid #ff934b;
}

.inputfile {
  display: none;
}

.image-animals {
  width: 100px;
  height: 100px;
  background-image: url('../assets/icons/image-camera.png');
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.image-animals:hover {
  border-color: #ff5c00;
}

.input-cad-pet {
  display: flex;
  flex-direction: column;
  color: gray;
  width: 100%;
  margin-right: 20px;
  padding-top: 0.5rem;
}

.input-cad-pet-local {
  display: flex;
  flex-direction: column;
  color: gray;
  width: 100%;
  margin-right: 20px;
  padding-top: 0.5rem;
}

.form-div-2 {
  padding-top: 1em;
}

.button-save:hover {
  color: #ff5c00;
}

.button-publicar {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}

.button-publicar1 {
  background-color: #ff5c00;
  border: none;
}

</style>
