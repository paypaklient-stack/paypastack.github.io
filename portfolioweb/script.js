// ========== LIGHTBOX ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementsByClassName("close")[0];

document.querySelectorAll(".gallery-container img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

close.onclick = () => {
  lightbox.style.display = "none";
};

window.onclick = event => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
};

// ========== DARK/LIGHT MODE ==========
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ========== SCROLL ANIMATION ==========
const fadeEls = document.querySelectorAll(".about, .gallery, .contact");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeEls.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
// ========== TYPEWRITER EFFECT ==========
const typedName = document.getElementById("typed-name");
const text = "Klient Orlich B. Paypa"; // 👈 Change this to your real name
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedName.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // typing speed (lower = faster)
  }
}

window.addEventListener("load", typeWriter);

