<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <div class="main-login-container">
            <img src="../theme/assets/Logo.svg" alt="" class="img-collar">
            <h1 class="title-login">Collar</h1>
            <div class="login-space-container">
                <input type="text" class="Email" placeholder="E-mail">
                <input type="text" class="Senha" placeholder="Senha">
            </div>
            <div class="login-esqueceu-container">
                <p class="texto-esqueceu">Esqueceu sua <a href="" class="link-color">senha?</a></p>
                <button class="btn-entrar"><a href="/app/home" class="link-entrar">Entrar</a></button>
            </div>

        <div class="footer-controller-login">
            <div class="footer-login-container">
                <p class="texto-botton-login1">Ainda não tem conta?</p>
                <p class="texto-botton-login2"><a href="/signin" class="link-color">Cadastre-se</a> e encontre seu pet!</p>
            </div>
        </div>
      </div>
</template>

<script setup lang="ts">


</script>



<style>

.main-login-container{
    background: #FFE2B7;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.link-entrar{
    text-decoration: none;
    color: white;
}


.img-collar {
    height: 5rem;
    width: 10rem;
}

.title-login{
   font-size: 3rem;
   color: #D94509;
   font-family: 'Montserrat Alternates', sans-serif;
   font-weight: 800;
}


.login-space-container{
    width: 16rem;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.Email, .Senha{
    color: #F17441;
    background-color: #FFB78E;
    border-radius: 5px;
    border: 2px solid;
    border-color:#F17441;
    padding: 7px;

}

.Email::placeholder, .Senha::placeholder{
    color: #F17441;
} 

.login-esqueceu-container{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn-entrar{
    height: 2rem;
    background-color: #FF5C00;
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
}


.link-color {
    color: #FF5C00;
}


.footer-login-container{
    display: flex;
    align-items: center;
    flex-direction: column;
}


.texto-botton-login1,.texto-botton-login2{ 
    color: #646464;
}


.texto-botton-login1{
    padding-top: 5rem;
}

</style>




<script></script>