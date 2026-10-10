
const giftImage = document.getElementById("giftImage");
const openGiftBtn = document.getElementById("openGiftBtn");
const giftText = document.getElementById("giftText");
const surprise = document.getElementById("surprise");
const finalBtn = document.getElementById("finalBtn");

let giftOpened = false;


// ==========================================
// OPEN THE GIFT
// ==========================================

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    // Shake the gift before opening
    giftImage.classList.add("shake");

    openGiftBtn.disabled = true;

    setTimeout(() => {

        // Hide the gift and its instruction
        giftImage.classList.add("hidden");
        openGiftBtn.classList.add("hidden");
        giftText.classList.add("hidden");

        // Reveal the birthday message
        surprise.classList.remove("hidden");

        // Celebration confetti
        if (typeof confetti === "function") {

            confetti({
                particleCount: 180,
                spread: 110,
                origin: {
                    x: 0.5,
                    y: 0.6
                }
            });

            setTimeout(() => {

                confetti({
                    particleCount: 100,
                    spread: 140,
                    origin: {
                        x: 0.15,
                        y: 0.6
                    }
                });

                confetti({
                    particleCount: 100,
                    spread: 140,
                    origin: {
                        x: 0.85,
                        y: 0.6
                    }
                });

            }, 500);
        }

    }, 700);
}


// Click the gift image
giftImage.addEventListener("click", openGift);


// Click the open gift button
openGiftBtn.addEventListener("click", openGift);


// Allow keyboard activation
giftImage.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();
        openGift();

    }

});


// ==========================================
// GO TO THE FINAL PAGE
// ==========================================

finalBtn.addEventListener("click", () => {

    if (typeof confetti === "function") {

        confetti({
            particleCount: 250,
            spread: 160,
            origin: {
                x: 0.5,
                y: 0.5
            }
        });

    }

    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "final.html";

    }, 1000);

});
