import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDJ3lgR1MIblSKaY_DEUL7Cny4pMU5XpnA',
  authDomain: 'xyzfunnel.firebaseapp.com',
  databaseURL: 'https://xyzfunnel.firebaseio.com',
  projectId: 'xyzfunnel',
  storageBucket: 'xyzfunnel.appspot.com',
  messagingSenderId: '29272924957',
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const functions = firebase.functions();
// mesaging

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');
// one to one chats
// invites
const notificationsCollection = db.collection('userNotifications');

// chatrooms
const chatMessagesCollection = db.collection('userChatMessages');
// friendship collection
const userRelationshipCollection = db.collection('userRelationship');
// added
const collabMembers = db.collection('collabMembers');
const collabs = db.collection('collabs');
// functions
const checkCollabfunc = firebase.functions().httpsCallable('checkCollab');
const checkAliasfunc = firebase.functions().httpsCallable('checkAlias');
const chechChatbotFunc = firebase.functions().httpsCallable('checkChatbot');
const chechstoryFunc = firebase.functions().httpsCallable('checkStoryform');
const checkfunnelFunc = firebase.functions().httpsCallable('checkfunnelFunc');
const checkadFunc = firebase.functions().httpsCallable('checkadFunc');
const uploadFileFunc = firebase.functions().httpsCallable('uploadFile');
// chatbot collection
const chatBotCollection = db.collection('chatBots');
// chatbotData collection
const chatBotDataCollection = db.collection('chatbotRespData');
// users file collection
const userFileCollection = db.collection('userAssets');

// story forms
// story collection
const storyFormCollection = db.collection('storyForms');
// storyData collection
const storyFormDataCollection = db.collection('storyFormsRespData');

// / story forms
// storage
const fbStorage = firebase.storage;
const globalstorageRef = firebase.storage().ref();
// userfilesstorageref
const fbstorageRef = firebase.storage();
const userFileStore = globalstorageRef.child('user_assets');
// funnelbuilder
// funnel collection
const funnelCollection = db.collection('userFunnels');
// funnelData collection
const funnelDataCollection = db.collection('funnelRespData');
// /funnelbuilder
// user ad creations
const userAdStore = globalstorageRef.child('user_ads');
// story forms
// story collection
const adCollection = db.collection('userAds');
// storyData collection
const adDataCollection = db.collection('adRespData');
// /

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  collabMembers,
  collabs,
  checkCollabfunc,
  checkAliasfunc,
  notificationsCollection,
  chatMessagesCollection,
  userRelationshipCollection,
  chatBotCollection,
  chatBotDataCollection,
  chechChatbotFunc,
  userFileCollection,
  uploadFileFunc,
  globalstorageRef,
  userFileStore,
  fbStorage,
  fbstorageRef,
  chechstoryFunc,
  storyFormCollection,
  storyFormDataCollection,
  checkfunnelFunc,
  funnelCollection,
  funnelDataCollection,
  userAdStore,
  adCollection,
  adDataCollection,
  checkadFunc,
};
