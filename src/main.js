import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import AOS from "aos";
import "aos/dist/aos.css";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    AOS.init();
  },
}).$mount('#app')
