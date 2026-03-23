let questions = document.querySelector("#question");
let options = document.querySelector(".options");
let nextBtn = document.querySelector("#nextBtn");
let scoreSection = document.querySelector("#score");

const quizQuestions = [
  {
    question: "Who is the PM of India?",
    options: [
      "Rahul Gandhi",
      "Narendra Modi",
      "Sonia Gandhi",
      "Manmohan Singh",
    ],
    answer: "Narendra Modi",
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false; //abhi question ka answer nahi dia gya hai to false hai
/* 
questions.innerHTML = quizQuestions[currentQuestion].question;

options.innerHTML = ""; */

function showQuestion() {
    if(answered){
        return;
    }
  questions.innerHTML = quizQuestions[currentQuestion].question;

  options.innerHTML = "";

  for (const option of quizQuestions[currentQuestion].options) {
    let btn = document.createElement("button");

    btn.textContent = option;

    options.appendChild(btn);

    btn.addEventListener("click", function () {
      const allBtns = options.children;

      for (let b of allBtns) {
        b.disabled = true;
      }
      btn.style.backgroundColor = "green";
      if (option === quizQuestions[currentQuestion].answer) {
        score++;
      }
    });
  }
}

showQuestion();

nextBtn.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    questions.textContent = "quiz finished";
    scoreSection.textContent = `Total score: ${score}`;
    options.innerHTML = "";
    nextBtn.textContent = "OK";
  }
});
