<template>
  <div class="container">
    
    <div class="item">
      <Dropdown
        v-model="selectedItem"
        :options="items"
        optionLabel="label"
        optionValue="value"
        :virtualScrollerOptions="{ itemSize: 38 }"
        placeholder="Ordenar"
        class="w-full md:w-14rem"
      />
    </div>
  </div>
 
  <div class="card-container">
    <div class="card">
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">LovePet</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">LovePet</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">MedPet</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">MedPet</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">Cobasi</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <h2 class="card-title">Cobasi</h2>
          <p class="card-description">Rua exemplo N 10 - centro <br> PetShop</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from 'primevue/dropdown'; // Certifique-se de importar o Dropdown

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })));
</script>

<style scoped>
.container {
  text-align: center;
  align-items: center; 
 
}

.item {
  margin-left: 10rem;
}
h2{
  
  display: flex;
  text-align: center;
}

.p-dropdown {
  border: none;
  background: transparent;
  text-align: center;
  margin-top: 1rem;
  

  
}

.p-dropdown .p-dropdown-label.p-placeholder {
  color: black;
 
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
}

.card {
  width: 20rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.card-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon {
  margin-right: 1rem;
}

.card-title {
  margin: 0;
  display: flex;
  margin-top: 30px;
}

.card-description {
  margin: 0;
}
</style>
