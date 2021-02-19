import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/assets/styles/styles.scss';
import 'vue-material-design-icons/styles.css'
import { MdButton, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { directive as onClickOutside } from 'vue-on-click-outside'

Vue.directive('on-click-outside', onClickOutside)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
