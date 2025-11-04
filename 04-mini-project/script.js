
// 04 — Mini Project
// State (variables)
let name = "";
let clicks = 0;
let mode = "light";

// DOM references
const nameInput = document.getElementById("nameInput");
const setNameBtn = document.getElementById("setNameBtn");
const clickBtn = document.getElementById("clickBtn");
const colorBtn = document.getElementById("colorBtn");
const modeBtn = document.getElementById("modeBtn");

const nameOut = document.getElementById("nameOut");
const clicksOut = document.getElementById("clicksOut");
const modeOut = document.getElementById("modeOut");
const logEl = document.getElementById("log");

// Helpers
function log(msg) {
  const time = new Date().toLocaleTimeString();
  logEl.innerText += `[${time}] ${msg}\n`;
  logEl.scrollTop = logEl.scrollHeight;
}
function render() {
  nameOut.textContent = name || "—";
  clicksOut.textContent = clicks;
  modeOut.textContent = mode;
  document.body.style.backgroundColor = mode === "dark" ? "#0f172a" : "var(--bg)";
  document.body.style.color = mode === "dark" ? "#e2e8f0" : "var(--ink)";
}
function randomHSL() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h} 70% 82%)`;
}

// Events
setNameBtn.addEventListener("click", () => {
  name = nameInput.value.trim();
  if (!name) {
    log("Tried to set empty name.");
    return;
  }
  render();
  log(`Name set to "${name}".`);
});

clickBtn.addEventListener("click", () => {
  clicks += 1;
  render();
  log("Click count increased.");
});

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomHSL();
  log("Background color changed.");
});

modeBtn.addEventListener("click", () => {
  mode = mode === "light" ? "dark" : "light";
  render();
  log(`Mode toggled to ${mode}.`);
});

// Initial render
render();
