/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: "",
        listName: "",
        listas: [],
        itemsList: [],
        test: true,
        "url": "https://628fcb460e69410599e2e8b1.mockapi.io/users"
    },
    actions: {
        showList( {commit},id){
            console.log('Se muestra la lista');
            commit('itemList',id);
        },
        async cargarLista( {commit}, name){
            await axios.post(this.state.url, {name:name},{ 'content-type': 'application/json'});
        },
        async getListas( {commit}){
            axios.get(this.state.url)
            .then( data => commit('cargarListas', data.data))
            .catch(e => console.error('ERROR AL OBTENER LISTAS')+e);
        },
        async deleteList({commit}, id){
            await axios.delete(this.state.url+`/${id}`);
        },
        async updateNameList( {commit},name){
            axios.get(this.state.url+`/${this.state.id}`)
            .then( res => {
                res.data.name = name;
                axios.put(this.state.url+`/${this.state.id}`,res.data);
            })
            .catch(e => console.error('ERROR AL OBTENER LISTAS')+e);
        }
    },
    mutations:{
        itemList(state,id){
            state.listName = state.listas[0][id].name;
            state.itemsList = [];
            state.itemsList = state.listas[0][id].item;
            state.test = false;
        },
        cargarListas(state, data){
            state.listas = [];
            state.listas.push(data);
        }
    },
})