const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");
const continueBtn = document.getElementById("continueBtn");
const caption = document.getElementById("caption");

const photos = [
    "photos/photo1.jpeg",
    "photos/photo2.jpeg",
    "photos/photo3.jpeg",
    "photos/photo4.jpeg",
    "photos/photo5.jpeg",
    "photos/photo6.jpeg",
    "photos/photo7.jpeg",
    "photos/photo8.jpeg",
    "photos/photo9.jpeg",
    "photos/photo10.jpeg",
    "photos/photo11.jpeg",
    "photos/photo12.jpeg",
    "photos/photo13.jpeg"
];

const captions = [
    "Every picture tells a beautiful story... ❤️",
    "A little memory worth keeping forever. 🥹❤️",
    "One picture, so many memories. 💖",
    "Good times and beautiful moments. 🫶",
    "This moment will always be special. ❤️",
    "Some memories just make you smile. 😊💕",
    "A beautiful moment from our journey. 📸❤️",
    "The kind of memory you never forget. 🥹",
    "Smiles, laughs and good memories. 😂❤️",
    "Another little moment to remember. 💗",
    "Memories that will always have a special place. ❤️",
    "More memories, more smiles. 🫶💖",
    "And many more memories to come... ❤️"
];

let index = 0;


// ==========================================
// SHOW CONTINUE BUTTON
// ==========================================

continueBtn.classList.remove("hidden");


// ==========================================
// SLIDESHOW
// ==========================================

setInterval(() => {

    slide.style.opacity = "0";

    setTimeout(() => {

        index++;

        if (index >= photos.length) {
            index = 0;
        }

        slide.src = photos[index];

        caption.innerHTML = captions[index];

        slide.style.opacity = "1";


        // Update dots

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        dots[index].classList.add("active");

    }, 400);

}, 3000);


// ==========================================
// CONTINUE
// ==========================================

continueBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "celebrate.html";

    }, 1000);

});