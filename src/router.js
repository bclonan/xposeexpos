import Vue from 'vue'
import Router from 'vue-router'

//firebase
import firebase from 'firebase';


//Welcome
import WelcomeView from './views/Welcome/WelcomeView'
//Welcome Pages

import HomePage from '@/components/Welcome/Page/Home';
import WelcomeWorks from '@/components/Welcome/Page/Howitworks';
import WelcomeSearch from '@/components/Welcome/Page/SearchPage';
import WelcomeExpoCategoryPage from '@/components/Welcome/Page/ExpoCategoryPage';
import WelcomeExibitor from '@/components/Welcome/Page/Exibitor';
import WelcomeContact from '@/components/Welcome/Page/Contact';
import WelcomeLogin from '@/components/Welcome/Page/Login';

import MainDash from './views/Main/Dashboard.vue';

//Main Pages
import DashHome from '@/components/Main/Pages/DashHome';
//Main Message Page
import DashMessages from '@/components/Main/Pages/messages/DashMessages';

//Main Account Page
import DashAccount from '@/components/Main/Pages/account/DashAccount';

//Main info Edit Expo info
import editShowInfo from '@/components/Main/Pages/showinfo/editShowInfo';

import addShows from '@/components/Main/Pages/shows/addShows';
//organizer shows


import expo from '@/components/Main/Pages/organizerShowEdit/expo';
import organizerShow from '@/components/Main/Pages/organizerShowEdit/organizerShowManage';
// main manage show/analytics
import manageshowInfo from '@/components/Main/Pages/showinfo/manageshowInfo';
import vendorManageShows from '@/components/Main/Pages/showinfo/vendorManageShows';



Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: WelcomeView,
      children: [{
          path: '',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'Howitworks',
          name: 'Howitworks',
          component: WelcomeWorks
        },
        {
          path: 'Browse',
          name: 'Browse',
          component: WelcomeSearch
        },
        {
          path: 'Exhibitor/:id/:pageid',
          name: 'Exhibitor',
          component: WelcomeExibitor
        },
        {
          path: 'Contact',
          name: 'Contact',
          component: WelcomeContact
        },
        {
          path: 'login',
          name: 'Login',
          component: WelcomeLogin
        },
        {
          path: 'Categories/:id',
          name: 'Categories',
          component: WelcomeExpoCategoryPage
        },

      ]
    },
    {
      path: '/main',
      component: MainDash,
      children: [{
          path: '',
          name: 'DashHome',
          component: DashHome,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/addShows',
          name: 'addShows',
          component: addShows,
          meta: {
            requiresAuth: true,
          }
        },

        {
          path: '/expo',
          name: 'expo',
          component: expo,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/messages',
          name: 'messages',
          component: DashMessages,
          meta: {
            requiresAuth: true,
          }
        },

        {
          path: '/account',
          name: 'account',
          component: DashAccount,
          meta: {
            requiresAuth: true,
          }
        },

        {
          path: '/editShowInfo',
          name: 'editShowInfo',
          component: editShowInfo,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/manageshowInfo/:id',
          name: 'manageshowInfo',
          component: manageshowInfo,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/vendorManageShows/:id',
          name: 'vendorManageShows',
          component: vendorManageShows,
          meta: {
            requiresAuth: true,
          }
        },


      ]
    },


  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next({
      name: 'Signup',
    });
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});


export default router;
