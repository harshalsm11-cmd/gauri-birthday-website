const typingText = document.getElementById("typingText");
const nextBtn = document.getElementById("nextBtn");

const letter = `Dear Gauri ❤️,

Happy Birthday! 🥳🎂

I never thought that we would become such close friends. Looking back, I'm really grateful that life gave me a friend like you.

I don't know if words can truly express how thankful I am to have you in my life. Talking to you always made me feel happy, and no matter what was happening around me, our conversations could always make my day better.

Yes, sometimes we fought, and sometimes we disagreed, but through it all you never let me down. Every conversation, every laugh, every silly joke, and every moment we spent together has become a beautiful memory that I will always cherish.

You're one of the most caring and thoughtful people I've ever met. You have a way of making everyone around you feel comfortable, and that's something really special about you.

And yes... you're truly gorgeous, but what makes you even more beautiful is your smile. It has a way of brightening every moment and making the people around you smile too.

Every conversation, every laugh, and every little memory we've shared has a special place in my heart. Being around you has always made ordinary moments feel extraordinary.

Once again...

🎂 Happy Birthday, Gauri! ❤️`;


let i = 0;


// TYPING EFFECT

function typeWriter() {

    if (i < letter.length) {

        typingText.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    } else {

        // Show button when letter is finished
        nextBtn.classList.remove("hidden");

    }

}

typeWriter();


// GO TO MEMORIES

nextBtn.addEventListener("click", function() {

    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(function() {

        window.location.href = "memories.html";

    }, 1000);

});