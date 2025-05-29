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

// Quiz data (abbreviated for brevity)
const alphabet = [
  { question: "What letter comes after A?", options: ["B", "C", "D", "E"], answer: "B" },
  { question: "What letter comes after B?", options: ["A", "C", "D", "E"], answer: "C" },
  { question: "What letter comes after C?", options: ["D", "E", "F", "G"], answer: "D" },
  { question: "What letter comes after D?", options: ["E", "F", "G", "H"], answer: "E" },
  { question: "What letter comes after E?", options: ["F", "G", "H", "I"], answer: "F" },
  { question: "What letter comes after F?", options: ["G", "H", "I", "J"], answer: "G" },
  { question: "What letter comes after G?", options: ["H", "I", "J", "K"], answer: "H" },
  { question: "What letter comes after H?", options: ["I", "J", "K", "L"], answer: "I" },
  { question: "What letter comes after I?", options: ["J", "K", "L", "M"], answer: "J" },
  { question: "What letter comes after J?", options: ["K", "L", "M", "N"], answer: "K" },
  { question: "What letter comes after K?", options: ["L", "M", "N", "O"], answer: "L" },
  { question: "What letter comes after L?", options: ["M", "N", "O", "P"], answer: "M" },
  { question: "What letter comes after M?", options: ["N", "O", "P", "Q"], answer: "N" },
  { question: "What letter comes after N?", options: ["O", "P", "Q", "R"], answer: "O" },
  { question: "What letter comes after O?", options: ["P", "Q", "R", "S"], answer: "P" },
];
const numbers = [
  { question: "How many sides are there in a square?", options: ["4", "6", "7", "0"], answer: "4" },
  { question: "What number comes after 2?", options: ["1", "2", "3", "4"], answer: "3" },
  { question: "What number comes before 5?", options: ["4", "6", "2", "3"], answer: "4" },
  { question: "How many legs does a spider have?", options: ["6", "8", "4", "10"], answer: "8" },
  { question: "How many fingers are on one hand?", options: ["4", "5", "6", "10"], answer: "5" },
  { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "How many wheels does a bicycle have?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "What number comes after 9?", options: ["10", "11", "8", "7"], answer: "10" },
  { question: "How many hours are there in a day?", options: ["24", "12", "60", "30"], answer: "24" },
  { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "How many legs does a cat have?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "How many days are there in a week?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "What number comes before 1?", options: ["0", "2", "3", "10"], answer: "0" },
  { question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "How many toes do humans have?", options: ["8", "10", "6", "12"], answer: "10" }
];
const colors = [
  { question: "What color is the sky?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue" },
  { question: "What color is grass?", options: ["Green", "Red", "Yellow", "Blue"], answer: "Green" },
  { question: "What color is the sun?", options: ["Yellow", "Blue", "Purple", "Black"], answer: "Yellow" },
  { question: "What color is blood?", options: ["Red", "Blue", "Orange", "Green"], answer: "Red" },
  { question: "What color is an orange?", options: ["Purple", "Orange", "Red", "Green"], answer: "Orange" },
  { question: "What color is a banana?", options: ["Yellow", "Pink", "Red", "Blue"], answer: "Yellow" },
  { question: "What color is the ocean?", options: ["Blue", "Red", "Brown", "Black"], answer: "Blue" },
  { question: "What color are apples usually?", options: ["Red", "Black", "Pink", "White"], answer: "Red" },
  { question: "What color is chocolate?", options: ["Brown", "White", "Green", "Blue"], answer: "Brown" },
  { question: "What color is a watermelon outside?", options: ["Green", "Red", "Yellow", "Purple"], answer: "Green" },
  { question: "What color is a watermelon inside?", options: ["Red", "Blue", "Green", "White"], answer: "Red" },
  { question: "What color are strawberries?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
  { question: "What color is a lemon?", options: ["Yellow", "Red", "Green", "Blue"], answer: "Yellow" },
  { question: "What color is coal?", options: ["Black", "Red", "Pink", "Brown"], answer: "Black" },
  { question: "What color is cotton?", options: ["White", "Brown", "Blue", "Green"], answer: "White" }
];
const shapes = [
  { question: "What shape is a ball?", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: "Circle" },
  { question: "What shape is a window?", options: ["Circle", "Rectangle", "Triangle", "Square"], answer: "Rectangle" },
  { question: "What shape has 3 sides?", options: ["Square", "Triangle", "Circle", "Hexagon"], answer: "Triangle" },
  { question: "What shape is a pizza?", options: ["Circle", "Square", "Rectangle", "Triangle"], answer: "Circle" },
  { question: "What shape is a traffic stop sign?", options: ["Octagon", "Circle", "Square", "Triangle"], answer: "Octagon" },
  { question: "What shape has 4 equal sides?", options: ["Triangle", "Rectangle", "Square", "Circle"], answer: "Square" },
  { question: "What shape is a slice of cake?", options: ["Triangle", "Circle", "Square", "Hexagon"], answer: "Triangle" },
  { question: "What shape is a coin?", options: ["Circle", "Triangle", "Oval", "Square"], answer: "Circle" },
  { question: "What shape is an egg?", options: ["Oval", "Circle", "Square", "Hexagon"], answer: "Oval" },
  { question: "What shape is a table top?", options: ["Rectangle", "Triangle", "Circle", "Hexagon"], answer: "Rectangle" },
  { question: "What shape is a TV screen?", options: ["Rectangle", "Square", "Circle", "Oval"], answer: "Rectangle" },
  { question: "What shape has 6 sides?", options: ["Hexagon", "Pentagon", "Square", "Circle"], answer: "Hexagon" },
  { question: "What shape is a dice face?", options: ["Square", "Circle", "Triangle", "Oval"], answer: "Square" },
  { question: "What shape is a cheese wedge?", options: ["Triangle", "Square", "Circle", "Hexagon"], answer: "Triangle" },
  { question: "What shape is a computer screen?", options: ["Rectangle", "Triangle", "Circle", "Oval"], answer: "Rectangle" }
];

// Combine all categories
const allQuestions = [...alphabet, ...numbers, ...colors, ...shapes];

let shuffled = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 5;

function startQuiz() {
  // Hide start button, show quiz UI
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result").style.display = "none";

  // Shuffle and pick 10 questions
  shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
  current = 0;
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;

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
      showAnswer(null); // no selection = incorrect
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
  // Disable all buttons and highlight
  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = "lightgreen";
    else if (btn.textContent === selected) btn.style.backgroundColor = "lightcoral";
  });

  // Show next button
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  document.getElementById("next-btn").style.display = "none";
  if (current >= shuffled.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  // Hide quiz elements
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  // Show result
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.textContent = `Quiz finished! Your score is ${score}/${shuffled.length}`;

  // Save score to Firebase (if logged in)
  saveScore(score);

  // Show start button to restart
  document.getElementById("start-btn").style.display = "inline-block";
}

function saveScore(score) {
  const user = auth.currentUser;
  if (!user) {
    console.log("User not logged in. Score not saved.");
    return;
  }

  const scoreData = {
    score: score,
  timestamp: new Date().toLocaleString(), // e.g. "5/29/2025, 3:15:30 PM"
    quizLevel: 1
  };

  const userScoreRef = ref(database, "scores/" + user.uid);
  push(userScoreRef, scoreData)
    .then(() => {
      console.log("✅ Score saved successfully.");
    })
    .catch((error) => {
      console.error("❌ Error saving score:", error);
    });
}
// Expose functions globally for buttons
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
