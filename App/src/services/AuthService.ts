// src/services/authService.ts
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Substitua pela URL real da sua API

interface User {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

export default {
  async login(user: User): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/login`, user);
      // Salva o token no localStorage ou em outro lugar, se necessário
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Falha no login. Verifique suas credenciais.');
    }
  },

  async register(user: User): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/register`, user);
      // Salva o token no localStorage ou em outro lugar, se necessário
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Falha no registro. Verifique suas informações.');
    }
  },

  logout(): void {
    // Remove o token ao fazer logout
    localStorage.removeItem('token');
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },

  isAuthenticated(): boolean {
    // Verifica se o usuário está autenticado
    return !!this.getToken();
  }
};
