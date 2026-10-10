
const countdown = document.getElementById("countdown");
const finalContent = document.getElementById("finalContent");
const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let number = 3;

// Animate each countdown number
const timer = setInterval(() => {
    countdown.textContent = number + "...";

    countdown.style.animation = "none";
    void countdown.offsetWidth;
    countdown.style.animation = "countdownPop 0.8s ease both";

    number--;

    if (number < 0) {
        clearInterval(timer);
        revealBirthday();
    }
}, 1000);


// Reveal the birthday celebration
function revealBirthday() {
    countdown.style.transition = "opacity 0.5s, transform 0.5s";
    countdown.style.opacity = "0";
    countdown.style.transform = "scale(1.5)";

    setTimeout(() => {
        countdown.classList.add("hidden");
        finalContent.classList.remove("hidden");

        launchFireworks();
        createSparkles();

        // Attempt background music
        birthdayMusic.play().then(() => {
            musicButton.textContent = "🎵 Birthday Music Playing";
        }).catch(() => {
            musicButton.textContent = "🎵 Play Birthday Music";
        });
    }, 500);
}


// Fireworks and confetti
function launchFireworks() {
    if (typeof confetti !== "function") return;

    let bursts = 0;

    const fireworks = setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 120,
            startVelocity: 40,
            origin: {
                x: 0.1 + Math.random() * 0.8,
                y: Math.random() * 0.45
            }
        });

        bursts++;

        // Stop after 8 bursts so it doesn't run forever
        if (bursts >= 8) {
            clearInterval(fireworks);
        }
    }, 700);
}


// Floating hearts and sparkles
function createSparkles() {
    const symbols = ["✨", "💖", "💕", "⭐", "🌸"];

    for (let i = 0; i < 24; i++) {
        setTimeout(() => {
            const sparkle = document.createElement("span");

            sparkle.className = "sparkle";
            sparkle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            sparkle.style.left = Math.random() * 95 + "vw";
            sparkle.style.top = (45 + Math.random() * 45) + "vh";
            sparkle.style.fontSize = (18 + Math.random() * 22) + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 2600);
        }, i * 150);
    }
}


// Music control button
musicButton.addEventListener("click", () => {
    if (birthdayMusic.paused) {
        birthdayMusic.play().then(() => {
            musicButton.textContent = "🎵 Birthday Music Playing";
        }).catch(() => {
            musicButton.textContent = "Tap to Play Music 🎵";
        });
    } else {
        birthdayMusic.pause();
        musicButton.textContent = "🎵 Play Birthday Music";
    }
});
