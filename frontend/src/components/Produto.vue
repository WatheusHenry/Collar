<template>
  <div style="display: block;">
    <p style="text-align: center; margin-top: 2.80rem">Rua Padre roma,205 - Marília - SP</p>
    </div>
    <div style="display: flex; justify-content: center;">
    <div class="image" style="">
      <img src="../assets/icons/icon-produto.svg">
    </div>
    <div style="margin-right: 15rem;">
      <h1 class="text">Produtos</h1>
    </div>
  </div>
  <div class="container">
    <div class="icon-field">
      <IconField iconPosition="center" style="margin-left: 2rem;">
        <InputText v-model="value1" placeholder="Buscar em Petshops"></InputText>
      </IconField>
    </div>
  </div>
  
    <div class="card">
      <Carousel :value="products" :numVisible="1" :numScroll="1">
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-2 p-3">
            <div class="mb-3">
              <div class="relative mx-auto">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="carousel__images" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    </template>
 
  <script setup>
  import { ref } from 'vue'
 
  const products = ref([
    {
      image: '../src/assets/icons/acessorios.png', // Substitua pelo caminho correto da imagem
      alt: 'Rações em Promo'
    },
    {
      image: '../src/assets/icons/icon_promo.png', // Substitua pelo caminho correto da imagem
      alt: 'Acessórios para Gatos'
    }
  ])
  </script>
  
  <style>
  .carousel__images {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 2rem;
  }

  .p-carousel-indicator{
    display: none;
  }
  h1{
    text-align: center;
    font-weight: bolder;
    margin: auto;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .icon-field {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.image {
  margin-top: 2.5rem;
  margin-left: 12rem;
}

img {

  margin: auto;

}


  </style>
  
