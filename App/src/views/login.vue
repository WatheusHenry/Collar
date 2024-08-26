<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

     <div class="main-login-container">
            <img src="C:\Users\USER\OneDrive\Desktop\projetoIntegrador2024-2\ProjetoIntegrador\App\src\theme\assets\icons\collar.svg" class="img-collar">
            <h1 class="title-login">Collar</h1>
            <div class="login-space-container">
                <input type="text" class="Email" placeholder="E-mail">
                <input type="text" class="Senha" placeholder="Senha">
            </div>
            <div class="login-esqueceu-container">
                <P class="texto-esqueceu">Esqueceu sua <a href="" class="link-color">senha?</a></P>
                <button class="btn-entrar">Entrar</button>
            </div>
            <div class="footer-login-container">
                <p class="texto-botton-login1">Ainda não tem conta?</p>
                <p class="texto-botton-login2"><a href="" class="link-color">Cadastre-se</a> e encontre seu pet!</p>
            </div>
      </div>
</template>





<style>

.main-login-container{
    background: #FFE2B7;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
}

.btn-entrar{
    height: 2rem;
    background-color: #FF5C00;
    width: 9.5rem;
    padding: 5 rem;
    border-radius: 5px;;
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