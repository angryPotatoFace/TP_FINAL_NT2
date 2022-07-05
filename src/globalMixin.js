import Vue from "vue";

const myMixingGlobal = {
    methods: {
        getLastList(){
            const lista = this.$store.state.listas;
            return lista[lista.length-1].name;
        }
    },
    computed: {
        getListasdeCompras() {
            return this.$store.state.listas;
        },
    }
}

Vue.mixin(myMixingGlobal);