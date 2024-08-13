<template>
    <div class="about">
      <Button label="Open Map" @click="openMapDialog" />
  
      <Dialog v-model:visible="visible" header="Pontos de Encontro" :modal="true" :style="{ width: '90vw' }"
        :closable="true">
        <div id="map" style="height: 60vh;"></div>
      </Dialog>
    </div>
  </template>
  
  <script>
  import { ref, nextTick } from 'vue';
  import L from 'leaflet';
  // import 'leaflet/dist/leaflet.css';
  import Dialog from 'primevue/dialog';
  import Button from 'primevue/button';
  
  export default {
    components: {
      Dialog,
      Button,
    },
    setup() {
      const visible = ref(false);
      const map = ref(null);
  
      const openMapDialog = () => {
        visible.value = true;
        nextTick(() => {
          if (!map.value) {
            map.value = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map.value);
  
            // Ícone personalizado
            const customIcon = L.icon({
              iconUrl: require('@/assets/icons/pin.svg'),
              iconSize: [38, 38], // Tamanho do ícone
              iconAnchor: [19, 38], // Ponto de ancoragem do ícone
              popupAnchor: [0, -38] // Ponto de ancoragem do popup em relação ao ícone
            });
  
            // Adicionando marcadores com ícone personalizado ao mapa
            const markers = [
              { lat: 51.5, lng: -0.09, popup: "Marker 1" },
              { lat: 51.51, lng: -0.1, popup: "Marker 2" },
              { lat: 51.49, lng: -0.08, popup: "Marker 3" }
            ];
  
            markers.forEach(marker => {
              L.marker([marker.lat, marker.lng], { icon: customIcon })
                .addTo(map.value)
                .bindPopup(marker.popup);
            });
          }
        });
      };
  
      return {
        visible,
        openMapDialog,
      };
    },
  };
  </script>
  
  <style>
  .about {
    text-align: center;
    padding: 2rem;
  }
  
  .leaflet-bottom {
    display: none;
  }
  
  #map {
    width: 100%;
    height: 100%;
  }
  </style>
  