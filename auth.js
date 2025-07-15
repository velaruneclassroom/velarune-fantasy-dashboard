
King, Alexandria <aking1@tps501.org>
3:44 PM (1 minute ago)
to me

// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// Your Firebase config (from firebase-config.js or directly here)
const firebaseConfig = {
  apiKey: "AIzaSyC9Y09QaJb3j1jPMh9sJdDIjp5sTIE1jjI",
  authDomain: "velarune-rpg.firebaseapp.com",
  projectId: "velarune-rpg",
  storageBucket: "velarune-rpg.appspot.com",
  messagingSenderId: "832434090158",
  appId: "1:832434090158:web:984c3228a6459ce2c1fd3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In logic
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in as:", user.displayName);
        // Redirect or update UI here
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  });
} else {
  console.log("Login button not found!");
}
