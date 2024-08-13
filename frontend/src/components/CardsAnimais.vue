<template>
  <section class="cardAnimaisGeral">
    <div class="cards-geral">
      <div id="bloco-info">
        <div class="bloco-topo">
          <div class="info-CardAnimais">
            <img src="../assets/icons/lost.svg" alt="" srcset="" class="icone-info" />
            <h2 class="lost-text">Perdido</h2>
            <p class="status">Há 2 dias</p>
          </div>
          <div>
            <div class="info-baixo">
              <p class="text-nome">Nome:<strong class="strong-nome">Desconhecido</strong></p>
              <p class="text-nome">
                Encontrado próximo à:<strong class="strong-nome"
                  >Rua Padre roma,205 - Marília - SP</strong
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="3"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 p-3">
              <div class="mb-3">
                <div class="relative mx-auto">
                  <img
                    :src="slotProps.data.image"
                    :alt="slotProps.data.alt"
                    class="carousel__images"
                  />
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>

      <a href="/chat" class="talk">
        <img src="../assets/icons/talk.svg" alt="" srcset="" class="icone-info" />
        <div>Entrar em contato</div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    image:
      'https://img.freepik.com/fotos-gratis/isolado-feliz-sorridente-cao-fundo-branco-retrato-4_1562-693.jpg',
    alt: 'background-image'
  },
  {
    image:
      'https://img.freepik.com/fotos-premium/cachorro-fofo-enquanto-levanta-o-pe_1000717-382.jpg',
    alt: 'background-image'
  },
  {
    image:
      'https://img.freepik.com/fotos-gratis/isolado-feliz-sorridente-cao-fundo-branco-retrato-4_1562-693.jpg',
    alt: 'background-image'
  },
  {
    image:
      'https://img.freepik.com/fotos-premium/cachorro-fofo-enquanto-levanta-o-pe_1000717-382.jpg',
    alt: 'background-image'
  }
])

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>

<style>
#bloco-info {
  padding: 20px 10px 0;
}
.cards-geral {
  background-color: white;
  margin-bottom: 15px;
}
#filtro-cardAnimais {
  display: flex;
  display: flex;
  justify-content: space-between;
  padding: 33px 10px;
}

.lost-text {
  color: black;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

/* .p-carousel-next {
  position: absolute !important;
  left: 20em !important;
  top: 20em !important;
}
.p-carousel-prev {
  position: absolute !important;
  top: 20em !important;
  left: 1em !important;
  z-index: 999 !important;
} */
.p-carousel .p-carousel-indicators .p-carousel-indicator button {
  width: 10px;
  height: 10px;
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
  background-color: #ff5c00;
}

.p-carousel-indicators {
  display: flex !important;
  justify-content: center !important;
  width: 29% !important;
  padding: 0 !important;
  position: absolute !important;
  top: 27em;
  left: 8em;
}
.p-highlight {
  margin-right: 2px !important;
  margin-left: 2px !important;
}
.text-nome {
  color: #9e9e9e;
  font-size: 10px;
}

.talk {
  color: #696969;
  display: flex;
  align-items: center;
  padding: 0px 10px 22px;
}

.strong-nome {
  color: #696969;
  font-weight: 700;
  margin-left: 6px;
  font-size: 12px;
}

.info-baixo {
  margin: 10px 0px;
}

.bloco-topo {
  display: flex;
  flex-direction: column;
}

.info-CardAnimais {
  display: flex;
  align-items: center;
}

.status {
  width: 100%;
  text-align: end;
  color: #696969;
  font-weight: 600;
}

.icone-info {
  padding-right: 15px;
}

.buttonCardsAnimais {
  background: linear-gradient(90deg, #ff934b, #f27322, #d94509);
  border-radius: 10px;
  border: 0;
}

.botaoPublicar {
  display: flex;
}

/*.p-inputtext {
  /* padding: 0.5rem 0; 
  width: 284px;
  /* font-size: 20px; */
  /* font-weight: bold; */

#icone-lupaDog {
  margin: 0 0 0 10px;
}

.icone-lupaDog {
  width: 20px;
  height: 20px;
}

.carousel {
  position: relative;
  height: 400px;
  width: 360px;
  margin: 0 auto;
  margin-bottom: 5rem;
}
.carousel__images {
  max-width: 500px;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.carousel__track-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.carousel__track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  padding: 0;
  margin: 0;
  position: relative;
  height: 100%;
}
.carousel__slide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.carousel__button {
  position: absolute;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.carousel__button--left {
  left: 10px;
  transform: translateY(-50%) rotate(180deg);
}
.carousel__button--right {
  right: 10px;
}
.carousel__button img {
  width: 35px;
}
.carousel__nav {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: absolute;
  top: 23em;
  left: 11em;
  gap: 1rem;
}
.carousel__indicator {
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.carousel__indicator.current-slide {
  background: #ff5c00;
}
.is-hidden {
  display: none;
}
</style>
