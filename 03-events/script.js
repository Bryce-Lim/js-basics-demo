
// 03 - Events and Listeners
const clickBtn = document.getElementById('clickBtn');
const nameInput = document.getElementById('nameInput');
const msg = document.getElementById('msg');
const scrollBox = document.getElementById('scrollBox');

clickBtn.addEventListener('click', () => {
  msg.textContent = 'You clicked! ✅';
});

nameInput.addEventListener('input', () => {
  msg.textContent = nameInput.value ? `Hello, ${nameInput.value}` : '—';
});

let count = 0;
scrollBox.addEventListener('scroll', () => {
  count++;
  msg.textContent = `Scrolled ${count} times`;
});
