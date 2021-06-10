import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Views/Home.vue'
import Article from './components/Views/Article.vue'

const routes = [
    { path : '/', component : Home, name : 'home'},
    { path : '/article/:article_id', component : Article, name : 'articolo'}

];

const router = createRouter({
    routes, 
    history : createWebHistory()
}); 

export default router;