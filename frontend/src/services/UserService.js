const API_URL = 'http://localhost:8000/api/user';

export default {
  // Listar todos os usuários
  async getUsers() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Obter um usuário por ID
  async getUserById(userId) {
    try {
      const response = await fetch(`${API_URL}/${userId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user with ID ${userId}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  },

  // Atualizar um usuário existente
  async updateUser(userId, userData) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error(`Failed to update user with ID ${userId}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  },

  // Excluir um usuário
  async deleteUser(userId) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`Failed to delete user with ID ${userId}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  }
};
