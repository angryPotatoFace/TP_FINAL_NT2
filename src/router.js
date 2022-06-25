import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Listas from './components/Listas.vue'
import MostrarLista from './components/MostrarLista.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Listas },
        { path: '/listas', component: Listas },
        { path: '/show-list', component: MostrarLista },
    ],
});