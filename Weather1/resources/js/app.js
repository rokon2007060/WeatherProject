import './bootstrap';
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { ref } from "vue";
import HomeRoute from './Pages/HomeRoute.vue';

axios.defaults.headers.common['Accept'] = 'application/json';



const response = ref();

createApp(App).use(router).mount("#app");

