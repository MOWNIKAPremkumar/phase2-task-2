const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Making Language"],
         answer: 0
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>","<javascript>","<scripting>","<js>"],
        answer: 0
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["<head>section","<body>section","Both the <head>section and the <body>section are correct","none of the above"],
        answer: 2
    },
    {
        question: "Who is making the Web standards?",
        options: ["Microsoft", "Mozilla", "Google", "The World Wide Web Consortium"],
        answer: 3
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<head>", "<heading>", "<h1>", "<h6>"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElements = document.querySelectorAll('.option');
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElements.forEach((option, index) => {
        option.innerText = currentQuizData.options[index];
    });
   document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
      if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`;
}

loadQuestion();
