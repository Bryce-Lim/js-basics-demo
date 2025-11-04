// ----------------------------
// VARIABLES
// ----------------------------

// const = cannot change
const school = "Web Dev Academy";

// let = can change (good for dynamic values)
let studentName = "Alex";
let score = 0;

// ----------------------------
// DISPLAY INITIAL VALUES ON PAGE
// ----------------------------
document.getElementById("studentName").textContent = studentName;
document.getElementById("scoreValue").textContent = score;

// ----------------------------
// EVENT LISTENERS (user actions)
// ----------------------------

// Increase score
document.getElementById("increaseScoreBtn").addEventListener("click", () => {
  score += 1;
  document.getElementById("scoreValue").textContent = score;
});

// Change name
document.getElementById("changeNameBtn").addEventListener("click", () => {
  studentName = prompt("Enter a new name:");
  document.getElementById("studentName").textContent = studentName;
});
