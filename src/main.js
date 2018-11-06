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
//jsonhtml
import JsonHtml from '@/components/Main/Pages/showinfo/JSONEditor/JSONHtml.vue'
Vue.component('json-html', JsonHtml)


Vue.config.productionTip = true


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
