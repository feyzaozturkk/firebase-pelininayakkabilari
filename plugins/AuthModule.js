// import Vuex from 'vuex'
import cookie from 'js-cookie'

const packageData = require('../nuxt.config.js')
import * as firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore';
 
firebase.default.auth().languageCode = 'tr';


export default ({app}, inject) => {

  const authObj = {
    loggedIn: () => {
      return cookie.get('loggedIn') ? cookie.getJSON('loggedIn') : false;
      // return  cookie.get('loggedIn') ? JSON.parse(cookie.get('loggedIn')) : false;
    },
    user: () => {
      return cookie.get('userData') ? cookie.getJSON('userData') : null
      // return cookie.get('userData') ? JSON.parse(cookie.get('userData')) :null
    },
    setUser(user) {
      cookie.set('userData', user);
    },
    async signInGoogle() {
      return await new Promise(async (resolve, reject) => {
        let resObj = {
          userData: {},
          message: ''
        }

        let provider = new firebase.default.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        await firebase.default.auth().signInWithPopup(provider).then(res => {
          resObj.userData = res?.additionalUserInfo?.profile
          resObj.message = 'success'
          cookie.set('userData', res?.additionalUserInfo?.profile)
          cookie.set('loggedIn', true)

          resolve(resObj);
        }).catch(err => {
          resObj.userData = undefined
          resObj.message = err.message
          cookie.remove('userData')
          cookie.set('loggedIn', false)

          reject(err)
        })
      })
    },
    async signInWithEmailAndPassword(email, password) {
      let resObj = {
        userData: null,
        message: ''
      }

      return await new Promise((async (resolve, reject) => {
        await firebase.default.auth().signInWithEmailAndPassword(email, password).then(res => {
          resObj.userData = {
            email: res?.user.email,
            displayName: res?.user.displayName,
            emailVerified: res?.user.emailVerified,
            uid: res?.user.uid,
          }
          resObj.message = 'success'

          cookie.set('userData', resObj.userData)
          cookie.set('loggedIn', true)

          resolve(res)
        }).catch(err => {
          resObj.userData = undefined
          resObj.message = err.message
          cookie.remove('userData')
          cookie.set('loggedIn', false)

          reject(err)
          console.error(err)
        })


        this.loggedIn();
        this.user();
      }))
    },
    logout() {
      cookie.remove('userData')
      cookie.set('loggedIn', false)
    },
    async getData(path) {
      const db = firebase.default.firestore();
      let ds = []
      const citiesRef = db.collection(path);
      const snapshot = await citiesRef.get();

      snapshot.forEach(doc => {
        ds.push({id: doc.id, ...doc.data()})
      });

      return ds
    },
  }
  inject('auth', authObj)
}
