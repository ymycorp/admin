import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import moment from 'moment';
import accounting from 'accounting';

import store from './store';
import router from './router';
import App from './App';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = process.env.SERVER_URL;
  axios.defaults.withCredentials = true;
}

axios.defaults.validateStatus = function validateStatus(status) {
  return status < 400;
};

moment.locale('hu');

accounting.settings = {
  currency: {
    symbol: 'Ft',
    format: '%v %s',
    thousand: ' ',
    decimal: ',',
    precision: 0,
  },
  number: {
    precision: 0,
    thousand: ' ',
    decimal: ',',
  },
};

Vue.filter('formatMoney', (value, precision) => accounting.formatMoney(value, { precision }));
Vue.filter('formatNumber', (value, precision) => accounting.formatNumber(value, { precision }));
Vue.filter('formatDateTime', value => moment(value).format('YYYY. MM. DD. HH:mm'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
