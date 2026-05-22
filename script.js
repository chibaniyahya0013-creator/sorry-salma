const forgiveBtn = document.getElementById("forgiveBtn");
const surprise = document.getElementById("surprise");

forgiveBtn.addEventListener("click", () => {

    surprise.classList.remove("hidden");

    for(let i = 0; i < 40; i++){

        const heart = document.createElement("div");

        const emojis = [
            "💖",
            "💕",
            "🌸",
            "🎀",
            "🧸",
            "💗",
            "✨"
        ];

        heart.innerHTML =
            emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize =
            (20 + Math.random()*40) + "px";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform:"translateY(0px)" },
                { transform:"translateY(-120vh)" }
            ],
            {
                duration:3000 + Math.random()*2000,
                easing:"ease-out"
            }
        );

        setTimeout(()=>{
            heart.remove();
        },5000);
    }
});


const spamBtn =
document.getElementById("spamBtn");

const apologyRain =
document.getElementById("apologyRain");

spamBtn.addEventListener("click", () => {

    apologyRain.innerHTML = "";

    for(let i = 1; i <= 1000; i++){

        const line =
        document.createElement("div");

        line.classList.add("apology");

        line.innerHTML =
        `💖 ${i}. Semhi liya a Salma l3ziza 💖`;

        apologyRain.appendChild(line);
    }

    spamBtn.innerHTML =
    "🥺 1000 Apologies Delivered 🥺";
});