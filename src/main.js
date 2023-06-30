import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'

 import 'bootstrap/dist/css/bootstrap.css'
 import 'bootstrap-vue/dist/bootstrap-vue.css'
 import 'bootstrap-icons/font/bootstrap-icons.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
});
// salva a configuração global na palavra "Toast"
window.Toast = Toast;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
