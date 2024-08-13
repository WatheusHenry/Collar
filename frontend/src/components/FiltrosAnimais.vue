filtros animais:

<template>
  <Button class="buttonSearchBar" icon="pi pi-filter-fill" @click="showModal = true"></Button>
  <Dialog v-model:visible="showModal"  :style="{ width: '80vw' }">
    <section class="filtro-feedAnimais">
      <form class="form-feedAnimais">
        <p class="titulo-filtros-feedAnimais">Filtros</p>
        <section style="padding: 0 0 0 1em;">
          <div class="form-label-input-feedAnimais">
            <label class="paragrafo-filtro-feedAnimais" for="inputcep">Endereço, Cidade ou CEP</label>
            <InputText id="inputcep" type="text" v-model="valueInputTextCEP" />
          </div>
          <div class="div-filtro-feedAnimais form-label-input-feedAnimais">
            <label class="paragrafo-filtro-feedAnimais" for="inputname">Nome do Pet</label>
            <InputText id="inputname" type="text" v-model="valueInputTextName" />
          </div>
          <div class="div-filtro-feedAnimais">
            <div class="switch-filtro-feedAnimais div-filtro-feedAnimais">
              <InputSwitch v-model="checked" class="input-switch-feedAnimais" />
              <p class="paragrafo-filtro-feedAnimais">Perdido</p>
            </div>
            <div class="switch-filtro-feedAnimais div-filtro-feedAnimais">
              <InputSwitch v-model="checked2" class="input-switch-feedAnimais" />
              <p class="paragrafo-filtro-feedAnimais">Procurando Tutor</p>
            </div>
          </div>
          <div class="div-filtro-feedAnimais">
            <MultiSelect
              v-model="especieAnimal"
              :options="especies"
              filter
              optionLabel="name"
              placeholder="Espécie"
              :maxSelectedLabels="3"
              class="paragrafo-filtro-feedAnimais"
            />
          </div>
          <div class="div-filtro-feedAnimais">
            <MultiSelect
              v-model="racaAnimal"
              :options="raca"
              filter
              optionLabel="name"
              placeholder="Raça"
              :maxSelectedLabels="3"
              class="paragrafo-filtro-feedAnimais"
            />
          </div>
          <div class="div-filtro-feedAnimais">
            <InputText v-model="valueWithUnit" class="input-slider-feedAnimais" />
            <Slider v-model="value" class="slider-feedAnimais" />
          </div>
        </section>
      </form>
    </section>
  </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'

const valueInputTextCEP = ref(null)
const valueInputTextName = ref(null)
const checked = ref(false)
const checked2 = ref(false)
const showModal = ref(false) // Nova propriedade

const value = ref(0)

const valueWithUnit = computed({
  get: () => `${value.value} km`,
  set: (newValue) => {
    const parsedValue = parseFloat(newValue.replace('km', '').trim())
    if (!isNaN(parsedValue)) {
      value.value = parsedValue
    }
  }
})

const especieAnimal = ref()
const especies = ref([
  { name: 'Gato', code: 'Cat' },
  { name: 'Cachorro', code: 'Dog' },
  { name: 'Aves', code: 'Av' },
  { name: 'Réptil', code: 'Re' }
])

const racaAnimal = ref()
const raca = ref([
  { name: 'Bodercolie', code: 'NY' },
  { name: 'Chiuaua', code: 'RM' },
  { name: 'Pastor Alemão', code: 'LDN' }
])
</script>

<style>
/* SECTION */
#titulos-feedAnimais{
  margin-bottom: 27px;
}
.h1-feedAnimais {
  background: linear-gradient(to right, #ff934b, #f27322, #d94509);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
  font-weight: 900;
}
.sub-titulo-feedAnimais{
  color: #696969;
  font-weight: 600;
  font-size: 18px;
}

/* FORM */
.titulo-filtros-feedAnimais {
  font-size: 24px;
  color: #6B6B6B;
  font-weight: 900;
}

/* LABEL */
.form-label-input-feedAnimais {
  display: flex;
  flex-direction: column;
}
.paragrafo-filtro-feedAnimais {
  font-weight: 600;
  font-size: 14px;
  color: #373737;
}

/* DIVS */
.div-filtro-feedAnimais {
  padding: 5px 0;
}

/* SWITCH */
.p-inputswitch .p-inputswitch-slider:before {
  margin-top: -0.5em !important;

}

.p-multiselect:not(.p-disabled).p-focus{
    outline:1px solid #f27322 ;
}
.p-inputswitch.p-highlight .p-inputswitch-slider {
    background: #f27322;
}

.switch-filtro-feedAnimais {
  display: flex;
  gap:1rem;
  margin: auto
}

/* SLIDER */
.input-slider-feedAnimais {
  border: none;
  box-shadow: none;
  padding: 0.5rem 0;
  color: orange;
  background: transparent;
  font-weight: 800;
}
.slider-feedAnimais {
  height: 10px;
}
.p-slider .p-slider-handle::before {
  width: 14px;
  height: 14px;
}
.p-slider .p-slider-handle {
  background: linear-gradient(to right, #ff934b, #f27322, #d94509);
}

.p-slider .p-slider-range {
  background: linear-gradient(to right, #ff934b, #f27322, #d94509);
}

.p-slider.p-slider-horizontal .p-slider-handle {
  margin-top: -10px !important;
}

/* MULTISELECT */
.p-multiselect {
  width: 100%;
}

.p-multiselect .p-multiselect-label.p-placeholder {
  color: #373737;
  font-weight: 500;
}

.p-inputswitch-input {
  background: blue;
}

.p-multiselect-panel {
  width: 251px;
}

.p-inputtext:enabled:focus {
  outline: 1px solid #ff934b;
  border-radius: 1rem;
}

.p-multiselect-filter-icon {
  top: 30%;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox,
.p-multiselect-panel .p-multiselect-header .p-checkbox {
  margin-right: 0.5rem !important;
}

.filtro-feedAnimais {
  z-index: 1000;
  left: 5px;
  top: 6.5em;
  padding: 33px 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
}
.p-dialog-mask{
  width: 60% !important;
  height: 0 !important;
}
.p-dialog-header{
  position: absolute;
  top: 6.5em;
  left: 14em;
  z-index: 1001;
  background: transparent;
}
.p-dialog .p-dialog-content:last-of-type{
  background: transparent;
}
</style>

