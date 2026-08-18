"use strict";

/* =========================================================
   BIRTHDAY WEBSITE
   NIKITA + MONIKA
   ========================================================= */


/* =========================================================
   PROFILE DATA
   ========================================================= */

const profiles = {

    /* =====================================================
       NIKITA
       20 PHOTOS + 2 VIDEOS = 22 MEMORIES
       FINAL VIDEO IS SEPARATE
       ===================================================== */

    nikita: {

        name: "Nikita",

        password: "CatNik",

        welcomeSubtitle:
            "Today is all about you.",

        letter: `Dear Nikita,


“Kuch log milte hain,
aur kuch yaad reh jaate hain.”

Tere saath ki chhoti-chhoti memories
unhi yaadon mein se hain.

No big words, no long wishes —
bas itna ki
zindagi hamesha tujhe
muskurane ki koi na koi wajah deti rahe.

Stay the same.

Happy Birthday, Nikita. 🎂❤️`,

        memories: [

            {
                type: "image",
                src: "./assets/Nikita/01.jpeg",
                caption: "A memory worth keeping."
            },

            {
                type: "image",
                src: "./assets/Nikita/02.jpeg",
                caption: "One of those good moments."
            },

            {
                type: "image",
                src: "./assets/Nikita/03.jpeg",
                caption: "A moment worth remembering."
            },

            {
                type: "image",
                src: "./assets/Nikita/04.jpeg",
                caption: "Some memories just stay."
            },

            {
                type: "image",
                src: "./assets/Nikita/05.jpeg",
                caption: "A little moment, a lot of memories."
            },

            {
                type: "image",
                src: "./assets/Nikita/06.jpeg",
                caption: "Another one for the memories."
            },

            {
                type: "image",
                src: "./assets/Nikita/07.jpeg",
                caption: "Just one of those days."
            },

            {
                type: "image",
                src: "./assets/Nikita/08.jpeg",
                caption: "A memory worth keeping."
            },

            {
                type: "image",
                src: "./assets/Nikita/09.jpeg",
                caption: "Good times, good memories."
            },

            {
                type: "image",
                src: "./assets/Nikita/10.jpeg",
                caption: "Another chapter to remember."
            },

            {
                type: "image",
                src: "./assets/Nikita/11.jpeg",
                caption: "And one more memory."
            },

            {
                type: "image",
                src: "./assets/Nikita/12.jpeg",
                caption: "Another beautiful memory."
            },

            {
                type: "image",
                src: "./assets/Nikita/13.jpeg",
                caption: "A moment to remember."
            },

            {
                type: "image",
                src: "./assets/Nikita/14.jpeg",
                caption: "One more for the collection."
            },

            {
                type: "image",
                src: "./assets/Nikita/15.jpeg",
                caption: "Some moments are unforgettable."
            },

            {
                type: "image",
                src: "./assets/Nikita/16.jpeg",
                caption: "A little piece of the memories."
            },

            {
                type: "image",
                src: "./assets/Nikita/17.jpeg",
                caption: "Another moment worth saving."
            },

            {
                type: "image",
                src: "./assets/Nikita/18.jpeg",
                caption: "Good memories never get old."
            },

            {
                type: "image",
                src: "./assets/Nikita/19.jpeg",
                caption: "One last photo memory."
            },

            {
                type: "image",
                src: "./assets/Nikita/20.jpeg",
                caption: "Twenty memories and counting."
            },

            {
                type: "video",
                src: "./assets/Nikita/21.mp4",
                caption: "And one moving memory."
            },

            {
                type: "video",
                src: "./assets/Nikita/22.mp4",
                caption: "Another moving memory."
            }

        ],

        finalMessage: `Some people become a part of your life
without even trying.

And somehow, you became one of those people. ❤️`,

        /* IMPORTANT:
           THIS VIDEO IS NOT PART OF MEMORIES */
        video: "./assets/final.mp4",

        signature: "Mansi"
    },


    /* =====================================================
       MONIKA
       3 PHOTOS + 3 VIDEOS = 6 MEMORIES
       FINAL VIDEO IS SEPARATE
       ===================================================== */

    monika: {

        name: "Monika",

        password: "YashPaglu",

        welcomeSubtitle:
            "A little surprise, made just for you.",

        letter: `Dear Monika,


“Kuch pal bas pal nahi hote,
woh baad mein yaad ban jaate hain.”

Tere saath ke bhi
kuch aise hi pal hain —
simple, random,
par yaad reh jaane wale.

Zyada kuch nahi kehna,
bas itni si wish hai —

har naya din kuch achha laaye,
har khushi thodi aur kareeb aaye,
aur tere chehre ki ye smile
yunhi bani rahe.

Baaki,
aisi hi rehna.

Happy Birthday, Monika. 🎂❤️`,

        memories: [

            {
                type: "image",
                src: "./assets/Monika/01.jpeg",
                caption: "A memory from the good times."
            },

            {
                type: "image",
                src: "./assets/Monika/02.jpeg",
                caption: "One frame, one story."
            },

            {
                type: "image",
                src: "./assets/Monika/03.jpeg",
                caption: "The kind of moment you remember later."
            },

            {
                type: "video",
                src: "./assets/Monika/04.mp4",
                caption: "Just another memory worth saving."
            },

            {
                type: "video",
                src: "./assets/Monika/05.mp4",
                caption: "Another little chapter."
            },

            {
                type: "video",
                src: "./assets/Monika/06.mp4",
                caption: "Some moments don't need a reason."
            }

        ],

        finalMessage: `Life becomes better
when the right people become part of it.

I'm glad you are one of them. ❤️`,

        /* IMPORTANT:
           THIS VIDEO IS NOT PART OF MEMORIES */
        video: "./assets/final.mp4",

        signature: "Mansi"
    }

};


