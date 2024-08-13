<template>
    <div class="card flex justify-content-center">
        <label for="produtos" class="cadProd" @click="showModal">Novo Produto</label>
      <Dialog v-model:visible="visible" header="Cadastrar novo produto" :style="{ width: '21rem' }">
        <span class="p-text-secondary block mb-5">Adicione imagens do seu produto:</span>
        <div class="image-animals" @click="openFileSelector">
          <input type="file" name="file" id="file" class="inputfile" />
        </div>
        <div class="form-div-2">
          <div class="input-name-produto">
            <label for="nome">Nome:</label>
            <InputText class="input-pesquisar2" id="nome" v-model="nomeProd" aria-describedby="username-help" />
          </div>
          <div class="card flex justify-content-center desc-prod">
            <label for="nome">Descrição:</label>
            <Textarea class="input-pesquisar2" v-model="value" rows="4" />
        </div>
        <div class="formDiv">
            <div class="input-cad-prod">
                <label for="valor">Valor:</label>
                <InputText class="input-pesquisar2" id="valor" v-model="valor" aria-describedby="username-help" />
              </div>
              <div class="input-cad-prod">
                <label for="quantidade">Quantidade:</label>
                <InputText class="input-pesquisar2" id="quantidade" v-model="quantidade" aria-describedby="username-help" />
              </div>
        </div>
        </div>
        <div class="flex justify-content-end button-publicar">
          <Button class="button-publicar1" type="button" label="Adicionar ao catálogo" @click="hideModal"></Button>
        </div>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const visible = ref(false);
  
  const showModal = () => {
    visible.value = true;
  };
  
  const hideModal = () => {
    visible.value = false;
  };
  
  const openFileSelector = () => {
    const fileInput = document.getElementById("file");
    fileInput.click();
  };
  
  // const nome = ref("");
  
  </script>
  
  <style scoped>
  /* Estilos do modal */

  .cadProd{
    text-decoration: none;
    color: #ff5c00;
    font-size: 14px;
    font-weight: 600;
    line-height: 2rem;
    cursor: pointer;
  }
  
  .input-pesquisar2:enabled:focus {
    outline: 1px solid #ff934b;
  }

  .formDiv{
    display: flex;
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

  .desc-prod{
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    width: 85%;
  }
  
  .input-cad-prod {
    display: flex;
    flex-direction: column;
    color: gray;
    width: 41%;
    margin-right: 20px;
    padding-top: 0.5rem;
  }

  .form-div {
    padding: 0 0 1em 2em;
  }
  
  .form-div-2 {
    padding-top: 1em;
  }

  .button-publicar {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
  
  .button-publicar1 {
    background-color: #ff5c00;
    border: none;
  }

  .input-name-produto{
    width: 85%;
    display: flex;
    flex-direction: column;
  }
  
  </style>
  