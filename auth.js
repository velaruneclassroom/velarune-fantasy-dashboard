// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// Your Firebase config (from firebase-config.js or directly here)
const firebaseConfig = {
  apiKey: "AIzaSyCOT9oajBB3jIhPMjshdIbjfpssTllFijI",
  authDomain: "velarune-rpg.firebaseapp.com",
  projectId: "velarune-rpg",
  storageBucket: "velarune-rpg.firebasestorage.app",
  messagingSenderId: "832434090158",
  appId: "1:832434090158:web:312f11e71dd830d8c1fd3f"
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
