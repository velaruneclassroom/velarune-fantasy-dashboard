// Initialize Firebase Auth
const auth = firebase.auth();

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      // Later we'll redirect them to their dashboard here
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Try again.");
    });
