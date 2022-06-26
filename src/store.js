/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: "",
        showList: {},
        listas: [],
        itemsList: [],
        test: true,
        "url": "https://628fcb460e69410599e2e8b1.mockapi.io/users"
    },
    actions: {

    // ======================== LISTAS ================================================
        showList( {commit},id) {
            commit('itemList',id);
        },
        async cargarLista( {commit}, name){
            const {data: lista} = await axios.post(this.state.url, {name:name},{ 'content-type': 'application/json'});
            commit('cargarList',lista);
        },
        getListas( {commit} ){
            axios.get(this.state.url)
            .then( data => commit('cargarListas', data.data))
            .catch(e => console.error('ERROR AL OBTENER LISTAS')+e);
        },
        async deleteList({commit}, id){
           let {data: lista} = await axios.delete(this.state.url+`/${id}`);
           commit('deleteList',lista.id);
        },
        async updateNameList( {commit}, name){
            const index = this.state.listas.findIndex((lista) => lista.id == this.state.id);
            const item = this.state.listas[index];
            item.name = name;
            const { data: lista } = await axios.put(this.state.url+`/${item.id}`,item);
            commit('updateNameList',lista);
        },

    // ======================== ITEMS ================================================
        async cargarItemDeLaLista( {commit}, obj){
            const index = this.state.showList.id
            const { data: getList } = await axios.get(this.state.url+`/${index}`);
            getList.item.push(obj);
            const { data: lista } = await axios.put(this.state.url+`/${index}`,getList);
            commit('cargarItemDeLaLista', getList);
        },
        async obtenerLista({commit}){
            const index = this.state.showList.id
            const { data: getList } = await axios.get(this.state.url+`/${index}`);
            commit('cargarItemDeLaLista',getList);
        },
        async deleteItem({commit},id) {
            const idList = this.state.showList.id;
            const { data: getList } = await axios.get(this.state.url+`/${idList}`);
            getList.item.splice(id,1);
            await axios.put(this.state.url+`/${idList}`,getList);
            commit('deleteItem',id);
        }

    },
    mutations:{

    // ======================== LISTAS ================================================
        itemList(state,id){
            state.showList = state.listas[id];
        },
        cargarListas(state, data){
            state.listas = data;
        },
        deleteList(state, id) {
            const index = state.listas.findIndex((lista) => lista.id == id);
            state.listas.splice(index,1);
        },
        cargarList(state,list) {
            state.listas = list;
        },
        updateNameList(state,list) {
            const index = state.listas.findIndex( lista => lista.id == state.id);
            state.listas.splice(index,1,list);
        },
    // ======================== ITEMS ================================================

        cargarItemDeLaLista(state, list){
            state.itemsList = list.item;
        },
        deleteItem(state,id){
            state.itemsList.splice(id,1);
        }
    },
})