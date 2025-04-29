import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js"; // ✅ all imports at once

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFmjZOtZRhfCj3uBEHylA_x-gZ7GsU52w",
  authDomain: "project-login-4984c.firebaseapp.com",
  projectId: "project-login-4984c",
  storageBucket: "project-login-4984c",
  messagingSenderId: "988892425188",
  appId: "1:988892425188:web:c8b7020bc2148a7ea9f5f1",
  measurementId: "G-P54PKJ6QPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ use app here!

// Login Functionality
const submit = document.getElementById("login");
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("remail").value;
  const password = document.getElementById("rpassword").value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logged in successfully!");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Forgot Password Functionality
function forgotPassword() {
  const email = prompt("Please enter your registered email:");

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  } else {
    alert("Email is required to reset your password.");
  }
}

// Attach forgotPassword function to window (for HTML onclick)
window.forgotPassword = forgotPassword;
