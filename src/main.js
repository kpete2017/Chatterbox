import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTV1JA9rnh-8Z7i8GXQ7RO3R8LCBWnDR4",
    authDomain: "chatterbox-24995.firebaseapp.com",
    databaseURL: "https://chatterbox-24995.firebaseio.com",
    projectId: "chatterbox-24995",
    storageBucket: "chatterbox-24995.appspot.com",
    messagingSenderId: "136669596883",
    appId: "1:136669596883:web:d5d6edcbb8e137d22fd826"
  };

firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
