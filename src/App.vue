<template>
  <div id="app">
    <div v-if="$store.state.test"> <Listas /> </div>
    <div v-else> <MostrarLista /> </div>     
  </div>
</template>

<script>

import Listas from './components/Listas.vue'
import MostrarLista from './components/MostrarLista.vue'

export default {
  name: 'App',
  components: {
    Listas,
    MostrarLista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #ccc !important;
}
</style>
