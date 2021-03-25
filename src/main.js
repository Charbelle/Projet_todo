import { createApp } from 'vue'
import App from '@/views/App.vue'

import router from './router'
import store from './store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'



const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(router).use(store).mount('#app')