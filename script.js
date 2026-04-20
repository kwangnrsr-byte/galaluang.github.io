// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

let clickCount = 0;

noBtn.addEventListener("click", () => {
    clickCount++;

    const rect = noBtn.getBoundingClientRect();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const distance = Math.min(screenWidth, screenHeight) * 0.3;
    const angle = Math.random() * Math.PI * 2;

    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    // 👇 ตำแหน่งใหม่ (จากตำแหน่งปัจจุบัน)
    let newX = rect.left + moveX;
    let newY = rect.top + moveY;

    // 👇 กันหลุดจอ (ขอบซ้าย/ขวา)
    if (newX < 0) newX = 0;
    if (newX + rect.width > screenWidth) {
        newX = screenWidth - rect.width;
    }

    // 👇 กันหลุดจอ (บน/ล่าง)
    if (newY < 0) newY = 0;
    if (newY + rect.height > screenHeight) {
        newY = screenHeight - rect.height;
    }

    // 👇 แปลงกลับเป็น translate
    const finalX = newX - rect.left;
    const finalY = newY - rect.top;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${finalX}px, ${finalY}px)`;

    if (clickCount === 5) {
        catImg.src = "sad.gif";
    }
});
// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    const song = document.getElementById("loveSong");
song.volume = 0;
song.play();

let vol = 0;
const fade = setInterval(() => {
    if (vol < 1) {
        vol += 0.05;
        song.volume = vol;
    } else {
        clearInterval(fade);
    }
}, 200);


});