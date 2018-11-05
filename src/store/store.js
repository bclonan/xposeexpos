import Vue from 'vue'
import Vuex from 'vuex'
import mainPushMenu from './modules/MainUI/pushMenu.js';
import mainNavLeft from './modules/MainUI/hideNavLeft.js';
import toggleMainModal from './modules/MainUI/toggleModalOverlay.js';
import mainSidebarRight from './modules/MainUI/toggleChat.js';
import mainToggleProfile from './modules/MainUI/toggleProfileOverlay.js';
import toggleActiveModal from './modules/MainUI/toggleActiveModal.js';

//funnel modules
import funnelmainPushMenu from './modules/FunnelUI/funnelPushMenu.js';
import funnelstepsPushMenu from './modules/FunnelUI/funnelStepPushMenu.js';
import funnelSearchOverlay from './modules/FunnelUI/funnelSearchOverlay.js';
import funnelFabMenu from './modules/FunnelUI/funnelFabMenu.js';

//Choose Expo Search
import chooseExpo from './modules/ExpoChoose/ExpoMainChoice.js';


//firebase
const fb = require('@/services/firebase/init.js');

Vue.use(Vuex)

//Firebase Stuff
fb.auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit('setCurrentUser', user);
    store.dispatch('fetchUserProfile');
    fb.usersCollection.doc(user.uid).onSnapshot((doc) => {
      store.commit('setUserProfile', doc.data());
    });
    // realtime updates from sentinvites

    // realtime update recieved invites
    // realtime updates from sentinvites

    // collection of user chats

    // collection of friendlelations

    fb.usersCollection
      .doc(user.uid)
      .collection('friends')
      .get()
      .then((res) => {
        const relationships = [];
        res.forEach((doc) => {
          const newItem = doc.data();
          newItem.id = doc.id;
          // console.log(doc.data().userFriend_id)
          const newestitem = doc.data().userRef;
          const chatreference = doc.data().chat_id;
          newestitem.get().then((doc) => {
            const thirdnew = doc.data();
            // push other results from first query to returned object using dot or square bracket notation obj.key3 = "value3"; obj["key3"] = "value3";
            thirdnew.chatId = chatreference;
            // thirdnew.id = doc.id
            relationships.push(thirdnew);
          });
        });
        store.commit('setUserFriends', relationships);
      })
      .catch((err) => {
        console.error(err);
      });

    // realtime updates from our posts collection

  }
});

//End Firebase Stuff







const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    posts: [],
    hiddenPosts: [],
    friendInvites: [],
    notificationRecieved: [],
    userChatRooms: [],
    userChatMessages: [],
    userFriends: [],
    currentChat: '',
    currentChatFriendsName: '',
    funnelData: [],
  },
  actions: {
    clearData({
      commit
    }) {
      commit('setCurrentUser', null);
      commit('setUserProfile', {});

      commit('setHiddenPosts', null);
    },
    fetchUserProfile({
      commit,
      state
    }) {
      fb.usersCollection
        .doc(state.currentUser.uid)
        .get()
        .then((res) => {
          commit('setUserProfile', res.data());
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProfile({
      commit,
      state
    }, data) {
      const Name = data.Name;
      const email = data.email;
      const country = data.country;
      const Company = data.Company;
      const phone = data.phone;
      const jobTitle = data.jobTitle;
      const linkdin = data.linkdin;
      const twitter = data.twitter;
      fb.usersCollection
        .doc(state.currentUser.uid)
        .update({
          Name,
          email,
          country,
          Company,
          phone,
          jobTitle,
          linkdin,
          twitter,
        })
        .then((user) => {
          // update all posts by user to reflect new name

          // update all comments by user to reflect new name

        })
        .catch((err) => {
          console.log(err);
        });
    },
    // setting chat message from userdirectory.vue
    userChatSlidein({
      commit,
      state
    }, data) {
      const chatId = data;

      commit('settingCurrentChat', chatId);
    },
    userChatCurrentName({
      commit,
      state
    }, data) {
      const friendsnameChat = data;

      commit('setCurrentChatFriendsName', friendsnameChat);
    },
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setInvites(state, val) {
      if (val) {
        state.friendInvites = val;
      } else {
        state.friendInvites = [];
      }
    },
    setRecievedInvites(state, val) {
      if (val) {
        state.notificationRecieved = val;
      } else {
        state.notificationRecieved = [];
      }
    },
    setUserChatRooms(state, val) {
      if (val) {
        state.userChatRooms = val;
      } else {
        state.userChatRooms = [];
      }
    },
    setUserChatRoomMessages(state, val) {
      if (val) {
        state.userChatMessages = val;
      } else {
        state.userChatMessages = [];
      }
    },
    setUserFriends(state, val) {
      if (val) {
        state.userFriends = val;
      } else {
        state.userFriends = [];
      }
    },
    setPosts(state, val) {
      if (val) {
        state.posts = val;
      } else {
        state.posts = [];
      }
    },
    setHiddenPosts(state, val) {
      if (val) {
        // make sure not to add duplicates
        if (!state.hiddenPosts.some(x => x.id === val.id)) {
          state.hiddenPosts.unshift(val);
        }
      } else {
        state.hiddenPosts = [];
      }
    },
    // currentchatmutation
    settingCurrentChat(state, val) {
      state.currentChat = val;
    },
    setCurrentChatFriendsName(state, val) {
      state.currentChatFriendsName = val;
    },
    setCurrentFunnel(state, val) {
      if (val) {
        state.funnelData = val;
      } else {
        state.funnelData = [];
      }
    },
  },
  getters: {
    getUser: state => state.currentUser,
    getUserProf: state => state.userProfile,
    getChatiid: state => state.currentChat,
    getFunnelData: state => state.funnelData,
  },
  modules: {
    mainPushMenu,
    mainNavLeft,
    toggleMainModal,
    mainSidebarRight,
    mainToggleProfile,
    toggleActiveModal,
    funnelmainPushMenu,
    funnelstepsPushMenu,
    funnelSearchOverlay,
    funnelFabMenu,
    chooseExpo
  },
});

export default store;
