<template>

  <div style="display: inline; width: 80vw;margin: auto; padding-top: 1rem;">

    <div style="display: flex;justify-content: space-between;align-items: center;">
      <div style="display: flex;align-items: center;gap: 1rem;">
        <img src="../assets/icons/perfil.svg" style="" />
        <h2 style="height: fit-content;">{{ userData.name }}</h2>
      </div>
      <Button icon="pi pi-pencil" class="editar" @click="modalEdicao = true"></Button>
    </div>
    <div style="display: flex;justify-content: space-between;margin-top: 1rem">

      <h3>Tel: {{ userData.phone }}</h3>
    </div>
    <h3>Email: {{ userData.email }}</h3>
  </div>

  <!-- Modal Edição de dados -->
  <Dialog v-model:visible="modalEdicao" modal header="Atualize seus dados:" :style="{ width: '80vw' }">
    <div class="flex align-items-center gap-3 mb-3" style="width: 100%;">
      <label for="username" class="font-semibold w-6rem">Nome de Usuario:</label>
      <InputText id="username" class="" style="width: 100%;" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-3" style="width: 100%;">
      <label for="email" class="font-semibold w-6rem">Telefone:</label>
      <InputText id="email" class="flex-auto" style="width: 100%;" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-3" style="width: 100%;">
      <label for="email" class="font-semibold w-6rem">E-mail:</label>
      <InputText id="email" class="flex-auto" style="width: 100%;" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2" style="gap: 1rem;padding: 1rem;display: flex;">
      <Button type="button" style="width: 5rem; height: 1.5rem;padding: 0.5rem;" label="Cancel" severity="secondary"
        @click="modalEdicao = false"></Button>
      <Button type="button" style="width: 5rem; height: 1.5rem;padding: 0.5rem;" label="Salvar"
        @click="modalEdicao = false"></Button>
    </div>
  </Dialog>

</template>



<script>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import UserService from "@/services/UserService";
import AuthService from "@/services/AuthService"; // Certifique-se de importar AuthService

export default {
  setup() {
    const router = useRouter();
    const modalEdicao = ref(false);
    const userId = localStorage.getItem('userId'); // Obtém o ID do usuário do armazenamento local

    // Variáveis reativas para armazenar os dados do usuário
    const userData = ref({
      username: "",
      telefone: "",
      email: ""
    });

    // Função para buscar os dados do usuário por ID
    const getUserData = async () => {
      try {
        const user = await UserService.getUserById(userId);
        userData.value = user;
        console.log(userData.value)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Função para atualizar os dados do usuário
    const saveUserData = async () => {
      try {
        await UserService.updateUser(userId, userData.value);
        modalEdicao.value = false; // Fechar o modal após a atualização
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    };

    // Detecta quando o usuário faz logout e redireciona para a rota "/"
    watch(AuthService.isLoggedIn, (loggedIn) => {
      if (!loggedIn) {
        router.push("/");
      }
    });

    // Chamada inicial para buscar os dados do usuário ao montar o componente
    onMounted(() => {
      getUserData();
      console.log("Entrou");
    });

    return {
      modalEdicao,
      userData,
      saveUserData
    };
  }
};
</script>


<style>
.editar {
  border: none;
  background-color: rgb(241, 241, 241);
  color: gray;
  width: 1.5rem;
  height: 1.5rem;
}

.pi {
  font-size: 0.8rem !important;
}
</style>