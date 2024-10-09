<template>
    <ion-page>

        <div class="main-login-container">
            <img src="../theme/assets/Logo.svg" alt="" class="img-collar">
            <h1 class="title-login">Collar</h1>
            <div class="login-space-container">
                <input type="text" v-model="email" class="Email" placeholder="E-mail">
                <input type="password" v-model="password" class="Senha" placeholder="Senha">
            </div>
            <div class="login-esqueceu-container">
                <p class="texto-esqueceu">Esqueceu sua <a href="" class="link-color">senha?</a></p>
                <button class="btn-entrar" @click="handleLogin">Entrar</button>
                <p v-if="errorMessage" style="display: flex;text-align: center;color:#D94509 ;">{{ errorMessage }}</p>
            </div>

            <div class="footer-controller-login">
                <div class="footer-login-container">
                    <p class="texto-botton-login1">Ainda não tem conta?</p>
                    <p class="texto-botton-login2"><a href="/signin" class="link-color">Cadastre-se</a> e encontre seu
                        pet!
                    </p>
                </div>
            </div>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import AuthService from '@/services/AuthService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonIcon, IonButton, IonAvatar, IonPage } from '@ionic/vue';


const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();


const handleLogin = async () => {
    try {
        const response = await AuthService.login(email.value, password.value);
        // if (response.data.acess_token) {
        router.push('/app/home');  // Redireciona para a página principal após login bem-sucedido
        // }
    } catch (error) {
        errorMessage.value = 'Credenciais inválidas. Tente novamente.';
    }
};
</script>




<style>
.main-login-container {
    background: #FFE2B7;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.link-entrar {
    text-decoration: none;
    color: white;
}


.img-collar {
    height: 5rem;
    width: 10rem;
}

.title-login {
    font-size: 3rem;
    color: #D94509;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 800;
}


.login-space-container {
    width: 16rem;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.Email,
.Senha {
    color: #ffffff;
    background-color: #FFB78E;
    border-radius: 5px;
    border: 2px solid;
    border-color: #F17441;
    padding: 7px;

}

.Email::placeholder,
.Senha::placeholder {
    color: #F17441;
}

.login-esqueceu-container {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn-entrar {
    height: 2rem;
    background-color: #FF5C00;
    color: white;
    font-size: 14px;
    font-weight: 600;
    width: 9.5rem;
    padding: 5 rem;
    border-radius: 5px;
    margin: auto;
}


.btn-entrar:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}

.texto-esqueceu {
    color: #646464;
    margin: auto;
    margin-bottom: 2rem;
}


.link-color {
    color: #FF5C00;
}


.footer-login-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}


.texto-botton-login1,
.texto-botton-login2 {
    color: #646464;
}


.texto-botton-login1 {
    padding-top: 5rem;
}
</style>




<script></script>