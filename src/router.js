import Vue from 'vue'
import Router from 'vue-router'

//firebase
import firebase from 'firebase';


//Welcome
import WelcomeView from './views/Welcome/WelcomeView'
//Welcome Pages

import HomePage from '@/components/Welcome/Page/Home';
import WelcomePricing from '@/components/Welcome/Page/Pricing';
import WelcomeFeatures from '@/components/Welcome/Page/Features';
import WelcomeLogin from '@/components/Welcome/Page/Login';

import MainDash from './views/Main/Dashboard.vue';

//Main Pages
import DashHome from '@/components/Main/Pages/DashHome';
//Main Assets
import DashAssets from '@/components/Main/Pages/assets/AssetMain';

//Main Document Preivew
import DashDocumentPreview from '@/components/Main/Pages/documentPreview/DocumentPreviewMain';
//Main BotBuilder
import DashBotBuilder from '@/components/Main/Pages/botbuilder/BotMain';
import DashUsersBots from '@/components/Main/Pages/botbuilder/UsersBots';
import DashUsersBotsTemplates from '@/components/Main/Pages/botbuilder/BotTemplates';
import DashBotReplay from '@/components/Main/Pages/botbuilder/DashBotReplay';

//Main Collaborate
import DashCollaborate from '@/components/Main/Pages/collaborate/CollaborateMain';
import DashCollaborateTeamView from '@/components/Main/Pages/collaborate/CollaborateTeamView';

//Collaborate Team Pages
import DashTeamViewMain from '@/components/Main/Pages/teamPage/TeamMain';

//Story Forms
import DashLeadForm from '@/components/Main/Pages/leadforms/LeadFormsMain';
import DashUsersForms from '@/components/Main/Pages/leadforms/UsersLeadForms';
import DashLeadFormTemplates from '@/components/Main/Pages/leadforms/LeadFormsTemplates';

//Main Integrations
import DashIntegrations from '@/components/Main/Pages/integrations/IntegrationsMain';
import DashIntegrationsManage from '@/components/Main/Pages/integrations/IntegrationsManage';

//Main Tasks
import DashTasks from '@/components/Main/Pages/tasks/TasksMain';

//Main Updates
import DashUpdates from '@/components/Main/Pages/updates/UpdatesMain';

//Main Widgets
import DashWidgets from '@/components/Main/Pages/widgets/WidgetsMain';
import DashUsersWidgets from '@/components/Main/Pages/widgets/UsersWidgets';

//Funnel Dashboard
import FunnelDashView from './views/Funnel/FunnelDashboard'

//Funnel Pages
import FunnelHome from '@/components/Funnel/Pages/FunnelHome';
import FunnelSteps from '@/components/Funnel/Pages/FunnelSteps';

//Funnel Control
import FunnelControl from '@/components/Funnel/Pages/FunnelControl';

//Funnel Single Step Edit
import funnelSingleStepEdit from '@/components/Funnel/Pages/SingleStepEdit';

//Funnel Export 
import funnelExportFunnel from '@/components/Funnel/Pages/ExportFunnel';

//Funnel Single Page Edit
import funnelSinglePageEdit from '@/components/Funnel/Pages/SinglePageEdit';

//Funnel Step Templates
import funnelStepTemplates from '@/components/Funnel/Pages/pageTemplates';

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
          path: 'pricing',
          name: 'Pricing',
          component: WelcomePricing
        },
        {
          path: 'features',
          name: 'Features',
          component: WelcomeFeatures
        },
        {
          path: 'login',
          name: 'Login',
          component: WelcomeLogin
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
          path: '/assets',
          name: 'assets',
          component: DashAssets,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/documentPreview/:id',
          name: 'documentPreview',
          component: DashDocumentPreview,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/botbuilder',
          name: 'botbuilder',
          component: DashBotBuilder,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/botlist',
          name: 'botlist',
          component: DashUsersBots,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/bottemplates',
          name: 'bottemplates',
          component: DashUsersBotsTemplates,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/botReplay/:id',
          name: 'botReplay',
          component: DashBotReplay,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/leadforms',
          name: 'leadforms',
          component: DashLeadForm,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/leadformlist',
          name: 'leadformlist',
          component: DashUsersForms,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/leadformtemplates',
          name: 'leadformtemplates',
          component: DashLeadFormTemplates,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/collaborate',
          name: 'collaborate',
          component: DashCollaborate,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/collaborateteam',
          name: 'collaborateteam',
          component: DashCollaborateTeamView,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/teamview/:id',
          name: 'teamview',
          component: DashTeamViewMain,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/integrations',
          name: 'integrations',
          component: DashIntegrations,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/manageintegrations',
          name: 'manageintegrations',
          component: DashIntegrationsManage,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/widgets',
          name: 'widgets',
          component: DashWidgets,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/userwidgets',
          name: 'userwidgets',
          component: DashUsersWidgets,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: DashTasks,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/updates',
          name: 'updates',
          component: DashUpdates,
          meta: {
            requiresAuth: true,
          }
        },
      ]
    },
    {
      path: '/funneldash',
      component: FunnelDashView,
      children: [{
          path: '',
          name: 'FunnelHome',
          component: FunnelHome,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/FunnelSteps',
          name: 'FunnelSteps',
          component: FunnelSteps,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/funnelControl',
          name: 'funnelControl',
          component: FunnelControl,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/singleStepEdit',
          name: 'singleStepEdit',
          component: funnelSingleStepEdit,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/singlePageEdit',
          name: 'singlePageEdit',
          component: funnelSinglePageEdit,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/exportFunnel',
          name: 'exportFunnel',
          component: funnelExportFunnel,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/stepTemplates',
          name: 'stepTemplates',
          component: funnelStepTemplates,
          meta: {
            requiresAuth: true,
          }
        },
        /*
             {
               path: '/assets',
               name: 'assets',
               component: DashAssets
             },*/
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue')
    }
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