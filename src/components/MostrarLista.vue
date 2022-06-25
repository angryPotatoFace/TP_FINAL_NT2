<template >

  <section class="mostrar-lista jumbotron">

      <div class="table-responsive ">
      <h1 class="badge-dark">Lista de {{ $store.state.showList.name }}</h1>
      <table class="table table-info">
          <tbody >
            <tr v-for="(list,index) in getListasdeItemsCompras" :key="index" >
              <td :class="[ (index%2==0)? 'bg-warning bg-gradient' :'bg-light']" :style="{ border: 'none', borderBottom: '.5px solid #fff' }">{{list.nombre}}</td>
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

          <vue-form :state="formState" @submit.prevent="onSubmit()">

            <!--   Campo nombre + validaciones    -->
            <validate tag="div">
              <label for="nombre">Nombre</label>
              <input 
                type="text"
                id="nombre"
                class="form-control"
                name="nombre"
                autocomplete="off"
                v-model.trim="formData.nombre" 
                required 
                :minlength="datoMinLength"
                :maxlength="datoMaxLength"
                no-espacios
                no-numero
              />

              <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div slot="minlength" class="alert alert-danger mt-1">
                  Este campo debe poseer al menos {{datoMinLength}} caracteres.</div>
                <div class="alert alert-danger mt-1" v-if="formData.nombre.length ===datoMaxLength">
                La cantidad maxima de caracteres es {{datoMaxLength}}.
                  </div>

                <div slot="no-espacios" class="alert alert-danger mt-1">
                  Este campo no debe poseer espacios intermedios.</div>
                <div slot="no-numero" class="alert alert-danger mt-1">
                  Este campo solo permite letras.</div>
              </field-messages>
              
            </validate>
            <br>
            
            <!--    Campo cantidad + validaciones     -->
            <validate tag="div">

              <label for="cantidad">Cantidad</label>
              <input 
                type="number"
                id="cantidad"
                class="form-control"
                name="cantidad"
                autocomplete="off"
                v-model.number="formData.cantidad" 
                required 
                rango-numero
              />

              <field-messages class="my-3" name="cantidad" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
                  <div slot="rango-numero" class="alert alert-danger mt-1">La cantidad debe ser mayor o igual a 0 y menor que  11</div>
              </field-messages>
              </validate>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary" type="submit" :disabled="formState.$invalid">Guardar cambios</button>
              </div>
          </vue-form>
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
        formState: {},
        formData: {
          nombre: "",
          cantidad: 0
        },
        datoMinLength : 3,
        datoMaxLength : 15,
      }
    },
    methods: {
      onSubmit() {  
        this.agregarItem(this.formData.nombre,this.formData.cantidad);
        this.formData = this.limpiarFormulario();
        this.formState._reset();
      }, 
      getItemsList(){
        return this.$store.state.itemsList;
      },
      agregarItem( name , cant){
        const obj = { nombre: name, cantidad: cant }
        this.$store.dispatch('cargarItemDeLaLista',obj);
      },
       deleteItem(nombre){
        this.$store.dispatch('deleteList',nombre);
      },
      limpiarFormulario(){
        return {
          nombre: '',
          cantidad: ''
        }
      },
    },
    computed: {
      getListasdeItemsCompras() {
        return this.$store.state.showList.item;
      }
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
