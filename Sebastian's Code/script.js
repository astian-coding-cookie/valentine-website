const phrases = [
    "Pretty please?",
    "Come on now!",
    "You sure?",
    "Last chance!",
    "Ayyy, mang luod nako 😒",
    "Gina baby pleaseee 🥺",
    "Ka bad nimo baby uy",
    "Sige pislita pa",
    "Luhhh ☹️",
    "Baby yess na please 😭",
    "Mag takoyaki bitaw ta hehe",
    "Ashleyy... 1...",
    "2...",
    "3...",
    "Ayyy, gahi ohhh hehehe"
];

let currentPhrase = 0;

document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yess!!! I love you baby <3</h1>
            <img src="https://media.giphy.com/media/h7gaAxIR8OCwi1pTJA/giphy.gif?cid=790b7611ew1l0z1p41de4omtuwmg2vjb3fc2hreaksyzkc97&ep=v1_gifs_search&rid=giphy.gif&ct=g">
        </div>
    `;
    document.body.style.background = "#ffe6f0";
});

document.getElementById("noBtn").addEventListener("click", function() {
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let mainGif = document.getElementById("mainGif");

    // Grow the Yes button
    let currentYesSize = window.getComputedStyle(yesBtn).fontSize;
    let newYesSize = parseFloat(currentYesSize) + 2;
    yesBtn.style.fontSize = newYesSize + 'px';

    // Shrink the No button
    let currentNoSize = window.getComputedStyle(noBtn).fontSize;
    let newNoSize = parseFloat(currentNoSize) - 2;
    noBtn.style.fontSize = newNoSize + 'px';

    // Change No button text
    if (currentPhrase < phrases.length - 1) {
        currentPhrase++;
        noBtn.innerText = phrases[currentPhrase];
    } else {
        noBtn.style.display = 'none';
    }

    // Change the main GIF to a sad kitten GIF
    mainGif.src = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
});