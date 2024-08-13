var URL = "http://localhost:8000/api/auth";

export default {
  async login(email, password) {
    try {
      const response = await fetch(URL + "/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.authorisation.token;
      const userId = data.user.id; // Obtendo o ID do usuário

      // Verifique se o token e o ID foram retornados
      if (!token || !userId) {
        throw new Error('Token or user ID not found');
      }

      // Armazene o token JWT e o ID do usuário no armazenamento local
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  },

  async getUserDetails() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(URL + "/user-details", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get user details');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting user details:', error);
      throw error;
    }
  },

  async logout() {
    try {
      // Remova o token e o ID do armazenamento local
      localStorage.removeItem('token');
      localStorage.removeItem('userId');

      return true;
    } catch (error) {
      console.error('Error logging out:', error);
      return false;
    }
  }
};
