import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';

// firebase init goes here
const config = {
  apiKey: "AIzaSyAe_jVkyPXi0H1KFPyeuFAwUBHy3iSGAlo",
  authDomain: "xposeexpos.firebaseapp.com",
  databaseURL: "https://xposeexpos.firebaseio.com",
  projectId: "xposeexpos",
  storageBucket: "xposeexpos.appspot.com",
  messagingSenderId: "652610256097"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
// mesaging

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
const expoCollection = db.collection('expo');
const expoAnalytics = db.collection('expoAnalytics');
const expoApproval = db.collection('expoApproval');
const messagesCollection = db.collection('messages');
const analyticsCollection = db.collection('analytics');
// one to one chats

// chatrooms
const chatMessagesCollection = db.collection('userChatMessages');

// functions
const checkAliasfunc = firebase.functions().httpsCallable('checkAlias');

const uploadFileFunc = firebase.functions().httpsCallable('uploadFile');


// / story forms
// storage
const fbStorage = firebase.storage;
const globalstorageRef = firebase.storage().ref();
// userfilesstorageref
const fbstorageRef = firebase.storage();
const userFileStore = globalstorageRef.child('user_assets');


export {
  db,
  auth,
  currentUser,
  usersCollection,
  expoCollection,
  messagesCollection,
  analyticsCollection,
  chatMessagesCollection,
  checkAliasfunc,
  uploadFileFunc,
  fbStorage,
  fbstorageRef,
  userFileStore,
  expoAnalytics,
  expoApproval

};
