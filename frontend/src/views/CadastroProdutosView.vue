<template>
    <div id="app">
      <div class="text-rua">
        <h1>Rua Padre Roma, 205 - Marília - SP</h1>
      </div>
      <div class="content">
        <img src="../assets/icons/store.png" alt="" srcset="" class="icone-mercado" />
        <div class="texts">
          <p class="text-love-pet">LovePet</p>
          <p class="text-love-pet12">Petshop</p>
        </div>
        <div class="link-novo-prod">
          <ModalCadProdutos />
        </div>
      </div>
      <div class="text-ordenar">
        <h1>Ordenar por: </h1>
        <h1 class="h1-categorias">Categorias </h1>
      </div>
      <div class="testeprod">
        <div class="ajustar">
            <div class="conteudoProd">
              <div class="produtosCadastrados">
                <div class="image-prod"></div>
                <div class="textImageProd">
                  <p class="name-prod">Produto 1</p>
                  <p class="desc-prod">Descrição</p>
                  <p class="preco-prod">R$ 00,00</p>
                </div>
              </div>
              <div class="produtosCadastrados">
                <div class="image-prod"></div>
                <div class="textImageProd">
                  <p class="name-prod">Produto 2</p>
                  <p class="desc-prod">Descrição</p>
                  <p class="preco-prod">R$ 00,00</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
    
<script>

</script>


  <style>
  
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
  
  .icone-mercado {
    width: 50px;
    height: 50px; /* Define a altura igual à largura para manter o ícone quadrado */
    background-color: #79BFFF;
    border-radius: 50%; /* Para torná-lo circular */
    background-size: 100%; /* Ajusta o tamanho do background */
  }
  
  .content {
    display: flex;
    justify-content: center;
  }
  
  .text-love-pet {
    color: #696969;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    margin-bottom: -0.4em;
  }
  
  .text-love-pet12 {
    color: #696969;
    font-size: 10px;
    margin: 0;
  }
  
  .text-love-pet + .text-love-pet12 {
    margin-top: 0;
  }
  
  .link-novo-prod {
    padding-left: 40px;
    text-decoration: underline;
    color: #f27322;
    display: flex;
    align-items: center;
  }
  
  .routerprod {
    color: #f27322;
    font-size: 14px;
  }
  
  .h1-categorias {
    font-weight: 700;
    padding-left: 5px;
  }
  
  .image-prod {
    width: 100px;
    height: 110px;
    background-size: 30%;
    border-radius: 10%;
    background-color: #f2f2f2;
  }
  
  .conteudoProd {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
  }
  
  .ajustar {
    width: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.2); /* Sombra */
    display: flex;
    justify-content: center;
    margin-bottom: 20em;
  }
  
  .textImageProd {
    color: black;
  }
  
  .preco-prod {
    color: #72af55;
    font-size: 14px;
  }
  
  .desc-prod {
    color: #696969;
    font-size: 10px;
  }
  
  .name-prod {
    color: #696969;
    font-size: 14px;
  }

  .texts{
    padding-left: 10px;
    margin: 0;
  }

  .testeprod{
    display: flex;
    justify-content: center;
  }
  </style>
  