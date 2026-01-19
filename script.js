
// ================== PASSWORD ==================
function checkPassword() {
  const pass = document.getElementById("pass-input").value;
  if (pass === "forever") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    document.getElementById("pass-msg").innerText = "Wrong code 💔 Try again!";
  }
}

// ================== ANNIVERSARY DATE ==================
const now = new Date();
// let year = now.getFullYear();
// let anniversaryDate = new Date(year, 0, 20, 0, 0, 0);
// if (now > anniversaryDate) anniversaryDate = new Date(year + 1, 0, 20, 0, 0, 0);

// For testing only: 10 seconds countdown
let anniversaryDate = new Date();
anniversaryDate.setSeconds(anniversaryDate.getSeconds() + 10);

// ================== COUNTDOWN ==================
function updateCountdown() {
  const diff = anniversaryDate - new Date();
  if (diff <= 0) {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("anniversary").classList.remove("hidden");
    startConfetti();
    checkMidnightGlow();
    startHearts();
    startTypingLetter();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ================== LOVE LETTER TYPING ==================
const letter = "From the moment you came into my life, love became effortless. You are my calm, my happiness, my forever ❤️";
let i = 0;
function typeLetter() {
  if (i < letter.length) {
    document.getElementById("letter-text").innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeLetter, 50);
  }
}
function startTypingLetter() { typeLetter(); }

// ================== REVEAL EXTRA LETTER + DARK PINK BG ==================
function revealExtra() {
  const extraText = document.getElementById("extra-text");
  const messageDiv = document.getElementById("message");

  // Show extra text
  extraText.classList.remove("hidden");

  // Add dark pink background and smooth transition
  messageDiv.style.backgroundColor = "#ff4d6d"; // Dark Pink
  messageDiv.style.padding = "20px";
  messageDiv.style.borderRadius = "10px";
  messageDiv.style.color = "#fff";
  messageDiv.style.transition = "background-color 0.5s ease, color 0.5s ease";

  // Hide Read More button
  document.getElementById("read-more-btn").style.display = "none";
}

// ================== SLIDESHOW ==================
const photos = [
  {img:"./images/photo2.jpeg", text:"I love you so much 💕"},
  {img:"./images/photo1.jpeg", text:"Every smile with you 💖"},
  {img:"./images/photo3.jpeg", text:"Forever feels right with you 💍"},
  {img:"./images/photo4.jpeg", text:"You’re my favorite part of every day 💕"},
  {img:"./images/photo12.jpeg", text:"My heart chose you, always ❤️"},
  {img:"./images/photo5.jpeg", text:"With you, life feels magical ✨💫"},
  {img:"./images/photo6.jpeg", text:"Forever starts with you 💍❤️"},
  {img:"./images/photo7.jpeg", text:"You + Me = Always 💑♾️"},
  {img:"./images/photo8.jpeg", text:"All my love, only you 💕🔐"},
  {img:"./images/photo9.jpeg", text:"My safe place, my love 🤍🌙"},
  {img:"./images/photo11.jpeg", text:"You make me blush everytime I see you 🥰"},
  {img:"./images/photo10.jpeg", text:"My heart is filled with your love💗💗"},
  {img:"./images/photo13.jpeg", text:"UMMAAHHH💋💋"},
  {img:"./images/photo14.jpeg", text:"I don't care for anything when you're around me💜"}
];
let slideIndex = 0;
setInterval(() => {
  if(document.getElementById("slide")) {
    slideIndex = (slideIndex + 1) % photos.length;
    document.getElementById("slide").src = photos[slideIndex].img;
    document.getElementById("slide-text").innerText = photos[slideIndex].text;
  }
}, 3000);

// ================== SURPRISE BUTTON ==================
function surprise() {
  alert("Bahut pyaar 💗 barsa liya ab suno meri baat,bhtt attitude dikha rhe ho aaj kal 😏 toh wo kam kro thoda wrna aisa maarungi👊👊 na yaad rakhoge hmesha. aur dekh lo kitna pyaar krti hu mai, itti mehanat se bnaya hai website...ek website bnane me kitne errors aate hai tum kya jaano SAMEER BABU❤️✨");
}

// ================== MIDNIGHT GLOW ==================
function checkMidnightGlow() {
  const hour = new Date().getHours();
  if(hour >= 0 && hour <= 5) document.body.classList.add("midnight-glow");
}

// ================== CONFETTI ==================
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confettiPieces = [];
for(let i=0; i<150; i++){
  confettiPieces.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height - canvas.height, r:Math.random()*6+4, d:Math.random()*100, color:`hsl(${Math.random()*360},100%,50%)`, tilt: Math.random()*10-10});
}
function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiPieces.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
    ctx.stroke();
  });
  updateConfetti();
}
function updateConfetti() {
  confettiPieces.forEach(c => {
    c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
    c.tilt += Math.sin(c.d);
    if(c.y > canvas.height){ c.x = Math.random()*canvas.width; c.y = -10; }
  });
}
let confettiInterval;
function startConfetti(){ confettiInterval = setInterval(drawConfetti, 20);}
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ================== FLOATING HEARTS ==================
function startHearts() {
  const container = document.getElementById("hearts-container");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    heart.style.animation = `floatUp ${3 + Math.random() * 3}s linear forwards`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}