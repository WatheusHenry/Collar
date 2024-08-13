<template>
  <div class="screenRgst">
    <section class="mainLogin" v-if="registerStage">
      <div class="main-card-rgst">
        <div class="header-card-rgst">
          <img class="logologin" src="../assets/images/Logo.svg" alt="" />
          <div class="textos-rgst">
            <RouterLink to="/" class="textoEntrar">Cadastre-se!</RouterLink>
          </div>
        </div>

        <div class="inputRegst">
          <label for="username">Nome</label>
          <InputText id="email" v-model="username" aria-describedby="username-help" />
        </div>
        <div class="inputRegst">
          <label for="username">Email</label>
          <InputText id="email" v-model="email" aria-describedby="username-help" />
        </div>
        <div class="inputRegst">
          <label for="username">Senha</label>
          <Password class="password" v-model="password" id="password" :feedback="false" />
        </div>
        <div class="inputRegst">
          <label for="username">Repetir a Senha</label>
          <Password class="password" id="password" :feedback="false" />
        </div>



        <div class="footer-card-rgst">
          <div class="texto-footer-card-rgst">
            <label class="conta">Ja tem conta? <RouterLink to="/login" class="link-login">Entre!</RouterLink></label>
          </div>
          <Button @click="registerStage = false" class="rgstBtn" label=""></Button>
        </div>


      </div>
    </section>
    <section class="mainLogin" style="height: fit-content;" v-if="!registerStage">

      <div class="main-card-rgst">
        <div class="teste">

          <div class="form">
            <div class="header-card-rgst">

              <img class="logorgst" src="../assets/images/Logo.svg" alt="" />
              <div class="textos-pin-rgst">
                <img class="pinrgst" src="../assets/icons/pin.svg" alt="" />
                <label to="/" class="textoloc">Informe sua localização:</label>
              </div>
            </div>

            <div class="inputRegst">
              <label for="username">Cep</label>
              <InputText id="cep" v-model="zip_code" aria-describedby="username-help" />
            </div>
           
            <div class="inputRegst">
              <label for="username">Telefone</label>
              <InputText id="cidade" v-model="phone" aria-describedby="username-help" />
            </div>
            <div class="inputRegst">
              <label for="username">Documento</label>
              <InputText id="rua" v-model="document" aria-describedby="username-help" />
            </div>

          </div>

          <div class="botao-loc-rgstr">
            <Button class="locrgst" @click="submitForm" label="">Entrar</Button>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'; // Importe o useRouter corretamente

import RegisterService from "../services/RegisterService.js";

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const zip_code = ref('');
    const user_level = ref('C');
    const document = ref('');
    const phone = ref('')
    const profile_image = ref('');
    const registerStage = ref(true);

    async function submitForm() {
      try {
        const isSuccess = await RegisterService.registerUser(
          username.value,
          email.value,
          password.value,
          zip_code.value,
          user_level.value,
          document.value,
          profile_image.value,
          phone.value,
        );

        if (isSuccess) {
          router.push('/');

          console.log("Registro bem-sucedido");
        } else {
          console.log("Falha no registro");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }

    return {
      username,
      phone,
      email,
      password,
      zip_code,
      user_level,
      document,
      profile_image,
      registerStage,
      submitForm,
      RouterLink
    };
  }
}
</script>


<style>
.inputRegstDropDowns {
  padding-left: 2rem;
  display: flex;
  color: gray;
  gap: 1rem;
  width: 100%;
}

.images {
  width: 100%;
  height: 5rem;
  display: flex;
  gap: 1rem;

  .image {
    border: 1px solid #a5a5a5;
    background-color: #f8f8f8;
    border-radius: 1rem;
    width: 5rem;
    height: 100%
  }
}

.teste {
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
}

.formAnimals {
  display: flex;
  flex-direction: column;
  width: 30rem;
}


.mainLogin {
  margin: auto;
  width: fit-content;
  height: 100vh;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
}


.divider {
  height: 20rem;
  border: 1px solid #d0d0d0;
  width: 1px;
  margin: auto;
}

.screenRgst {
  background-color: #f0f0f0e7;
  /* margin: auto; */
  width: 100vw;
  height: 100vh;
}

.logorgst {
  width: 9rem;
  height: 5rem;
}

.textoEntrar {
  font-weight: bolder;
  font-size: 2rem;
  margin: 0;
}

.inputRegst {
  display: flex;
  flex-direction: column;
  color: gray;
}

.p-password-input {
  width: 100%;
}

.rgstBtn {
  height: 2.5rem;
  background: linear-gradient(90deg, #ff934b, #f27322, #d94509);
  border: none;
  border-radius: 1rem;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bolder;
  width: fit-content;
  background-image: url('../assets/images/seta.svg');
  background-size: cover;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

}

.mapBtn {
  height: 2.5rem;
  background: linear-gradient(90deg, #ff934b, #f27322, #d94509);
  border: none;
  border-radius: 1rem;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bolder;
  width: fit-content;
  background-image: url('../assets/images/mapa.svg');
  background-size: cover;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

}

/* .screenLogin {
  padding-top: 4rem !important;
  margin: auto;
  width: 100vw;
  height: 10%;
} */

.esqueceu {
  padding-top: 0.5rem;
  color: gray;
  float: right;
  padding-bottom: 1rem;
}

.conta {
  padding-top: 0.5rem;
  color: gray;
}

.cadastrese {
  color: gray;
}

.textoslogin {
  color: gray;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
}



.main-card-rgst {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 80vw;
  /* padding-inline: 3rem; */
}

.cachorros {
  height: 100%;
  width: 100%;
}


.header-card-rgst {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1.0rem;
  padding-bottom: 1rem;
}


.cadastretxt {
  color: #646464;
  font-size: 14px;
}


.textos-rgst {
  line-height: 1rem;
}


.footer-card-rgst {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  padding-top: 1rem;

}

.conta {
  color: #646464;
}

.link-login {
  font-size: 15px;
  text-decoration: underline;
  color: #FF5C00;
}

.logologin {
  padding-left: 3px;
  width: 6rem;
  height: 4rem;
}

.texto-footer-card-rgst {
  padding-left: 2rem;
}

.textos-pin-rgst {
  display: flex;
  gap: 10px;
}

.locrgst {
  display: flex;
  justify-content: center;
  height: 2.5rem;
  background: linear-gradient(90deg, #ff934b, #f27322, #d94509);
  border: none;
  border-radius: 1rem;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bolder;
  width: 9rem;
  margin: auto;

}

.textoloc {
  font-size: 0.9rem;
  font-weight: 600;
}

.botao-loc-rgst {
  padding-top: 4rem;
}
</style>