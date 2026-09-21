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

            console.log(
                "Image not found:",
                image.getAttribute("src")
            );

        });

    });

});
