// SearchBar.vue

<template>
  <div class="container">
    <!-- <InputIcon class="pi pi-search"> </InputIcon> -->
    <InputText class="input-pesquisar" v-model="value1" placeholder="Pesquisar" />
    <div class="buttons">
      <Button class="buttonSearchBar" icon="pi pi-filter-fill" @click="OpenFilterModal()"></Button>
      <Button class="buttonSearchBar" @click="OpenCadPetModal()"
        ><img src="../assets/icons/publicationIcon.svg" alt=""
      /></Button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  emits: ['OpenFilterModal', 'OpenCadPetModal'], // Declarando o evento que o componente pode emitir
  setup(_, { emit }) {
    // Usando o segundo argumento para acessar a função emit
    const value1 = ref('')
    const OpenFilterModal = () => {
      emit('OpenFilterModal') // Emitindo o evento chamar-funcao usando a função emit
    }
    const OpenCadPetModal = () => {
      emit('OpenCadPetModal') // Emitindo o evento chamar-funcao usando a função emit
    }
    return { value1, OpenFilterModal, OpenCadPetModal }
  }
}
</script>
<style>
.pi-filter-fill {
  color: #696969;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 1rem;
  height: fit-content;
  gap: 0.5rem;
}

.input-pesquisar {
  height: 2rem;
  width: 75%;
}
.input-pesquisar:enabled:focus {
  outline: 1px solid #ff934b;
}
.buttons {
  display: flex;
  gap: 0.5rem;
  border-radius: 10px;
  border: 0;
}
.buttonSearchBar {
  background: none;
  color: #373737;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 10px;
  border: 0;
}
</style>
