<template >

  <section class="mostrar-lista jumbotron">

      <div class="table-responsive ">
      <h1 class="badge-dark">Lista de {{ $store.state.listName }}</h1>
      <table class="table table-info">
          <tbody >
            <tr v-for="(list,index) in getItemsList()" :key="index" >
              <td :class="[ (index%2==0)? 'bg-warning bg-gradient' :'bg-light']" :style="{ border: 'none', borderBottom: '.5px solid #fff' }">{{list.name}}</td>
              <td :class="[ (index%2==0)? 'bg-warning bg-gradient' :'bg-light']" :style="{ border: 'none', borderBottom: '.5px solid #fff' }">{{list.cantidad}}</td>
            </tr>
          </tbody>
      </table>

      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
        Agregar Item
      </button>

  <!-- Modal agregar Lista-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Escriba el nombre de la lista</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="nombre">Nombre</label>
          <input
            type="text" 
            id="nombre"  
            name="nombre"
            v-model.trim="nombre"
            autocomplete="off"
            class="form-control"
            />
          <label for="cant">Cantidad</label>
          <input
            type="number" 
            id="cant"
            name="cant"
            v-model="cant"
            autocomplete="off"
            class="form-control"
            />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="agregarItem(nombre,cant), close">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal agregar Lista-->
    
  </section>

</template>

<script >

  export default  {
    name: 'mostrar-lista',
    props: [],
    mounted () {
    },
    data () {
      return {
        nombre: "",
        cant: 0,
      }
    },
    methods: {
      getItemsList(){
        return this.$store.state.itemsList;
      },
      agregarItem( name , cant){
        const obj = {name: name,cantidad:cant}
        this.$store.state.itemsList.push(obj);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .mostrar-lista {

  }

  .jumbotron {
    background-color: cadetblue;
  }

</style>