/* =========================================================
   APP STATE
   ========================================================= */

let currentProfile = null;

const state = {
    memoryIndex: 0,
    unlocked: false
};


/* =========================================================
   ELEMENTS
   ========================================================= */

const landingScreen =
    document.getElementById("landing-screen");

const passwordScreen =
    document.getElementById("password-screen");

const welcomeScreen =
    document.getElementById("welcome-screen");

const memoriesScreen =
    document.getElementById("memories-screen");

const finalScreen =
    document.getElementById("final-screen");


const enterButton =
    document.getElementById("enter-button");

const passwordForm =
    document.getElementById("password-form");

const passwordInput =
    document.getElementById("password-input");

const passwordToggle =
    document.getElementById("password-toggle");

const passwordError =
    document.getElementById("password-error");


const welcomeTitle =
    document.getElementById("welcome-title");

const welcomeSubtitle =
    document.getElementById("welcome-subtitle");

const letterCard =
    document.getElementById("letter-card");

const letterContent =
    document.getElementById("letter-content");

const letterSignature =
    document.getElementById("letter-signature");

const memoriesButton =
    document.getElementById("memories-button");


const memoriesHomeButton =
    document.getElementById("memories-home-button");

const lockButton =
    document.getElementById("lock-button");

const mediaFrame =
    document.querySelector(".media-frame");

const mediaContainer =
    document.getElementById("media-container");

const currentMediaNumber =
    document.getElementById("current-media-number");

const totalMediaNumber =
    document.getElementById("total-media-number");

const previousButton =
    document.getElementById("previous-button");

const nextButton =
    document.getElementById("next-button");

const mediaCaption =
    document.getElementById("media-caption");

const fullscreenButton =
    document.getElementById("fullscreen-button");


const finalName =
    document.getElementById("final-name");

const finalMessage =
    document.getElementById("final-message");

const finalVideo =
    document.getElementById("final-video");

const finalVideoSource =
    document.getElementById("final-video-source");

const finalSignature =
    document.getElementById("final-signature");

const finalHomeButton =
    document.getElementById("final-home-button");

const finalRevealButton =
    document.getElementById("final-reveal-button");


/* =========================================================
   SHOW SCREEN
   ========================================================= */

