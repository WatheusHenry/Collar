<template>
  <section id="feedAnimais">
    <div id="main-feedAnimais">
      <SearchBar @OpenFilterModal="OpenFilterModal()" @OpenCadPetModal="OpenCadPetModal()" />
      <ModalCadPet />
      <!-- <ModalCadProdutos/> -->
      <CardsAnimais />
    </div>
  </section>

  <!-- Modal Filtro -->
  <Dialog v-model:visible="modalFilter" modal header="Filtros" :style="{ width: '25rem' }">
    <div class="input">
      <label for="username">Endereço, cidade ou CEP</label>
      <AutoComplete
        v-model="endereco"
        optionLabel="display_name"
        :suggestions="enderecosEncontrados"
        @complete="search"
      />
    </div>
    <div class="input">
      <label for="username">Nome do pet</label>
      <InputText id="input" v-model="value" aria-describedby="username-help" />
    </div>
    <div class="switches">
      <InputSwitch v-model="animalPerdido" />
      <label for="">Perdido</label>
    </div>
    <div class="switches">
      <InputSwitch v-model="procurandoTutor" />
      <label for="">Procurando tutor</label>
    </div>
    <div class="select">
      <label for="username">Espécie</label>

      <MultiSelect
        v-model="especieSelecionada"
        display="chip"
        :options="especies"
        optionLabel="name"
        placeholder="Selecione espécies"
        :maxSelectedLabels="3"
        class="w-full md:w-20rem"
        :virtualScrollerOptions="{ itemSize: 50 }"
      />
    </div>
    <div class="">
      <label for="username">Distância máxima</label>
      <div>
        <span class="kilometerValue">{{ kilometerFilter }} km</span>
        <Slider v-model="kilometerFilter" />
      </div>
    </div>
  </Dialog>

  <!-- Modal Cadastro Pet -->
  <div class="card flex justify-content-center">
    <Dialog
    class="cadAnimal"
      v-model:visible="modalCadPet"
      modal
      header="Cadastro de Animal"
      :style="{ width: '20rem' }"
    >
      <span class="p-text-secondary block mb-5">Adicione imagens do seu animalzinho:</span>
      <!-- <div class="image-animals" @click="openFileSelector">
        <input type="file" name="file" id="file" class="inputfile" />
      </div> -->
      <div class="dropZoneContainer">
        <div class="image-animals">
          <input
          type="file"
          id="drop_zone"
          class="FileUpload"
          accept=".jpg,.png,.gif"
          :value="Image"
          onchange="handleFileSelect(this) "
          />
          <!-- <img :src="" alt="" srcset=""> -->
        </div>
        <!-- <div class="dropZoneOverlay">Drag and drop your image <br />or<br />Click to add</div> -->
      </div>
      <div class="form-div-2">
        <div class="input-cad-pet-local">
          <label for="nome">Nome do animal:</label>
          <InputText
            class="input-pesquisar2"
            id="nome"
            v-model="nome"
            aria-describedby="username-help"
          />
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
          <InputText
            class="input-pesquisar2"
            id="local"
            v-model="local"
            aria-describedby="username-help"
          />
        </div>
      </div>
      <div class="flex justify-content-end button-publicar">
        <Button class="button-publicar1" type="button" label="Publicar" @click="hideModal"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref(false)
    const endereco = ref('')
    const enderecosEncontrados = ref('')
    const modalFilter = ref(false)
    const modalCadPet = ref(false)
    const animalPerdido = ref(false)
    const procurandoTutor = ref(false)
    const especieSelecionada = ref()
    const kilometerFilter = ref(0)
    const nomeAnimal = ref('')
    const selectedSituacao = ref(null)
    const selectedRaca = ref(null)
    const selectedTipo = ref(null)
    const localAnimal = ref('')
    const especies = ref([
      { name: 'Cachorros', code: 'NY' },
      { name: 'Gatos', code: 'RM' },
      { name: 'Passaros', code: 'LDN' }
    ])
    const situacoes = [
      { name: 'Perdido' },
      { name: 'Abandonado' },
      { name: 'Resgatado' },
      { name: 'Adotado' }
    ]
    const tipos = [{ name: 'Cachorro' }, { name: 'Gato' }, { name: 'Pássaro' }, { name: 'Outros' }]
    const racas = [{ name: 'Labrador' }, { name: 'Poodle' }, { name: 'Siamês' }, { name: 'Persa' }]

    const search = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/search-endereco?endereco=${endereco.value}`
        )
        const data = await response.json()
        console.log(data)
        enderecosEncontrados.value = data
      } catch (error) {
        console.error('Erro ao buscar endereço:', error)
      }
    }

    const OpenFilterModal = () => {
      console.log('teste')
      modalFilter.value = true
    }

    const OpenCadPetModal = () => {
      console.log('teste')
      modalCadPet.value = true
    }

    return {
      nomeAnimal,
      selectedSituacao,
      selectedRaca,
      selectedTipo,
      localAnimal,
      tipos,
      racas,
      situacoes,
      search,
      endereco,
      OpenFilterModal,
      modalFilter,
      checked,
      especieSelecionada,
      especies,
      kilometerFilter,
      animalPerdido,
      procurandoTutor,
      enderecosEncontrados,
      OpenCadPetModal,
      modalCadPet
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
#feedAnimais {
  font-family: 'Roboto Flex', sans-serif;
}

.sub-titulo-feedAnimais {
  font-size: 16px;
  font-weight: 700;
  font-size: 20px;
  color: #696969;
}
#main-feedAnimais {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 100vh;
}
.cadAnimal {
  /* top: 7.5rem !important; */
  position: fixed;
  width: 90vw !important;
}
.p-dialog-header {
  padding-top: 1rem;
  padding-inline: 1.5rem;
  padding-bottom: 0;
}
.p-dialog-title {
  font-weight: 700;
}

.p-dialog-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
#input {
  width: 100%;
}
label {
  font-size: smaller;
  font-weight: 600;
}
.switches {
  /* padding: 1rem; */
  display: flex;
  gap: 1rem;
  /* flex-direction: column; */
}
.p-multiselect-header {
  display: none;
}
.p-multiselect {
  height: 2.5rem !important;
}
.select {
  display: flex;
  flex-direction: column;
}
.p-multiselect-token {
  padding: 0;
  font-size: 16px;
  padding-inline: 0.5rem;
  border-radius: 1rem;
}

.p-multiselect-label {
  display: flex;
  padding: 0.4rem;
  font-size: 16px;
  gap: 0.5rem;
}
.p-inputswitch-slider:before {
  top: 0.2rem;
}
.p-slider {
  height: 0.5rem;
}
.p-slider-range {
  background-color: #ff934b;
}
.p-slider-handle {
  top: -0.3rem;
  position: inherit;
  background-color: #ff934b;
}
.p-slider-handle::before {
  width: 0.6rem;
  height: 0.6rem;
}
.p-inputswitch.p-highlight .p-inputswitch-slider {
  background: #ff934b;
}

.kilometerValue {
  color: #ff934b;
  font-weight: 600;
}
.p-autocomplete {
  width: 100%;
}

.p-autocomplete-input {
  width: 100%;
}
.p-autocomplete-panel {
  left: 2rem !important;
  max-width: 77vw !important;
  position: inherit;
}
/* .p-autocomplete-items {
  width: 90vw;
  left: 1.5rem;
  overflow-x: auto;
} */
.p-autocomplete-loader {
  top: 0.5rem !important;
}
.p-autocomplete-panel {
  max-width: 75vw !important;
  left: 2.5rem !important;
  overflow-x: auto;
}

input-pesquisar2:enabled:focus {
  outline: 1px solid #ff934b;
}
.dropZoneOverlay,
.FileUpload {
  width: 5rem;
  height: 5rem;
}
.dropZoneContainer{
  width: 5rem;
}
.dropZoneOverlay {
  border: dotted 1px;
  font-family: cursive;
  color: #7066fb;
  position: absolute;
  top: 0px;
  text-align: center;
}

.FileUpload {
  opacity: 0;
  position: relative;
  z-index: 1;
}
/* .inputfile {
  height: 100px;
}
#file-upload-button {
  opacity: 0 !important;
  position: relative;
  z-index: 1;
} */

.image-animals {
  width: 100px;
  height: 100px !important;
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
