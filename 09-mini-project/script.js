
// Slide 9 — Mini Project
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');

function randomHsl(){
  return `hsl(${Math.floor(Math.random()*360)} 70% 70%)`;
}

btn.addEventListener('click', () => {
  message.textContent = '🎉 Color changed!';
  document.body.style.backgroundColor = randomHsl();
});

resetBtn.addEventListener('click', () => {
  message.textContent = 'Click the button!';
  document.body.style.backgroundColor = 'var(--bg)';
});
