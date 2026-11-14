const startBtn = document.getElementById("startBtn");

const surprise = document.getElementById("surprise");
const gallery = document.getElementById("gallery");
const compliments = document.getElementById("compliments");
const secret = document.getElementById("secret");
const letter = document.getElementById("letter");
const footer = document.getElementById("footer");

const giftBox = document.getElementById("giftBox");
const giftInstruction = document.getElementById("giftInstruction");
const giftMessage = document.getElementById("giftMessage");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

const letterBtn = document.getElementById("letterBtn");
const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");


// CREATE BACKGROUND PARTICLES

function createParticles() {

    const container = document.getElementById("particles");

    const symbols = ["✨", "💗", "✦", "🌸", "♡", "🦋"];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (7 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            (Math.random() * 10) + "s";

        particle.style.fontSize =
            (12 + Math.random() * 15) + "px";

        container.appendChild(particle);

    }

}

createParticles();


// MUSIC PLAYER

async function playMusic() {

    try {

        await bgMusic.play();

        musicStatus.innerText = "Playing ♫";

        musicBtn.classList.add("playing");

    } catch (error) {

        musicStatus.innerText = "Tap To Play";

        console.error("Music playback failed:", error);

    }

}


// PLAY / PAUSE BUTTON

musicBtn.addEventListener("click", async function () {

    if (bgMusic.paused) {

        await playMusic();

    } else {

        bgMusic.pause();

        musicStatus.innerText = "Play Music";

        musicBtn.classList.remove("playing");

    }

});

bgMusic.addEventListener("pause", function () {

    musicStatus.innerText = "Play Music";

    musicBtn.classList.remove("playing");

});

bgMusic.addEventListener("play", function () {

    musicStatus.innerText = "Playing ♫";

    musicBtn.classList.add("playing");

});

bgMusic.addEventListener("error", function () {

    musicStatus.innerText = "Music Error";

    console.error("Check whether dii.mp3 exists in the folder.");

});


// START EXPERIENCE

startBtn.addEventListener("click", async function () {

    await playMusic();

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();

});


// GIFT OPENING

giftBox.addEventListener("click", function () {

    if (giftBox.classList.contains("open")) {
        return;
    }

    giftBox.classList.add("open");

    giftInstruction.classList.add("hidden");

    createHearts();

    setTimeout(function () {

        giftMessage.classList.remove("hidden");

        gallery.classList.remove("hidden");

        compliments.classList.remove("hidden");

        secret.classList.remove("hidden");

        letter.classList.remove("hidden");

        footer.classList.remove("hidden");

        setTimeout(function () {

            gallery.scrollIntoView({
                behavior: "smooth"
            });

        }, 1200);

    }, 1000);

});


// FLOATING HEARTS

function createHearts() {

    const symbols = ["💗", "💕", "❤️", "✨", "🌸", "🦋"];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 3 + Math.random() * 3;

        heart.animate([

            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },

            {
                transform: "translateY(-110vh) rotate(360deg)",
                opacity: 0
            }

        ], {

            duration: duration * 1000,

            easing: "ease-out"

        });

        setTimeout(function () {

            heart.remove();

        }, duration * 1000);

    }

}


// PHOTO LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(function (img) {

    img.addEventListener("click", function () {

        lightboxImage.src = img.src;

        lightbox.classList.remove("hidden");

    });

});

closeLightbox.addEventListener("click", function () {

    lightbox.classList.add("hidden");

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.add("hidden");

    }

});


// ESCAPE KEY FOR PHOTO VIEWER

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.add("hidden");

    }

});


// SECRET MESSAGE

secretBtn.addEventListener("click", function () {

    secretMessage.classList.remove("hidden");

    secretBtn.classList.add("hidden");

    createHearts();

});


// OPEN LETTER

letterBtn.addEventListener("click", function () {

    letterContent.classList.remove("hidden");

    envelope.classList.add("hidden");

    createHearts();

    letterContent.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// CHECK IMAGE LOADING

document.querySelectorAll("img").forEach(function (img) {

    img.addEventListener("error", function () {

        console.error("Image not found:", img.src);

    });

});


console.log("Sundari Diii Magical Experience Loaded ❤️");