// Theme Toggle
const toggleButton = document.getElementById("themeToggle");
toggleButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Typing Effect
const typingText = document.getElementById("typing-text") as HTMLElement;

const words: string[] = [
  "Full Stack Developer | .Net & Angular",
  "Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 1000);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  type();
});
