import axios from "axios";


const API_BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function getToken() {
  const token = localStorage.getItem('token');
  console.log('Token JWT:', token); // Verifique o token no console
  return token || '';
}


export const PublicationService = {
  async createPublication(publicationData: { description: string | Blob; status: string | Blob; userId: string | Blob; }, images: (string | Blob)[]) {
    const formData = new FormData();
    formData.append('description', publicationData.description);
    formData.append('status', publicationData.status);
    formData.append('userId', publicationData.userId);

    images.forEach((image: string | Blob, index: any) => {
      formData.append('images', image);
    });

    try {
      const token = getToken(); // Obtendo o token JWT
      console.log(token)
      const response = await apiClient.post('/publications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Adicionando o token ao cabeçalho
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar publicação:', error);
      throw error;
    }
  },

  async getAllPublications() {
    try {
      const response = await apiClient.get('/publications');
      // console.log(response)
      return response.data;
    } catch (error) {
      console.error('Erro ao listar publicações:', error);
      throw error;
    }
  },

  async getPublicationById(id: any) {
    try {
      const response = await apiClient.get(`/publications/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar publicação:', error);
      throw error;
    }
  },

};
