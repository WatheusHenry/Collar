<template>
  <div id="chat-engine-wrapper">
    <div v-if="loading">Carregando...</div>
    <div v-else id="chat-engine">
      <div class="componentes-top-chat">
        <input class="input-pesquisa" v-model="searchText" placeholder="" />
        <button @click="showModal = true" class="botao-sem-fundo"><img src="../assets/icons/plus.svg" alt="" srcset=""></button>
      </div>
      <div v-if="filteredChats.length === 0">Nenhum chat encontrado.</div>
      <div v-else>
        <div class="tab-mensagens">
          <p class="mensagens">Mensagens</p>
        </div>
        <div v-for="chat in filteredChats" :key="chat.id" class="chat-item" @click="navigateToChatPage(chat.id)">
          <h3>{{ chat.title }}</h3>
          <p>{{ chat.last_message ? chat.last_message.text : 'Sem mensagens' }}</p>
          <button class="options-btn botao-sem-fundo" @click.stop="showOptionsMenu(chat)"><img src="../assets/icons/dots.svg" width="15px" alt="" srcset=""></button>
          <div v-if="selectedChat === chat.id" class="options-menu">
            <ul class="ul-chat">
              <li><a @click.stop="deleteChat(chat.id)">Excluir Chat</a></li>
              <li><a @click.stop="reportChat(chat.id)">Denunciar</a></li>
              <li><a @click.stop="markChatAsResolved(chat.id)">Resolvido</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="showModal" header="Criar Novo Chat">
      <form @submit.prevent="createChat" style="display: flex;flex-direction: column;justify-content: space-around;">
        <input class="inputform" v-model="newChatTitle" placeholder="Título do novo chat" required />
        <input class="inputform" v-model="participantUserName" placeholder="Nome do participante" required />
        <button class="botao-chat-g" type="submit">Criar Chat</button>
      </form>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const projectID = '52c3db0f-f347-46af-8d0e-1a0ccdd36d6b'; 
const userName = 'GiihGabi';
const userSecret = '52c3db0f-f347-46af-8d0e-1a0ccdd36d6b'; 

const loading = ref(true);
const chats = ref([]);
const newChatTitle = ref('');
const participantUserName = ref('');
const selectedChat = ref(null);
const showModal = ref(false);
const searchText = ref(''); // Adição da variável searchText

const router = useRouter();

const getChats = async () => {
  try {
    const response = await axios.get('https://api.chatengine.io/chats/', {
      headers: {
        'Project-ID': projectID,
        'User-Name': userName,
        'User-Secret': userSecret
      }
    });
    console.log('Chats data:', response.data);
    chats.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar os chats:', error);
  } finally {
    loading.value = false;
  }
};

const createChat = async () => {
  try {
    const response = await axios.post('https://api.chatengine.io/chats/', 
    {
      title: newChatTitle.value,
      is_direct_chat: true,
      usernames: [userName, participantUserName.value]
    }, 
    {
      headers: {
        'Project-ID': projectID,
        'User-Name': userName,
        'User-Secret': userSecret
      }
    });
    console.log('New chat created:', response.data);
    chats.value.push(response.data);
    newChatTitle.value = '';
    participantUserName.value = '';
  } catch (error) {
    console.error('Erro ao criar o chat:', error);
  }
};

const navigateToChatPage = (chatId) => {
  router.push(`/chat/${chatId}`);
};

const showOptionsMenu = (chat) => {
  if (selectedChat.value === chat.id) {
    selectedChat.value = null;
  } else {
    selectedChat.value = chat.id;
  }
};

const deleteChat = async (chatId) => {
  try {
    await axios.delete(`https://api.chatengine.io/chats/${chatId}/`, {
      headers: {
        'Project-ID': projectID,
        'User-Name': userName,
        'User-Secret': userSecret
      }
    });
    chats.value = chats.value.filter(chat => chat.id !== chatId);
    selectedChat.value = null;
  } catch (error) {
    console.error('Erro ao excluir o chat:', error);
  }
};

const reportChat = (chatId) => {
  // Lógica para denunciar o chat
  console.log('Chat denunciado:', chatId);
  selectedChat.value = null;
};

const markChatAsResolved = (chatId) => {
  // Lógica para marcar o chat como resolvido
  console.log('Chat marcado como resolvido:', chatId);
  selectedChat.value = null;
};

// Computed property para filtrar os chats com base no searchText
const filteredChats = computed(() => {
  if (!searchText.value) {
    return chats.value;
  } else {
    const lowerCaseSearchText = searchText.value.toLowerCase();
    return chats.value.filter(chat => {
      // Verifica se o título do chat inclui o searchText
      const titleMatch = chat.title.toLowerCase().includes(lowerCaseSearchText);
      // Verifica se alguma mensagem do chat inclui o searchText
      const messageMatch = chat.last_message && chat.last_message.text.toLowerCase().includes(lowerCaseSearchText);
      return titleMatch || messageMatch;
    });
  }
});

onMounted(() => {
  getChats();
});
</script>


<style>
#chat-engine-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
}

#chat-engine {
  width: 100%;
  max-width: 800px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 100%;
}
.componentes-top-chat{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-pesquisa{
  border-radius: 6px;
  background-color: #F2F2F2;
  padding: 10px;
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
.botao-chat-g{
  background-color: #F27322;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 6px;
}
.tab-mensagens {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.mensagens {
  border-bottom: 2px solid #F27322;
  color: #F27322;
  margin-bottom: 10px;
  width: 30%;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
}
.ul-chat{
  list-style: none;
  padding: 10px;
}
.inputform{
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #696969;
}
.chat-item {
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.chat-item h3 {
  margin: 0;
  color: #696969;
  font-weight: 500;
}

.chat-item p {
  margin: 5px 0;
  color: #696969;

}

.options-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.options-menu {
  position: absolute;
  top: 22%;
  right: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 5px 0;
  z-index: 99;
}

.options-menu li {
  padding: 5px 10px;
}

.options-menu li:hover {
  background-color: #f0f0f0;
}
</style>