function showScreen(screen) {

    const screens = [
        landingScreen,
        passwordScreen,
        welcomeScreen,
        memoriesScreen,
        finalScreen
    ];

    screens.forEach(function (item) {

        if (item) {
            item.hidden = true;
        }

    });

    if (screen) {
        screen.hidden = false;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   ENTER BUTTON
   ========================================================= */

if (enterButton) {

    enterButton.addEventListener(
        "click",
        function () {

            showScreen(passwordScreen);

            if (passwordInput) {
                passwordInput.value = "";
            }

            if (passwordError) {
                passwordError.hidden = true;
            }

            if (passwordInput) {
                passwordInput.type = "password";
            }

            if (passwordToggle) {
                passwordToggle.textContent = "Show";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );
            }

            setTimeout(function () {

                if (passwordInput) {
                    passwordInput.focus();
                }

            }, 100);

        }
    );

}


/* =========================================================
   PASSWORD TOGGLE
   ========================================================= */

if (passwordToggle && passwordInput) {

    passwordToggle.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type === "password"
            ) {

                passwordInput.type = "text";

                passwordToggle.textContent = "Hide";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                passwordInput.type = "password";

                passwordToggle.textContent = "Show";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

if (passwordForm) {

    passwordForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const password =
                passwordInput.value.trim();


            if (!password) {

                passwordError.textContent =
                    "Please enter your password.";

                passwordError.hidden = false;

                return;
            }


            const profile =
                Object.values(profiles).find(
                    function (item) {

                        return item.password === password;

                    }
                );


            if (!profile) {

                passwordError.textContent =
                    "That doesn't seem right. Try again.";

                passwordError.hidden = false;

                passwordInput.select();

                return;
            }


            currentProfile = profile;

            state.unlocked = true;

            state.memoryIndex = 0;

            passwordError.hidden = true;

            openWelcome();

        }
    );

}


/* =========================================================
   WELCOME
   ========================================================= */

function openWelcome() {

    if (!currentProfile) {
        return;
    }


    welcomeTitle.textContent =
        "WELCOME, " +
        currentProfile.name.toUpperCase();


    welcomeSubtitle.textContent =
        currentProfile.welcomeSubtitle;


    letterContent.textContent =
        currentProfile.letter;


    letterSignature.textContent =
        "— " +
        currentProfile.signature;


    if (letterCard) {
        letterCard.hidden = false;
    }


    showScreen(welcomeScreen);

}


/* =========================================================
   OPEN MEMORIES
   ========================================================= */

if (memoriesButton) {

    memoriesButton.addEventListener(
        "click",
        function () {

            if (!currentProfile) {
                return;
            }

            state.memoryIndex = 0;

            showScreen(memoriesScreen);

            renderMemory();

        }
    );

}


/* =========================================================
   RENDER MEMORY
   ========================================================= */

function renderMemory() {

    if (!currentProfile) {
        return;
    }


    const memories =
        currentProfile.memories;


    const total =
        memories.length;


    mediaContainer.innerHTML = "";


    totalMediaNumber.textContent =
        String(total).padStart(2, "0");


    if (total === 0) {

        currentMediaNumber.textContent =
            "00";

        mediaCaption.textContent =
            "No memories available.";

        previousButton.disabled = true;

        nextButton.disabled = true;

        fullscreenButton.disabled = true;

        return;
    }


    if (state.memoryIndex >= total) {
        state.memoryIndex = 0;
    }


    if (state.memoryIndex < 0) {
        state.memoryIndex = total - 1;
    }


    const memory =
        memories[state.memoryIndex];


    currentMediaNumber.textContent =
        String(
            state.memoryIndex + 1
        ).padStart(2, "0");


    mediaCaption.textContent =
        memory.caption || "";


    fullscreenButton.disabled = false;


    /* =====================================================
       IMAGE
       ===================================================== */

    if (memory.type === "image") {

        const image =
            document.createElement("img");


        image.src =
            memory.src;


        image.alt =
            memory.caption ||
            "Memory";


        image.loading = "eager";


        image.onerror =
            function () {

                mediaContainer.innerHTML = "";

                mediaCaption.textContent =
                    "Image not found: " +
                    memory.src;

                fullscreenButton.disabled = true;

            };


        mediaContainer.appendChild(image);

    }


    /* =====================================================
       VIDEO
       ===================================================== */

    else if (memory.type === "video") {

        const video =
            document.createElement("video");


        video.src =
            memory.src;


        video.controls = true;


        video.playsInline = true;


        video.preload = "metadata";


        video.onerror =
            function () {

                mediaContainer.innerHTML = "";

                mediaCaption.textContent =
                    "Video not found: " +
                    memory.src;

                fullscreenButton.disabled = true;

            };


        mediaContainer.appendChild(video);

    }


    previousButton.disabled =
        total <= 1;


    nextButton.disabled =
        total <= 1;

}


/* =========================================================
   NEXT MEMORY
   ========================================================= */

function nextMemory() {

    if (!currentProfile) {
        return;
    }


    const total =
        currentProfile.memories.length;


    if (!total) {
        return;
    }


    state.memoryIndex =
        (state.memoryIndex + 1) % total;


    renderMemory();

}


