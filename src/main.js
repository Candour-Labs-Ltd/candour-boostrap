import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import store from "./store";
import 'firebase/firestore'
require('firebase/auth')

Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAEdBCQYU7ZQ4yPScBEwCnIctITMLOPtEQ",
  authDomain: "candour-bootstrap.firebaseapp.com",
  databaseURL: "https://candour-bootstrap.firebaseio.com",
  projectId: "candour-bootstrap",
  storageBucket: "candour-bootstrap.appspot.com",
  messagingSenderId: "19237686734",
  appId: "1:19237686734:web:7a58f23d76bad69b1f6f9f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      db,
      auth,
      usersCollection,
      postsCollection,
      commentsCollection,
      likesCollection,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
