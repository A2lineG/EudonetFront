import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from './router';

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
