const giftBtn = document.getElementById("giftBtn");


// ==========================================
// CONTINUOUS CELEBRATION CONFETTI
// ==========================================

function celebrate() {

    confetti({
        particleCount: 100,
        spread: 90,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.5
        }
    });

}


// Start celebration

celebrate();

setInterval(() => {

    celebrate();

}, 2500);


// ==========================================
// OPEN GIFT
// ==========================================

giftBtn.addEventListener("click", () => {

    confetti({
        particleCount: 250,
        spread: 150,
        origin: {
            x: 0.5,
            y: 0.5
        }
    });

    document.body.style.transition = "opacity 1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "personalletter.html";

    }, 1000);

}); 