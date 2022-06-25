<template >

  <section class="navbar">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/">
        <a class="navbar-brand pl-4" href="#">Inicio</a>
      </router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <!-- ruta Listas -->
            <router-link to="/listas">
              <a class="nav-link" href="#">Listas</a>
            </router-link>
          </li>

          <li class="nav-item">
            <!-- ruta mostrar Listas -->
            <router-link to="/show-list">
              <a class="nav-link" href="#">Mostrar Lista</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script >

  export default  {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'navbar',
    props: [],
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
  .navbar {
    width: 100%;
    padding: 0;
  }
</style>
