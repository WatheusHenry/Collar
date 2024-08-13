<template>
    <h1 class="title">Ranking</h1>
    <div class="searchBar">
        <InputText class="input-pesquisar" v-model="search" placeholder="Pesquisar" />
    </div>
    <div class="podium">
        <div class="low">
            <img class="profilePodium"
                src="../assets/images/circle.png"
                alt="">
                fulano
            <div class="lowBlock">
                7
            </div>
        </div>
        <div class="high">
            <img class="profilePodium"
                src="../assets/images/circle.png"
                alt="">
                beltrano
            <div class="highBlock">
                10
            </div>
        </div>
        <div class="medium">
            <img class="profilePodium"
                src="../assets/images/circle.png"
                alt="">
                ciclano
            <div class="mediumBlock">
                5
            </div>
        </div>
    </div>
    <h2 class="subtitle">Total de pets encontrados</h2>
    <div class="profiles">
        <div class="profileLine">
            <img class=" profileImg"
                src="../assets/images/circle.png"
                alt="">
            <h4 class="name">Nome - 0 animais encontrados</h4>
        </div>
        <div class="profileLine">
            <img class=" profileImg"
                src="../assets/images/circle.png"
                alt="">
            <h4 class="name">Nome - 0 animais encontrados</h4>
        </div>
        <div class="profileLine">
            <img class=" profileImg"
                src="../assets/images/circle.png"
                alt="">
            <h4 class="name">Nome - 0 animais encontrados</h4>
        </div>
        <div class="profileLine">
            <img class=" profileImg"
                src="../assets/images/circle.png"
                alt="">
            <h4 class="name">Nome - 0 animais encontrados</h4>
        </div>
        <div class="profileLine">
            <img class=" profileImg"
                src="../assets/images/circle.png"
                alt="">
            <h4 class="name">Nome - 0 animais encontrados</h4>
        </div>


    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // Usando o segundo argumento para acessar a função emit
        const search = ref('')


        return { search }
    }
}
</script>

<style>
.title {
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    font-weight: 500;
    color: #f27322;
}

.subtitle {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: #787878;
}

.searchBar {
    width: 100vw;
    justify-content: center;
    display: flex;
}

.input-pesquisar {
    height: 2rem;
    width: 75%;
}

.input-pesquisar:enabled:focus {
    outline: 1px solid #ff934b;
}

.podium {
    display: flex;
    justify-content: center;
    /* height: 15rem; */
    padding: 1rem;
}

.profilePodium {
    width: 2.5 rem;
    height: 2.5rem;
    border: #FF934B 0.2rem solid;
    border-radius: 100%;
}

.low {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 0.2rem;

}

.lowBlock {
    width: 2rem;
    background-color: #FF934B;
    height: 3rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    color: white;

}

.high {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 0.2rem;

}

.highBlock {
    width: 2rem;
    background-color: #FF934B;
    height: 8rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    color: white;
}

.medium {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 0.2rem;

}

.mediumBlock {
    width: 2rem;
    background-color: #FF934B;
    height: 4rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    color: white;

}

.profiles {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
}

.profileLine {
    padding: 0.2rem;
    color: #787878;
    display: flex;
    justify-content: start;
    gap: 1rem;
    text-align: center;
    margin: auto;
}

.profileImg {
    width: 2rem;

}

.name {
    margin: auto;
}
</style>