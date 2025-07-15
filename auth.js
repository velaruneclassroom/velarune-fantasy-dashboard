// auth.js

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Set up auth
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("loginBtn").addEventListener("click", () => {
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log("User signed in:", result.user);
      window.location.href = "dashboard.html"; // adjust if needed
    })
    .catch(error => {
      console.error("Error signing in:", error);
      alert("Login failed. Check console for more info.");
    });
});
