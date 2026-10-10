const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", ()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        window.location.href="letter.html";

    },900);

});