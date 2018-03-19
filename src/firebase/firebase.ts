import * as firebase from 'firebase'

interface FirebaseOptions {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
}

const config: FirebaseOptions =
  process.env.NODE_ENV === 'production'
    ? {
        apiKey: 'AIzaSyCmY4RqNbiCDBeZIwGAwkMmx1fPSdBYe0o',
        authDomain: 'truecodersio-dev.firebaseapp.com',
        databaseURL: 'https://truecodersio-dev.firebaseio.com',
        projectId: 'truecodersio-dev',
        storageBucket: 'truecodersio-dev.appspot.com',
        messagingSenderId: '683690199541',
      }
    : {
        apiKey: 'AIzaSyCmY4RqNbiCDBeZIwGAwkMmx1fPSdBYe0o',
        authDomain: 'truecodersio-dev.firebaseapp.com',
        databaseURL: 'https://truecodersio-dev.firebaseio.com',
        projectId: 'truecodersio-dev',
        storageBucket: 'truecodersio-dev.appspot.com',
        messagingSenderId: '683690199541',
      }

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
