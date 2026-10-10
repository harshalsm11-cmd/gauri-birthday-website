// ==========================================
// MINI QUIZ
// ==========================================

const quizQuestion = document.getElementById("quizQuestion");
const quizResult = document.getElementById("quizResult");
const optionBtns = document.querySelectorAll(".optionBtn");

const quiz = document.getElementById("quiz");
const nextQuestion = document.getElementById("nextQuestion");


// ==========================================
// QUESTIONS
// ==========================================

const questions = [

    {
        question: "What is Gauri's favorite food? 🍛❤️",

        options: [
            "Pizza 🍕",
            "Biryani 🥘",
            "Pasta 🍝",
            "Chinese 🥡"
        ],

        answer: 1
    },


    {
        question: "What is Gauri's favorite color? 🎨❤️",

        options: [
            "Pink 💗",
            "Black 🖤",
            "Blue 💙",
            "Purple 💜"
        ],

        answer: 0
    },


    {
        question: "What does Gauri like more? 😴❤️",

        options: [
            "Movies 🎬",
            "Music 🎵",
            "Travelling ✈️",
            "Sleeping 😴"
        ],

        answer: 3
    },


    {
        question: "What is something Gauri can never say no to? 😋❤️",

        options: [
            "Food 🍕",
            "Shopping 🛍️",
            "Sleep 😴",
            "Her favourite person — Harshal 😜❤️"
        ],

        answer: 3
    },


    {
        question: "What does Harshal like most about Gauri? ❤️",

        options: [
            "Her eyes 👀❤️",
            "Her talent ✨❤️",
            "Her confidence 💖",
            "All of them 🥹❤️"
        ],

        answer: 3
    }

];


let currentQuestion = 0;


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    quizQuestion.innerHTML =
        questions[currentQuestion].question;

    optionBtns.forEach((button, index) => {

        button.innerHTML =
            questions[currentQuestion].options[index];

        button.disabled = false;

    });

    quizResult.innerHTML = "";

}


// Start quiz
loadQuestion();


// ==========================================
// ANSWER
// ==========================================

optionBtns.forEach((button, index) => {

    button.addEventListener("click", () => {

        // Correct answer
        if (index === questions[currentQuestion].answer) {

            quizResult.innerHTML =
                "🎉 Correct! You really know yourself! ❤️";

            // Confetti
            confetti({
                particleCount: 150,
                spread: 100,
                origin: {
                    x: 0.5,
                    y: 0.5
                }
            });

            // Disable buttons temporarily
            optionBtns.forEach(btn => {
                btn.disabled = true;
            });

            currentQuestion++;

            // Next question
            if (currentQuestion < questions.length) {

                setTimeout(() => {

                    loadQuestion();

                }, 1000);

            }

            // Quiz finished
            else {

                setTimeout(() => {

                    quiz.innerHTML = `

                        <h2 class="question">
                            🎉 You Got All 5 Correct! 🎉
                        </h2>

                        <p class="questionText">
                            Okayyy Gauri... you really know yourself! 😂❤️
                            <br><br>
                            Maybe Harshal knows you pretty well too. 🥹❤️
                        </p>

                    `;

                    setTimeout(() => {

                        nextQuestion.classList.remove("hidden");

                    }, 800);

                }, 1000);

            }

        }

        // Wrong answer
        else {

            quizResult.innerHTML =
                "😝 Nope! Try again! ❤️";

        }

    });

});


// ==========================================
// YES / NO QUESTION
// ==========================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gameArea = document.querySelector(".buttons");


// ==========================================
// NO BUTTON RUNS AWAY
// ==========================================

function moveNoButton() {

    const maxX =
        gameArea.clientWidth - noBtn.offsetWidth;

    const maxY =
        gameArea.clientHeight - noBtn.offsetHeight;

    let newX;
    let newY;

    do {

        newX = Math.random() * maxX;
        newY = Math.random() * maxY;

    } while (
        newX < 180 &&
        newY > 20 &&
        newY < 170
    );

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";

}


// Desktop
noBtn.addEventListener("mouseover", moveNoButton);


// Mobile
noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveNoButton();

});


// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener("click", () => {

    // Big confetti
    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            confetti({

                particleCount: 150,

                spread: 120,

                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }

            });

        }, i * 150);

    }

    // Fade out
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    // Go to long letter
    setTimeout(() => {

        window.location.href = "longletter.html";

    }, 1000);

});