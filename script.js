/* =========================
   PIN
========================= */

const CORRECT_PIN = "132328";

function checkPin() {

  const input = document.getElementById("pin-input");
  const error = document.getElementById("pin-error");

  const pin = input.value.trim();

  if (pin === CORRECT_PIN) {

    document
      .getElementById("pin-screen")
      .classList.add("hidden");

    document
      .getElementById("main-content")
      .classList.remove("hidden");

    error.innerText = "";

    createFlowers();

  } else {

    error.innerText = "PIN salah, coba lagi ♡";

    input.value = "";

    input.focus();

  }
}


/* ENTER UNTUK PIN */

document
  .getElementById("pin-input")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      checkPin();
    }

  });


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  const music = document.getElementById("music");

  music.play().catch(function() {
    console.log("Musik belum dapat diputar.");
  });

  document
    .getElementById("letter")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   NOTES
========================= */

const notes = [

  "Happy anniversary, yacipaa. 🤍 Makasih sudah menjadi bagian dari perjalanan hidup Revan sampai sejauh ini.",

  "Aku bersyukur banget bisa dipertemukan sama kamu. Dari sekian banyak orang, aku senang orang yang aku pilih untuk menemani perjalanan ini adalah kamu. ♡",

  "Mungkin hubungan kita nggak selalu sempurna, tapi aku selalu ingin belajar menjadi lebih baik supaya kita bisa terus bersama.",

  "Makasih sudah bertahan sama aku, sudah sabar menghadapi sifat aku, dan tetap memilih untuk tinggal meskipun aku masih banyak kurangnya. 🤍",

  "Setiap momen kecil yang kita lewati ternyata menjadi kenangan yang sangat berarti buat aku.",

  "Aku nggak tahu perjalanan kita ke depannya akan seperti apa, tapi aku berharap kita tetap saling menggenggam dan melewati semuanya bersama.",

  "Kalau suatu hari nanti kita melihat kembali semua foto dan cerita kita, aku berharap kita bisa tersenyum dan bilang, ternyata kita sudah sejauh ini. 🌷",

  "Terima kasih sudah menjadi tempat aku bercerita, tempat aku pulang, dan seseorang yang selalu punya tempat spesial di hati aku.",

  "Aku mungkin nggak selalu pandai menunjukkan rasa sayangku, tapi percayalah, kamu berarti lebih dari yang bisa aku jelaskan lewat kata-kata.",

  "Aku ingin terus membuat banyak kenangan sama kamu. Bukan cuma untuk hari ini, tapi juga untuk bulan-bulan dan tahun-tahun berikutnya. ♡",

  "Semoga hubungan kita selalu dipenuhi hal-hal baik, saling mengerti, saling menjaga, dan tetap memilih satu sama lain setiap harinya.",

  "Happy anniversary untuk kita. Terima kasih untuk semua tawa, cerita, perjuangan, dan kenangan yang sudah kita buat bersama. I love you. 🤍"

];

let lastNote = -1;

function pickNote() {

  const note = document.getElementById("note");
  const jar = document.querySelector(".jar");

  jar.classList.remove("shake");

  void jar.offsetWidth;

  jar.classList.add("shake");

  let random;

  do {

    random =
      Math.floor(
        Math.random() * notes.length
      );

  } while (
    random === lastNote &&
    notes.length > 1
  );

  lastNote = random;

  note.classList.remove("hidden-note");

  note.innerText = notes[random];

}


/* =========================
   FLOWERS
========================= */

const flowerTypes = [
  "🌸",
  "🌷",
  "🌼",
  "🌺",
  "✿"
];

function createFlower() {

  const container =
    document.getElementById("flowers");

  const flower =
    document.createElement("div");

  flower.className = "flower";

  flower.innerText =
    flowerTypes[
      Math.floor(
        Math.random() *
        flowerTypes.length
      )
    ];

  flower.style.left =
    Math.random() * 100 + "vw";

  flower.style.fontSize =
    (14 + Math.random() * 15) + "px";

  flower.style.animationDuration =
    (5 + Math.random() * 6) + "s";

  container.appendChild(flower);

  setTimeout(function() {
    flower.remove();
  }, 12000);

}

function createFlowers() {

  for (
    let i = 0;
    i < 8;
    i++
  ) {

    setTimeout(
      createFlower,
      i * 300
    );

  }

  setInterval(
    createFlower,
    900
  );

}


/* =========================
   BACK TO TOP
========================= */

const topButton =
  document.getElementById("top-button");

window.addEventListener(
  "scroll",
  function() {

    if (window.scrollY > 500) {

      topButton.style.display =
        "block";

    } else {

      topButton.style.display =
        "none";

    }

  }
);


function goTop() {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}
