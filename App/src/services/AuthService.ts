import axios, { AxiosError } from 'axios';

const API_URL = 'http://127.0.0.1:3000/auth/';

class AuthService {
  async login(email: any, password: any) {
    try {
      const response = await axios.post(API_URL + 'login', {
        email: email,
        password: password,
      });

      if (response.data.access_token) {
        console.log(response.data);
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('userId', JSON.stringify(response.data.userId))
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Erro no login:', error.response.data);
          if (error.response.status === 401) {
            throw new Error('Credenciais inválidas. Por favor, tente novamente.');
          } else if (error.response.status === 500) {
            throw new Error('Erro no servidor. Tente mais tarde.');
          } else {
            throw new Error('Erro ao realizar login. Status: ' + error.response.status);
          }
        } else if (error.request) {
          console.error('Nenhuma resposta recebida:', error.request);
          throw new Error('Nenhuma resposta do servidor. Verifique sua conexão.');
        } else {
          console.error('Erro ao configurar a requisição:', error.message);
          throw new Error('Erro ao realizar login: ' + error.message);
        }
      } else {
        throw new Error('Ocorreu um erro inesperado.');
      }
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user: { email: any; password: any; }) {
    return axios.post(API_URL + 'register', {
      email: user.email,
      password: user.password,
    });
  }
}


export default new AuthService();
