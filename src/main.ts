import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store/store';

import AxiosHttp from './plugins/axios';

import './registerServiceWorker';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css';


Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(AxiosHttp);

Vue.filter('currency', (valor) => {
  return 'R$ ' + valor.toLocaleString('pt-br');
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
