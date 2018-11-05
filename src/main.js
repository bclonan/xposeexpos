import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
// fbase
const fb = require('@/services/firebase/init.js');

//Outside Packages
import vClickOutside from 'v-click-outside';
import UUID from 'vue-uuid';
import Toasted from 'vue-toasted';


Vue.config.productionTip = false


Vue.use(vClickOutside);
//Funnel Dashboard
Vue.use(UUID);
Vue.use(Toasted)
let app = null;


fb.auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
