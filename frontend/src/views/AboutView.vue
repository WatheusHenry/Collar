<template>
  <div class="about">
    <div class="about2">
      <div class="textPrincipal">
        <h1 class="h1-encontre-seu-pet">Encontre seu pet aqui!</h1>
      </div>
    </div>
    <div class="textAboutUs1">
      <div class="textAboutUs">
        <div class="text1">
          <h1>Seu pet está desaparecido? Estamos aqui para ajudar você a encontrá-lo!</h1>
        </div>
      </div>
      <div class="line">
        <p class="lineLIne">
        </p>
      </div>
      <div class="oneee">
        <div class="textAboutUs5">
          <div class="textOne">
            <div class="option1">
              <img class="one" src="../assets/icons/one.png" alt="one">
            </div>
          </div>
        </div>
        <div class="textAboutUs2">
          <div class="textOne">
            <h3 class="textAnuncieAqui">Faça seu anúncio</h3>
          </div>
        </div>
        <div class="textAboutUs3">
          <div class="descAnuncio">
            <p class="p-desc-anuncio">Crie seu anúncio de forma rápida e fácil, adicionando fotos, descrição e localização do seu animalzinho. O pet aparecerá em nossa página principal e o melhor, é grátis!</p>
            <RouterLink class="router-homepage" to="/" >Criar anúncio</RouterLink>
          </div>
        </div>
      </div>
      <div class="line">
        <p class="lineLIne">
        </p>
      </div>
      <div class="twooo">
        <div class="textAboutUs5">
          <div class="textOne">
            <div class="option1">
              <img class="one" src="../assets/icons/two.png" alt="one">
            </div>
          </div>
        </div>
        <div class="textAboutUs2">
          <div class="textOne">
            <h3 class="textAnuncieAqui">Acesse o Painel de Busca</h3>
          </div>
        </div>
        <div class="textAboutUs3">
          <div class="descAnuncio">
            <p class="p-desc-anuncio">No Painel de Busca você pode gerenciar seu anúncio e acessar todas as ferramentas de busca. Você também pode acompanhar em tempo real o alcance e a eficácia do seu anúncio.</p>
            <RouterLink class="router-homepage" to="/" >Acessar painel</RouterLink>
          </div>
        </div>
      </div>
      <div class="line">
        <p class="lineLIne">
        </p>
      </div>
      <div class="three">
        <div class="textAboutUs5">
          <div class="textOne">
            <div class="option1">
              <img class="one" src="../assets/icons/three.png" alt="one">
            </div>
          </div>
        </div>
        <div class="textAboutUs2">
          <div class="textOne">
            <h3 class="textAnuncieAqui">Contrate Serviços especias</h3>
          </div>
        </div>
        <div class="textAboutUs3">
          <div class="descAnuncio">
            <p class="p-desc-anuncio">Para obter um alcance maior, você pode contratar um de nossos serviços, garantindo que seu pet permaneça em destaque até ser encontrado!</p>
            <RouterLink class="router-homepage" to="/" >Serviços</RouterLink>
          </div>
        </div>
      </div>
      <div class="line">
        <p class="lineLIne">
        </p>
      </div>
      <div class="four">
        <div class="textAboutUs5">
          <div class="textOne">
            <div class="option1">
              <img class="one" src="../assets/icons/four.png" alt="one">
            </div>
          </div>
        </div>
        <div class="textAboutUs2">
          <div class="textOne">
            <h3 class="textAnuncieAqui">Encontre seu pet!</h3>
          </div>
        </div>
        <div class="textAboutUs3">
          <div class="descAnuncio">
            <p class="p-desc-anuncio">Que felicidade! O pet e o tutor estão juntos de novo. Atualize o status na Tela Inicial marcando o pet como encontrado. Sua história de sucesso será exibida na página de Reencontros e você receberá uma imagem exclusiva para anunciar a boa notícia.</p>
            <RouterLink class="router-homepage" to="/" >Reencontros</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about2{
  display: flex;
  justify-content: center;
  padding-top: 3em;
}

.textPrincipal{
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center
}

.h1-encontre-seu-pet{
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(to right, #FF934B, #F27322,  #D94509);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -2px;
  line-height: 1.2;
}

.textAboutUs{
  display: flex;
  justify-content: center;
  padding-top: 2em
}

.textAboutUs5{
  display: flex;
  justify-content: center;
}

.textAboutUs2{
  display: flex;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.textAboutUs3{
  display: flex;
  justify-content: center;
}

.text1{
  width: 70%;
  color: #696969;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.2;
  text-align: center
}

.one{
  padding-top: 2em;
  width: 60px;
}

.textAnuncieAqui{
  color: #696969;
  font-size: 20px;
  font-weight: 400;
}

.p-desc-anuncio{
  color: #696969;
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 2em;
}

.descAnuncio{
  width: 75%;
  text-align: center;
}

.router-homepage{
  color: #F27322;
  border: 1px solid #F27322;
  padding: 0.5em;
  border-radius: 10px;
  font-size: 14px;
}

.four{
  margin-bottom: 2em
}

.lineLIne{
  width: 80%;
  height: 1px;
  background-color:#F27322
}

.line{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

</style>
