import Vue from 'vue';
import App from './App.vue';
import constants from '~/constants';

Vue.config.productionTip = false;

new Vue({
  data: {
    constants
  },
  render: h => h(App)
}).$mount('#app');
