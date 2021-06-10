require('./bootstrap');
import { createApp } from 'vue'
import App from './components/App.vue'
import Navbar from './components/Utility/Navbar.vue'
import router from './router'

const option = {};

const app = createApp(option);

app.component('App', App);
app.component('Navbar', Navbar);


app.use(router).mount('#app');