import firebase from 'firebase/compat';

// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/analytics';
// import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDbLUu41oDI2OWN1v8akr6JwGlBTCX21f8',
  authDomain: 'dinner-party-8bf96.firebaseapp.com',
  projectId: 'dinner-party-8bf96',
  storageBucket: 'dinner-party-8bf96.appspot.com',
  messagingSenderId: '486361458452',
  appId: '1:486361458452:web:eefba2d0b794783a6bc401',
  measurementId: 'G-FG7K8RH4YS',
};

firebase.initializeApp(config);
// firebase.analytics();

// export const auth = firebase.auth();
// export const storage = firebase.storage().ref();
// export const firestore = firebase.firestore();

export default firebase;
