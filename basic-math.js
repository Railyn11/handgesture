import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDvvbbcLP45ImWjrhK4Q1xS986laKxW8mg",
    authDomain: "halaquiz-61733.firebaseapp.com",
    databaseURL: "https://halaquiz-61733-default-rtdb.firebaseio.com",
    projectId: "halaquiz-61733",
    storageBucket: "halaquiz-61733.firebasestorage.app",
    messagingSenderId: "134760010211",
    appId: "1:134760010211:web:c6829bbb6b5b86c617d0d6",
    measurementId: "G-J53ZMZHRY7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});

const questions = [
  { question: "2 + 3 = ?", options: ["4", "5", "6", "3"], answer: "5" },
  { question: "7 - 4 = ?", options: ["3", "5", "2", "4"], answer: "3" },
  { question: "5 + 1 = ?", options: ["6", "7", "5", "4"], answer: "6" },
  { question: "9 - 5 = ?", options: ["5", "3", "4", "2"], answer: "4" },
  { question: "1 + 6 = ?", options: ["6", "7", "8", "5"], answer: "7" },
  { question: "10 - 3 = ?", options: ["6", "7", "8", "5"], answer: "7" },
  { question: "4 + 2 = ?", options: ["5", "6", "7", "4"], answer: "6" },
  { question: "6 - 1 = ?", options: ["5", "4", "6", "3"], answer: "5" },
  { question: "3 + 3 = ?", options: ["5", "6", "4", "7"], answer: "6" },
  { question: "8 - 6 = ?", options: ["1", "2", "3", "4"], answer: "2" }
];

let shuffled = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 10;

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  shuffled = questions.sort(() => 0.5 - Math.random());
  current = 0;
  score = 0;
  document.getElementById("score").textContent = "Score: 0";
  showQuestion();
}

function startTimer() {
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showAnswer(null);
    }
  }, 1000);
}

function showQuestion() {
  const q = shuffled[current];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => showAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function showAnswer(selected) {
  clearInterval(timer);
  const correct = shuffled[current].answer;

  if (selected === correct) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }

  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    btn.style.backgroundColor =
      btn.textContent === correct ? "lightgreen" :
      btn.textContent === selected ? "lightcoral" : "";
  });
}

function nextQuestion() {
  current++;
  if (current >= shuffled.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").textContent = `Quiz finished! Your score is ${score}/${shuffled.length}`;

  saveScore(score);
}

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
    currentUser = user;
  } else {
    console.log("No user logged in");
    currentUser = null;
  }
});

function saveScore(score) {
  const user = auth.currentUser;
  if (user) {
    const scoresRef = ref(database, 'scores/' + user.uid);
push(scoresRef, {
  score: score,
  timestamp: new Date().toLocaleString() // e.g. "5/29/2025, 3:15:30 PM"
})

    .then(() => {
      console.log("Score saved successfully");
    })
    .catch(error => {
      console.error("Error saving score:", error);
    });
  } else {
    console.log("User not logged in — score not saved");
  }
}

window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
