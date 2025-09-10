const texts = [
  "Sayang, Mungkin kamu udah bosen sama lagu ini",
  "Tapi asalkan kamu tau lagu ini mengibaratkan kamu",
  "Maaffin soal tadinyaaa",
  "Akuu bener-bener nyesel jadi tolong maafin aku",
  "Jangan sampe pisah ya sayang",
  "Ingett kita masih ada tujuan yang sama",
  "Yaitu tinggal diatap yang sama",
  "Maafin ya sayang",
  "Aku pengen tiap hari bisa bikin kamu senyum lagi, bukan nangis lagi",
  "Aku Janji gabakal ngecewain kamu lagi",
  "I LOVE U MUTIARA PUSPITA SARI❤️",
  "Jangan tinggalin aku ya sayang🥺❤️"
];

const textElement = document.getElementById("text");
const gallery = document.getElementById("photo-gallery");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      textElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 60);
    } else {
      if (textIndex === texts.length - 1) {
        textElement.classList.add("final");
        setTimeout(() => {
          gallery.classList.remove("hidden");
          startSlideshow();
        }, 3000);
      } else {
        setTimeout(() => {
          textElement.innerHTML = "";
          charIndex = 0;
          textIndex++;
          typeWriter();
        }, 2000);
      }
    }
  }
}

function startSlideshow() {
  const slides = gallery.querySelectorAll("img");
  let current = 0;
  slides[current].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

// Hujan love
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

const music = document.getElementById("bg-music");
const overlay = document.getElementById("overlay");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  music.play(); 
  overlay.style.display = "none"; 
  typeWriter(); 
  setInterval(createHeart, 500); 
});

const restartBtn = document.getElementById("restartBtn");

function typeWriter() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      textElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 60);
    } else {
      if (textIndex === texts.length - 1) {
        textElement.classList.add("final");
        setTimeout(() => {
          gallery.classList.remove("hidden");
          startSlideshow();
          restartBtn.classList.remove("hidden"); // tampilkan tombol ulang
        }, 3000);
      } else {
        setTimeout(() => {
          textElement.innerHTML = "";
          charIndex = 0;
          textIndex++;
          typeWriter();
        }, 2000);
      }
    }
  }
}

// Tombol ulang
restartBtn.addEventListener("click", () => {
  // reset
  textIndex = 0;
  charIndex = 0;
  textElement.innerHTML = "";
  textElement.classList.remove("final");
  gallery.classList.add("hidden");
  restartBtn.classList.add("hidden");
  
  // mulai lagi
  typeWriter();
});
