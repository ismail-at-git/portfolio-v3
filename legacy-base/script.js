// Typed Text
const typedTextSpan = document.getElementById('typed-text');
const textArray = ['Web Developer', 'Designer', 'Problem Solver'];
let textIndex = 0, charIndex = 0;
function type() {
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex++);
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textIndex].substring(0, --charIndex);
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}
document.addEventListener('DOMContentLoaded', () => setTimeout(type, 1000));

// ScrollReveal 3D animations
ScrollReveal().reveal('.card-3d', {
  distance: '50px',
  origin: 'bottom',
  rotate: { x: 10, y: 0, z: 20 },
  duration: 800,
  interval: 200,
  easing: 'ease-in-out'
});