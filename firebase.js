const firebaseConfig = {
  apiKey: "AIzaSyASbSxaxd1qMX-2AnumyHCbQPSzQ3QLfuA",
  authDomain: "bktech-computer-online.firebaseapp.com",
  projectId: "bktech-computer-online",
  storageBucket: "bktech-computer-online.firebasestorage.app",
  messagingSenderId: "846988021113",
  appId: "1:846988021113:web:56929454df824c8bc133a8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();