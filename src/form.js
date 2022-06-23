import Vue from "vue";
import vueForm from "vue-form";


const options = {
    validators: {
      "no-espacios": function(value) {
        return !value.includes(" ");
      },
      "no-numero": function(value) {
        const regex = /\d/g;
        return !regex.test(value);
      },
    }
  }
  
  Vue.use(vueForm,options);
  