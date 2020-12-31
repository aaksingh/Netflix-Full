import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBaZXJEMxxQdZTuIu_IHSgiKsYScq2TsaY",
  authDomain: "netflx-94cf3.firebaseapp.com",
  projectId: "netflx-94cf3",
  storageBucket: "netflx-94cf3.appspot.com",
  messagingSenderId: "486768403139",
  appId: "1:486768403139:web:22bb4128faa5c25b66f876",
  measurementId: "G-PV58CNGQEP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

// const firebaseConfig = {
//   apiKey: "AIzaSyBeWeG1q3m4KkYShXdHgCiSgKTQxLEGuf4",
//   authDomain: "chatapp-aaksingh.firebaseapp.com",
//   projectId: "chatapp-aaksingh",
//   storageBucket: "chatapp-aaksingh.appspot.com",
//   messagingSenderId: "585405396806",
//   appId: "1:585405396806:web:aa89d5756ec65733e19747",
//   measurementId: "G-CMBPGTQY5Q",
// };

// //Authentication and Hosting
