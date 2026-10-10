const typingText = document.getElementById("personalTypingText");
const giftBtn = document.getElementById("giftBtn");

const letter = `Dear Gauri ❤️,

There are some things I have wanted to tell you for a long time, and I thought your birthday would be the right moment to finally say them.

You became a really important person in my life without me even realizing when it happened. From random conversations and stupid jokes to the little moments we shared, somehow all of it became special to me.

I know I'm not always the best at expressing what I feel. Sometimes I say things the wrong way, sometimes I overthink, and sometimes I probably make things more complicated than they need to be. But one thing I want you to know is that I have always genuinely cared about you and valued our friendship.

There is something about the vibe we share that I really like. I don't know exactly how to explain it, but talking to you and spending time with you has always felt really comfortable and special to me.

And okay... one funny thing I have noticed about myself. 😂❤️

Sometimes I get a tiny bit jealous when I see you talking to someone else. Nothing serious though... I guess you're just a little too special to me. 😭😂❤️

I really want us to go out sometime, have fun, laugh at stupid things, and make more memories together. And yes... I even want to argue with you sometimes, because somehow even our silly arguments become funny. 😂❤️

I really, really like having you in my life, Gauri. ❤️

Happy 18th Birthday! 🎂✨`;


let i = 0;


// ==========================================
// TYPING EFFECT
// ==========================================

function typeWriter() {

    if (i < letter.length) {

        typingText.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter, 30);

    } else {

        giftBtn.classList.remove("hidden");

    }

}

typeWriter();


// ==========================================
// GO TO GIFT
// ==========================================

giftBtn.addEventListener("click", () => {

    document.body.style.transition = "opacity 1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "gift.html";

    }, 1000);

});