import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBWRar41f6bSw90LBM7Lo_csDBnMXYawVg",

  authDomain: "vue-calendar-5f500.firebaseapp.com",

  projectId: "vue-calendar-5f500",

  storageBucket: "vue-calendar-5f500.appspot.com",

  messagingSenderId: "564624762364",

  appId: "1:564624762364:web:9211fa42b5202d23f4be79"

});

export const b = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
