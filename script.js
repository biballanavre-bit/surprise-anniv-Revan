const notes = [
  "Your presence alone is enough to make any room feel warmer. 💗",

  "Thank you for being someone I can always count on. 🌷",

  "Every little moment with you becomes a beautiful memory. ✨",

  "I'm grateful that our paths crossed. 🤍",

  "You make ordinary days feel special. 🌸",

  "I hope you always remember how important you are to me. 💕"
];


function pickNote() {

  const random =
    Math.floor(Math.random() * notes.length);

  document.getElementById("note").innerText =
    notes[random];

}


function startMusic() {

  const music =
    document.getElementById("music");

  music.play();

}


function createFlower() {

  const flower =
    document.createElement("div");

  flower.className = "flower";

  const flowers = ["🌸", "🌷", "🌼", "🌺"];

  flower.innerText =
    flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left =
    Math.random() * 100 + "vw";

  flower.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}


setInterval(createFlower, 700);
