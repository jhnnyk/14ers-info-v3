import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDbnkatbSvfjXj2bivjHBWssFVbmesWQss',
  authDomain: 'fourteeners-info.firebaseapp.com',
  projectId: 'fourteeners-info',
  storageBucket: 'fourteeners-info.appspot.com',
  messagingSenderId: '620706304378',
  appId: '1:620706304378:web:05dfb7e00c77e10c4f46c3',
  measurementId: 'G-WXSMPM76DP',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// firebase.analytics()

export const db = firebase.firestore()
