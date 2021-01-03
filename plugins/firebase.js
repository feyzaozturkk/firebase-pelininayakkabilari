import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDGY84BFeNSz1KFH7KA_lhJpRHV1unAdSY",
    authDomain: "nuxt-odev.firebaseapp.com",
    projectId: "nuxt-odev",
    storageBucket: "nuxt-odev.appspot.com",
    messagingSenderId: "167148174710",
    appId: "1:167148174710:web:8651f9a07f05dca9f14e57"
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}
