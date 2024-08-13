<template>
    <div id="chat-page">
      <div class="header">
          <button @click="goBack" class="botao-sem-fundo"><img src="../assets/icons/arrowback.svg" alt="" srcset=""></button>
          <input v-model="searchQuery" @input="filterMessages" class="input-pesquisa" placeholder="Pesquisar mensagens" />
          <!-- <button @click="showOptionsMenu(message)" class="botao-sem-fundo"><img src="../assets/icons/dots.svg" width="10px" alt="" srcset=""></button> -->
      </div>
      <!-- <div v-if="message === selectedMessage">
        <ul class="options-menu">
          <li><a @click="deleteMessage(message)">Excluir conversa</a></li>
          <li><a @click="reportMessage(message)">Denunciar</a></li>
          <li><a @click="markAsResolved(message)">Resolvido</a></li>
          <li><a @click="markAsResolved(message)">Pesquisar</a></li>
        </ul>
      </div> -->
      <div v-if="loading">Carregando mensagens...</div>
      <div v-else>
        <div v-for="message in filteredMessages" :key="message.id" class="message" :class="{ 'received-message': message.sender_username !== userName, 'sent-message': message.sender_username === userName }">
          <div class="message-content">
            <strong>{{ message.sender_username }}:</strong> {{ message.text }}
          </div>
          <div class="message-options">
            <button @click="showOptionsMenu(message)"><img src="../assets/icons/dots.svg" width="10px" alt="" srcset=""></button>
            <div v-if="message === selectedMessage">
              <ul class="options-menu">
                <li><a @click="deleteMessage(message)">Excluir conversa</a></li>
                <li><a @click="reportMessage(message)">Denunciar</a></li>
                <li><a @click="markAsResolved(message)">Resolvido</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <form @submit.prevent="sendMessage" class="fixed-bottom">
        <div class="bloco-confirmar">
            <p>Confirme se o animal foi encontrado aqui!</p>
            <input type="checkbox" width="25px" class="styled-checkbox" v-model="animalFound" /> 
        </div>
        <div class="input-with-button">
            <input class="input-chatpage" v-model="newMessage" placeholder="Enviar mensagem..." required />
            <button class="botao-sem-fundo" type="submit"><img src="../assets/icons/send.svg" width="25px" alt="" srcset=""></button>
        </div>
    </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const chatId = route.params.chatId;
  
  const projectID = '52c3db0f-f347-46af-8d0e-1a0ccdd36d6b'; 
  const userName = 'GiihGabi'; 
  const userSecret = '52c3db0f-f347-46af-8d0e-1a0ccdd36d6b';
  
  const loading = ref(true);
  const messages = ref([]);
  const newMessage = ref('');
  const animalFound = ref(false);
  const selectedMessage = ref(null);
  const searchQuery = ref('');
  
  const router = useRouter();
  
  const getMessages = async () => {
    try {
      const response = await axios.get(`https://api.chatengine.io/chats/${chatId}/messages/`, {
        headers: {
          'Project-ID': projectID,
          'User-Name': userName,
          'User-Secret': userSecret
        }
      });
      messages.value = response.data;
    } catch (error) {
      console.error('Erro ao carregar as mensagens:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const sendMessage = async () => {
    try {
      const response = await axios.post(`https://api.chatengine.io/chats/${chatId}/messages/`, 
      {
        text: newMessage.value,
        animal_found: animalFound.value
      }, 
      {
        headers: {
          'Project-ID': projectID,
          'User-Name': userName,
          'User-Secret': userSecret
        }
      });
      messages.value.push(response.data);
      newMessage.value = '';
      animalFound.value = false;
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };
  
  const goBack = () => {
    router.go(-1); // Voltar uma página no histórico de navegação
  };
  
  const showOptionsMenu = (message) => {
    if (selectedMessage.value === message) {
      selectedMessage.value = null;
    } else {
      selectedMessage.value = message;
    }
  };
  
  const deleteMessage = async (message) => {
    try {
      await axios.delete(`https://api.chatengine.io/chats/${chatId}/messages/${message.id}/`, {
        headers: {
          'Project-ID': projectID,
          'User-Name': userName,
          'User-Secret': userSecret
        }
      });
      messages.value = messages.value.filter(msg => msg !== message);
      selectedMessage.value = null;
    } catch (error) {
      console.error('Erro ao excluir a mensagem:', error);
    }
  };
  
  const reportMessage = (message) => {
    // Lógica para denunciar a mensagem
    console.log('Mensagem denunciada:', message);
    selectedMessage.value = null;
  };
  
  const markAsResolved = (message) => {
    // Lógica para marcar a mensagem como resolvida
    console.log('Mensagem marcada como resolvida:', message);
    selectedMessage.value = null;
  };
  
  const filteredMessages = computed(() => {
    return messages.value.filter(message => {
      return message.text.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
  });
  
  const filterMessages = () => {
    // Função para filtrar as mensagens com base na pesquisa
  };
  
  onMounted(() => {
    getMessages();
  });
  </script>
  
  <style>
  #chat-page {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    width: 100%;
    height: 91vh;
    background: #F8F8F8;
    position: relative;
  }
  .fixed-bottom {
    position: absolute;
    bottom: 0;
    /* top: 0; */
    width: 91%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .header h1 {
    margin: 0;
  }
  
  .message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .message-content {
    flex-grow: 1;
    color: black;
    text-align: justify;
  }
  
  .message-options {
    position: relative;
  }
  
  .message-options button {
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .options-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    padding: 5px 0;
    z-index: 999;
  }
  
  .options-menu li {
    padding: 5px 10px;
  }
  
  .options-menu li:hover {
    background-color: #f0f0f0;
  }
.bloco-confirmar{
    background: #FF8030;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: white;
    margin-bottom: 16px;
}
  .input-chatpage{
    margin-bottom: 0;
    padding: 10px;

    border-radius: 8px;
    border: 1px solid #FF934B !important;
  }
  .input-chatpage::placeholder {
    color: #9F9F9F;
  }
  .input-with-button {
    display: flex;
    align-items: center; /* Alinha itens verticalmente */
  }
  
  .input-with-button input {
    flex: 1; /* Ocupa todo o espaço disponível */
  }
  
  .input-with-button button {
    position: absolute;
    right: 6px;
  }
  .input-pesquisa{
    border-radius: 6px;
    padding: 10px;
    background-color: #F2F2F2;
    border: none;
    width: 75%;
    margin-bottom: 0;
    padding-left: 35px; /* Espaço para o ícone */
    background-image: url('../assets/icons/lupa.svg'); /* Substitua pelo caminho para o seu ícone de pesquisa */
    background-size: 20px; /* Tamanho do ícone */
    background-repeat: no-repeat; /* Evita que o ícone se repita */
    background-position: 10px center; 
  }
  .botao-sem-fundo{
    background-color: transparent;
    border: none;
  }
  .received-message {
    text-align: left;
    background-color: #FFBE83;
    border-radius: 10px;
    padding: 10px;
    margin-right: 50%; /* Margem à direita para alinhar à esquerda */
  }
  
  .sent-message {
    text-align: right;
    background-color: #E9E9E9;
    border-radius: 10px;
    padding: 10px;
    margin-left: 50%; /* Margem à esquerda para alinhar à direita */
  }
</style>
  