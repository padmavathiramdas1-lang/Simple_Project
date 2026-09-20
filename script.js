// ================================
// ROMANTIC BIRTHDAY WEBSITE
// JavaScript
// ================================


// ---------- SURPRISE BUTTON ----------

function showLove() {
    const surprise = document.getElementById("surprise");

    if (surprise) {
        surprise.classList.toggle("show");
    }

    createHeartExplosion();
}


// ---------- CREATE FLYING HEART ----------

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";

    const heartList = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "🌸"
    ];

    heart.textContent =
        heartList[Math.floor(Math.random() * heartList.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        4 + Math.random() * 5 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 9000);
}


// Create hearts continuously
setInterval(createHeart, 700);


// ---------- HEART EXPLOSION ----------

function createHeartExplosion() {

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            const heart = document.createElement("div");

            heart.className = "heart";
            heart.textContent = "❤️";

            heart.style.left = "50vw";
            heart.style.bottom = "50vh";

            heart.style.fontSize =
                20 + Math.random() * 30 + "px";

            heart.style.animationDuration =
                2 + Math.random() * 2 + "s";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 4000);

        }, i * 60);
    }
}


// ---------- MUSIC ----------

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const musicButton =
        document.querySelector(".music-button");

    if (!music) {
        return;
    }

    if (!musicPlaying) {

        music.play()
            .then(function () {

                musicPlaying = true;

                if (musicButton) {
                    musicButton.textContent = "⏸️";
                }

            })
            .catch(function (error) {

                console.log(
                    "Music could not be played:",
                    error
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        if (musicButton) {
            musicButton.textContent = "🎵";
        }
    }
}


// ---------- CLICK HEART EFFECT ----------

document.addEventListener("click", function (event) {

    // Don't create extra hearts when clicking buttons/photos
    if (
        event.target.closest("button") ||
        event.target.closest(".photo")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.textContent = "💗";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    const animation = heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-100px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );

    animation.onfinish = function () {
        heart.remove();
    };
});

function openMemoryVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("memoryVideo");

    modal.style.display = "flex";
    video.play();
}

function closeMemoryVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("memoryVideo");

    video.pause();
    video.currentTime = 0;
    modal.style.display = "none";
}

// Close when clicking outside the video
window.addEventListener("click", function (event) {
    const modal = document.getElementById("videoModal");

    if (event.target === modal) {
        closeMemoryVideo();
    }
});