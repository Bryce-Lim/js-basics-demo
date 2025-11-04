
// 03 — Events
let score = 0;

const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

function render() {
  scoreEl.textContent = score;
}

incBtn.addEventListener("click", () => {
  score += 1;
  render();
  messageEl.textContent = "Increased ✅";
});

decBtn.addEventListener("click", () => {
  score -= 1;
  render();
  messageEl.textContent = "Decreased ➖";
});

resetBtn.addEventListener("click", () => {
  score = 0;
  render();
  messageEl.textContent = "Reset ↩️";
});

render();
