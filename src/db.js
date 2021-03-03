import firebase from 'firebase/app'
import 'firebase/database'

// Getting db api key
const config = {
    // API KEYS
    apiKey: "AIzaSyDcXLI4Q1IXXmw41NApHQLKPv7jyDh2UJU",
    authDomain: "vue-chat-app-a5f62.firebaseapp.com",
    databaseURL: "https://vue-chat-app-a5f62-default-rtdb.firebaseio.com",
    projectId: "vue-chat-app-a5f62",
    storageBucket: "vue-chat-app-a5f62.appspot.com",
    messagingSenderId: "657715972583",
    appId: "1:657715972583:web:3c012b81cad9e2f763d542"
};

// Initialize db
const db = firebase.initializeApp(config);

// Export db to use it withing the APP
export default db;
