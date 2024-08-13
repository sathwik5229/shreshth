// script.js

let noCount = 0;
let responses = [
    "Yes I will forgive you but I never expected you of all people to be like this",
    "I trust you but I need sometime",
    "I love you but I never expected this from you, I'll give you a second chance",
    "I wont think twice before I have to speak about that kind of stuff",
    "I need some space",
    "I genuinely hate you Shreshth but still I wont think twice",
    "Its okay Shreshth but it is something very deep and I just cant let it be I just need a little time"
];

document.getElementById("no-btn").addEventListener("click", () => {
    noCount++; // fixed increment issue
    if (noCount >= responses.length) {
        noCount = responses.length - 1;
    }
    document.getElementById("response").innerHTML = responses[noCount];
    document.getElementById("no-btn").style.fontSize = `${noCount * 1.2}em`;
});

document.getElementById("yes-btn").addEventListener("click", () => {
    document.getElementById("response").innerHTML = responses[0];
});