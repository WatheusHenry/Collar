// No arquivo store/index.js
import { createStore } from 'vuex';
import { useRouter } from 'vue-router'; // Importe o useRouter do Vue Router

const store = createStore({
  modules: {
    auth: {
      state: {
        isLoggedIn: false
      },
      mutations: {
        setLoggedIn(state, value) {
          state.isLoggedIn = value;
        }
      },
      actions: {
        login({ commit }) {
          // Lógica de login...
          commit('setLoggedIn', true);
          const router = useRouter(); // Obtenha a instância do router
          router.push('/'); // Use o router para redirecionar após o login
        },
        logout({ commit }) {
          // Lógica de logout...
          commit('setLoggedIn', false);
        }
      }
    }
    // Outros módulos Vuex, se houver
  }
});

export default store;
