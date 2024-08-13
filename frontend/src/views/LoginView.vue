<template>
  <div class="screenLogin">
    <section class="mainLogin">
      <div class="main-card-rgst">
        <div class="header-card-rgst">
          <div class="content-header-login">
            <img class="logologin" src="../assets/images/Logo.svg" alt="" />
            <h2 class="entrarLogin">Entrar</h2>
          </div>
        </div>
        <div class="inputLogin">
          <label for="email">Email</label>
          <InputText id="email" v-model="email" aria-describedby="username-help" />
        </div>
        <div class="inputLogin">
          <label for="password">Senha</label>
          <Password class="password" v-model="password" id="password" :feedback="false" />
        </div>
        <div class="texto-esqueceu-login">
          <label class="esqueceu">Esqueceu sua <RouterLink to="/singUp" class="link-registro">senha?</RouterLink> </label>
        </div>
        <div class="footer-btn-login">
          <Button class="loginBtn" @click="submitForm" label="">Entrar</Button>
        </div>
        <div class="footer-texts-login">
          <label class="txt">Ainda não tem conta?</label>
          <label class="txt"><RouterLink to="/singUp" class="link-registro">Cadastre-se</RouterLink> e encontre seu pet!</label>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const submitForm = async () => {
      const loggedIn = await AuthService.login(email.value, password.value);
      if (loggedIn) {
        // Login bem-sucedido, redirecione o usuário para outra página
        router.push('/');
        document.dispatchEvent(new CustomEvent('login-success'));
      } else {
        // Login falhou, exiba uma mensagem de erro
        alert('Usuário ou senha incorretos');
      }
    }

    return {
      email,
      password,
      submitForm
    };
  }
}
</script>


<style>


.mainLogin {
  margin: auto;
  width: fit-content;
  height: 100vh;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
}

.link-registro { font-size: 15px; text-decoration: underline; color: #FF5C00; }


.logologin {
  width: 2rem;
  height: 2rem;
}

.texto-esqueceu-login{
  display: flex;
  justify-content: center;;
}

.esqueceu {
  padding-top: 0.5rem;
    color: gray;
    float: right;
    padding-bottom: 1rem;
  }

.textoEntrar {
  font-weight: bolder;
  font-size: 15px;
  margin: 0;
}

.inputLogin {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  color: gray;
  width: 80vw;
}
.p-password-input{
    width: 100%;
}

.loginBtn {
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

.screenLogin {
  background-color: #f0f0f0e7;
  /* margin: auto; */
  width: 100vw;
  height: 100vh;
}

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



.main-card-rgst{
  display: flex;
  margin: auto;
  flex-direction: column;
  /* padding-inline: 3rem; */
}

.cachorros{
  height: 100%;
  width: 100%;
}


.header-card-rgst{
  justify-content: center;
  display: flex;
  height: fit-content;
  gap: 1rem;
}


.cadastretxt{
  color: #646464;
  font-size: 10px;
}


.textos-rgst{
  line-height: 0.7rem;
}


.footer-btn-login{
  height:fit-content;
  display: flex;
  justify-content: center;
  padding-top:1.5rem;
  label{
    color: #646464;

  }
}

.conta{
  color:#646464;
}

.footer-texts-login{
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-header-login{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.entrarLogin{
  color:#646464;
  font-size: 30px;
  font-weight: bolder;
}


.link-registro {
  font-size: 15px;
  text-decoration: underline;
  color: #FF5C00;
}


.logologin{
  padding-left: 3px;
  width: 6rem;
  height: 4rem; 
}

.txt{
  color: #646464;
}
</style>
