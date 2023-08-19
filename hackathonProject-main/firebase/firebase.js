  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBW3avekL7M4X5x5ebmkS5_t3Xw7syiCeo",
    authDomain: "pool-project-4505d.firebaseapp.com",
    databaseURL: "https://pool-project-4505d-default-rtdb.firebaseio.com",
    projectId: "pool-project-4505d",
    storageBucket: "pool-project-4505d.appspot.com",
    messagingSenderId: "343537716726",
    appId: "1:343537716726:web:92b8c170068c39eda0cbd7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export {app}