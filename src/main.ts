import Vue, { VNode } from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";

Vue.use(VueCompositionApi);

new Vue({
  render: (h): VNode => h(App),
}).$mount("#app");
