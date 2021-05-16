import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Localbase from 'localbase'
import AutoResponsive from 'autoresponsive-vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

let db = new Localbase('db');
Vue.use(AutoResponsive);

new Vue({
  router,
  store,
  vuetify,
  db,
  render: h => h(App)
}).$mount('#app')
