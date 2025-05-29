const text = "Children's Play"; 
const animatedText = document.getElementById("animatedText");
let index = 0;

function typeLetterByLetter() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetterByLetter, 200);
  } else {
    animatedText.classList.add("blink");
  }
}
window.onload = typeLetterByLetter;

// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvvbbcLP45ImWjrhK4Q1xS986laKxW8mg",
  authDomain: "halaquiz-61733.firebaseapp.com",
  databaseURL: "https://halaquiz-61733-default-rtdb.firebaseio.com",
  projectId: "halaquiz-61733",
  storageBucket: "halaquiz-61733.appspot.com",
  messagingSenderId: "134760010211",
  appId: "1:134760010211:web:c6829bbb6b5b86c617d0d6",
  measurementId: "G-J53ZMZHRY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

window.addEventListener('DOMContentLoaded', () => {
  const showLoginBtn = document.getElementById('showLoginBtn');
  const loginBox = document.getElementById('loginBox');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');

  showLoginBtn.addEventListener('click', () => {
    loginBox.style.display = 'block';
  });

  // Login handler
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "skills.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });

  // Signup handler
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // No updateProfile call here

        return set(ref(database, 'users/' + user.uid), {
          email: email,
          createdAt: new Date().toISOString()
        });
      })
      .then(() => {
        alert("Signup successful!");
        window.location.href = "skills.html";
      })
      .catch((error) => {
        alert("Signup failed: " + error.message);
      });
  });
});