/* =========================================================
   PREVIOUS MEMORY
   ========================================================= */

function previousMemory() {

    if (!currentProfile) {
        return;
    }


    const total =
        currentProfile.memories.length;


    if (!total) {
        return;
    }


    state.memoryIndex =
        (
            state.memoryIndex -
            1 +
            total
        ) % total;


    renderMemory();

}


if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextMemory
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousMemory
    );

}


/* =========================================================
   SWIPE
   ========================================================= */

let touchStartX = 0;

let touchStartY = 0;


if (mediaFrame) {

    mediaFrame.addEventListener(
        "touchstart",
        function (event) {

            const touch =
                event.touches[0];


            touchStartX =
                touch.clientX;


            touchStartY =
                touch.clientY;

        },
        {
            passive: true
        }
    );


    mediaFrame.addEventListener(
        "touchend",
        function (event) {

            const touch =
                event.changedTouches[0];


            const endX =
                touch.clientX;


            const endY =
                touch.clientY;


            const diffX =
                endX - touchStartX;


            const diffY =
                endY - touchStartY;


            if (
                Math.abs(diffY) >
                Math.abs(diffX)
            ) {
                return;
            }


            if (
                Math.abs(diffX) < 50
            ) {
                return;
            }


            if (diffX < 0) {

                nextMemory();

            } else {

                previousMemory();

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !state.unlocked ||
            !memoriesScreen ||
            memoriesScreen.hidden
        ) {
            return;
        }


        if (event.key === "ArrowRight") {
            nextMemory();
        }


        if (event.key === "ArrowLeft") {
            previousMemory();
        }

    }
);


/* =========================================================
   FULLSCREEN
   ========================================================= */

if (fullscreenButton && mediaFrame) {

    fullscreenButton.addEventListener(
        "click",
        async function () {

            try {

                if (!document.fullscreenElement) {

                    await mediaFrame.requestFullscreen();

                } else {

                    await document.exitFullscreen();

                }

            } catch (error) {

                console.log(
                    "Fullscreen unavailable.",
                    error
                );

            }

        }
    );

}


/* =========================================================
   MEMORIES HOME
   ========================================================= */

if (memoriesHomeButton) {

    memoriesHomeButton.addEventListener(
        "click",
        function () {

            if (
                document.fullscreenElement
            ) {

                document.exitFullscreen();

            }


            showScreen(welcomeScreen);

        }
    );

}


/* =========================================================
   LOCK
   ========================================================= */

if (lockButton) {

    lockButton.addEventListener(
        "click",
        function () {

            if (
                document.fullscreenElement
            ) {

                document.exitFullscreen();

            }


            currentProfile = null;


            state.unlocked = false;


            state.memoryIndex = 0;


            showScreen(passwordScreen);


            if (passwordInput) {
                passwordInput.value = "";
            }


            if (passwordError) {
                passwordError.hidden = true;
            }


            if (passwordInput) {
                passwordInput.type = "password";
            }


            if (passwordToggle) {

                passwordToggle.textContent =
                    "Show";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

}


/* =========================================================
   FINAL REVEAL
   ========================================================= */

if (finalRevealButton) {

    finalRevealButton.addEventListener(
        "click",
        function () {

            if (!currentProfile) {
                return;
            }


            finalName.textContent =
                currentProfile.name.toUpperCase();


            finalMessage.textContent =
                currentProfile.finalMessage;


            finalSignature.textContent =
                "— " +
                currentProfile.signature;


            /* =================================================
               FINAL VIDEO
               IMPORTANT:
               THIS IS SEPARATE FROM MEMORY VIDEOS
               ================================================= */

            if (finalVideo) {

                finalVideo.pause();


                finalVideo.src =
                    currentProfile.video;


                if (finalVideoSource) {

                    finalVideoSource.src =
                        currentProfile.video;

                }


                finalVideo.load();

            }


            showScreen(finalScreen);

        }
    );

}


/* =========================================================
   FINAL HOME
   ========================================================= */

if (finalHomeButton) {

    finalHomeButton.addEventListener(
        "click",
        function () {

            if (finalVideo) {

                finalVideo.pause();

            }


            showScreen(welcomeScreen);

        }
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function init() {

    currentProfile = null;

    state.unlocked = false;

    state.memoryIndex = 0;

    showScreen(landingScreen);

}


init();