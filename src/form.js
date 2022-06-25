import Vue from "vue";
import VueForm from "vue-form";


const options = {
    validators: {
      "no-espacios": function(value) {
        return !value.includes(" ");
      },
      "no-numero":   function(value) {
        const regex = /\d/g;
        return !regex.test(value);
      },
      "rango-numero": function(value){
        if( value>=0 && value<=10) {
            return true;
        }
      },
    },
  };
  
  Vue.use(VueForm,options);
  