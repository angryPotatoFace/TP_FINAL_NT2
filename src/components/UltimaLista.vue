<template>

  <section class="ultima-lista my-5 badge-dark">
    <h1>Ultima lista agregada {{ ultima | pasarAMayuscula}}</h1>
  </section>

</template>

<script >

  export default  {
    name: 'ultima-lista',
    props: [ 'ultima' ],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
