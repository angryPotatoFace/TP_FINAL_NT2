<template >
  <section class="listas jumbotron">
    <h1 class="badge-dark">Lista de Compra</h1>
      <div class="table-responsive jumbotron">
      <table class="table table-info">
          <tbody >
            <tr v-for="(list,index) in getListasdeCompras" :key="index" >
              <td :class="[ (index%2==0)? 'bg-warning bg-gradient' :'bg-light']" :style="{border: 'none', borderBottom: '.5px solid #fff' }" :id='index' @click="showList($event)">{{ list.name }}</td>
              <button class="btn btn-dark" :style="{marginRight: '1rem'}" @click="deleteList(list.id)">Delete</button>
              <button class="btn btn-dark" data-toggle="modal" data-target="#updateModal" @click="setId(list.id)">Update</button>
            </tr>
          </tbody>
      </table>
      </div>
  
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-dark " data-toggle="modal" data-target="#exampleModal">
    Agregar Listas
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
          <input type="text" v-model.trim="input" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="agregarLista(input)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal agregar Lista-->

  <!-- Modal update Lista-->
  <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Actualizar nombre de la Lista</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input type="text" v-model.trim="input" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateLista(input)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal update Lista-->

  </section>
</template>

<script >
  export default  {
    
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'listas',
    props: [],
    mounted () {
      this.getListas();
    },
    data () {
      return {
        data: [],
        nombre: "",
        id: "",
        listasDeCompras: [],
        input: "",
      }
    },
    methods: { 
      showList(event){
        const id = event.target.id;
        this.$store.dispatch('showList',id);
      },
      agregarLista(name){
        this.$store.dispatch('cargarLista',name);
      },
      getListas(){
        this.$store.dispatch('getListas');
      },
      deleteList(id){
        this.$store.dispatch('deleteList',id);
        //this.wait();
      },
      updateLista(name){
        this.$store.dispatch('updateNameList',name);
      },
      setId(id){
        this.$store.state.id = id;
      }, 
      // wait(){
      //   setTimeout( () => window.location.href = "http://localhost:8080" ,1000);
      // },
    },
    computed: {
      getListasdeCompras() {
        console.log(this.$store.state.listas);
        return this.$store.state.listas;
      }
    }
}


</script>

<style scoped >
  .jumbotron {
    background-color: cadetblue;
  }

  td {
    background-color: yellow;
    border: none;
    border-bottom: 1px solid #ccc;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
    width: 80%;
  }

  tr {
    background-color: cadetblue;
  }

  .bg-warning {
    opacity: 0.9;
  }
</style>
