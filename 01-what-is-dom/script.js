
// 01 — What is the DOM
let nameEl = document.getElementById('name');
const profileEl = document.getElementById('profile');
const changeNameBtn = document.getElementById('changeNameBtn');
const addFactBtn = document.getElementById('addFactBtn');
const resetBtn = document.getElementById('resetBtn');

const initial = { name: 'Ada Lovelace', role: 'First programmer' };

changeNameBtn.addEventListener('click', () => {
  nameEl.textContent = 'Grace Hopper';
});

addFactBtn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'Fact: Coined the term “bug” in computing.';
  p.className = 'kv';
  profileEl.appendChild(p);
});

resetBtn.addEventListener('click', () => {
  profileEl.innerHTML = `
    <h2 id="name">${initial.name}</h2>
    <p class="role">${initial.role}</p>
  `;
  nameEl = document.getElementById('name'); // re‑query after replacing HTML
});
