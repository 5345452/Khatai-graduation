/* =========================================
   KHATAI GRADUATION WEBSITE
========================================= */
console.log("KHATAI SCRIPT IS WORKING");

document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const musicButton = document.getElementById("musicButton");
    const musicText = document.getElementById("musicText");
    const backgroundMusic = document.getElementById("backgroundMusic");


    /* =====================================
       CINEMATIC INTRO
    ====================================== */

    setTimeout(function () {

        if (intro) {
            intro.classList.add("hide");
        }

        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

    }, 5200);


    /* =====================================
       MUSIC
    ====================================== */

    let musicPlaying = false;

    if (musicButton && backgroundMusic) {

        musicButton.addEventListener("click", function () {

            if (!musicPlaying) {

                backgroundMusic.play();

                if (musicText) {
                    musicText.textContent = "MUSIC PLAYING";
                }

                musicButton.classList.add("playing");

                musicPlaying = true;

            } else {

                backgroundMusic.pause();

                if (musicText) {
                    musicText.textContent = "PLAY EXPERIENCE";
                }

                musicButton.classList.remove("playing");

                musicPlaying = false;

            }

        });

    }


    /* =====================================
       IMAGE CHECK
    ====================================== */

       document.querySelectorAll("img").forEach(function (image) {
        image.addEventListener("error", function () {
            console.log("Image not found:", image.getAttribute("src"));
        });
    });


    /* =========================================
       GRADUATION COUNTDOWN
    ========================================= */

    const graduationDate = new Date(
        "2026-11-27T08:30:00+03:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = graduationDate - now;


        if (difference <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");
    }


    updateCountdown();

    setInterval(updateCountdown, 1000);

});
