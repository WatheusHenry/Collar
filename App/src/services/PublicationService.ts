export const PublicationService = {
  getData() {
    return [
      {

        alt: 'Description for Image 1',
        title: 'Title 1',
        username: "Fulano da silva",
        pubId: 3,
        userId: 1,
        images: ['https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg', 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg', 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg'],
        animalStatus: 'Perdido',
        description: "Lorem Ipsum dolor asi amet"
      }, {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
        username: "Fulano da silva",
        pubId: 3,
        userId: 1,
        images: ['https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg'],
        animalStatus: 'Perdido',
        description: "Lorem Ipsum dolor asi amet"
      }, {

        alt: 'Description for Image 1',
        title: 'Title 1',
        username: "Fulano da silva",
        pubId: 3,
        userId: 1,
        images: ['https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg'],
        animalStatus: 'Perdido',
        description: "Lorem Ipsum dolor asi amet"
      }, {

        alt: 'Description for Image 1',
        title: 'Title 1',
        username: "Fulano da silva",
        pubId: 3,
        userId: 1,
        images: ['https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg', 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg'],
        animalStatus: 'Perdido',
        description: "Lorem Ipsum dolor asi amet"
      },
      // Adicione mais objetos conforme necessário
    ];
  },

  getImages() {
    return this.getData(); // Corrigi a função para referenciar o método correto
  }
};
