import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
// import 'leaflet/dist/leaflet.css';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.directive('badge', BadgeDirective);


app.mount('#app')
