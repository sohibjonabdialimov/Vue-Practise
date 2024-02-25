import {
  createApp
} from "vue";
import "./style.css";
import App from "./App.vue";
import {
  createPinia
} from 'pinia'
import route from './router'
const pinia = createPinia()

const app = createApp(App)

app.use(pinia);
app.use(route);
app.mount('#app');