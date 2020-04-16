import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import constants from '~/constants';

Vue.use(VueCompositionApi);

new Vue({
  data: {
    constants
  },
  render: h => h(App)
}).$mount('#app');
