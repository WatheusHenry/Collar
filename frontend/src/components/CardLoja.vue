<template>
  <div>
    <p class="center">Rua padre roma, 205 -Marilia - SP</p>
  </div>
  <div style="display: flex; justify-content: center;">
    <div class="image" style="">
      <img src="../assets/icons/icon_loja.png">
    </div>
    <div style="margin-right: 15rem;">
      <h1 class="text">LovePet</h1>
    </div>
  </div>

  <div class="container">
    <div class="icon-field">
      <IconField iconPosition="center" style="margin-left: 2rem;">
        <InputText v-model="value1" placeholder="Buscar em LovePet"></InputText>
      </IconField>
    </div>
  </div>
  <div style="display: block; margin:0;">
    <p class="ajuste">Produtos em destaque</p>
  </div>
  <div class="testeproduto">
    <div class="ajustar-card">
      <div class="conteudoProduto">
        <div class="produtosloja">
          <div class="textImageProduto">
            <p class="name-produto">Produto 1</p>
            <p class="desc-produto">Descrição do produto</p>
            <p class="preco-produto">R$ 00,00</p>
          </div>
        </div>
        <div class="produtosloja">
          <div class="textImageProduto">
            <p class="name-produto">Produto 1</p>
            <p class="desc-produto">Descrição do produto</p>
            <p class="preco-produto">R$ 00,00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
      <Dropdown
        v-model="selectedItem"
        :options="items"
        optionLabel="label"
        optionValue="value"
        :virtualScrollerOptions="{ itemSize: 38 }"
        placeholder="Filtrar por: Categorias"
        class="w-full md:w-14rem"
      />
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
  <div class="card-container">
    <div class="card">
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <p class="card-title">Produto 1</p>
          <p class="card-description">Descrição do produto</p>
          <p class="card-description">R$00,00</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <p class="card-title">Produto 1</p>
          <p class="card-description">Descrição do produto</p>
          <p class="card-description">R$00,00</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <p class="card-title">Produto 1</p>
          <p class="card-description">Descrição do produto</p>
          <p class="card-description">R$00,00</p>
        </div>
      </div>
      <div class="card-item">
        <img src="../assets/icons/icon_loja.png" class="icon"/>
        <div>
          <p class="card-title">Produto 1</p>
          <p class="card-description">Descrição do produto</p>
          <p class="card-description">R$00,00</p>
        </div>
      </div>
     

    </div>
  </div>



</template>


<style>
.center {
  text-align: center;
  margin-top: 2rem;
}

.ajuste {
  text-align: center;
  margin-right: 10rem;
  margin-top: 1rem;

}

.image {
  margin-top: 2rem;
  margin-left: 10rem;
}

img {

  margin: auto;

}

h1 {
  font-weight: 500;
  text-align: left;
  margin: auto;
  margin-top: 1.5rem;
  margin-left: 1rem;


}

.text-rua {
  color: #696969;
  font-size: 7px;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.text-ordenar {
  color: #696969;
  font-size: 7px;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.conteudoProduto {
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
}

.ajustar-card {
  width: 20rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.2);
  /* Sombra */
  display: flex;
  justify-content: center;
  margin-top: 1rem;

}


.preco-produto {
  color: #72af55;
  font-size: 14px;
}

.desc-produto {
  color: #696969;
  font-size: 10px;
}

.name-produto {
  color: #696969;
  font-size: 14px;

}


.testeproduto {
  display: flex;
  justify-content: center;
  margin: 0%;
}

.icon-field {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
}


.item {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.title {
  margin-left: 1rem;
}

.p-dropdown {
  border: none;
  background: transparent;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  color: black;
  font-size: 13px;
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
  margin-right: 3rem;
}

.card-title {
  margin: 0;
  display: flex;

}

.card-description {
  margin: 0;

}
</style>
