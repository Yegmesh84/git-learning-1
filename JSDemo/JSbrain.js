const quizData = [
  {
    question: "What is 7+7?",
    options: ["11", "21", "16", "14"],
    answer: 3,
  },
  {
    question: "What is 9+7?",
    options: ["13", "17", "16", "14"],
    answer: 2,
  },
  {
    question: "What is 7-4?",
    options: ["11", "5", "1", "3"],
    answer: 3,
  },
  {
    question: "What is 11-17?",
    options: ["10", "-4", "-6", "28"],
    answer: 2,
  },
  {
    question: "What is 9x2?",
    options: ["18", "11", "7", "16"],
    answer: 0,
  },
  {
    question: "What is 4/4?",
    options: ["1", "16", "8", "0"],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {

    answered = false;

    const currentQuestion = quizData[currentQuestionIndex];

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;

        button.addEventListener("click", () => selectOption(index));

        optionsContainer.appendChild(button);
  });
}

function selectOption(index) {
  if (answered) return;

    answered = true;

    const correctAnswer = quizData[currentQuestionIndex].answer;
    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, i) => {
        if (i === correctAnswer) {
        button.style.backgroundColor = "green";
        } else {
        button.style.backgroundColor = "red";
        }

        button.disabled = true;
    });

    if (index === correctAnswer) {
        score++;
  }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    scoreContainer.classList.remove("hidden");

    scoreDisplay.textContent = `${score} / ${quizData.length}`;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
  }
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;

    shuffleArray(quizData);

    questionContainer.style.display = "block";
    optionsContainer.style.display = "block";
    nextButton.style.display = "block";

    scoreContainer.classList.add("hidden");

    loadQuestion();
});

shuffleArray(quizData);
loadQuestion();