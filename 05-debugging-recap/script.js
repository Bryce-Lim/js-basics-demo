
// 05 — Debugging & Recap
const logBtn = document.getElementById('logBtn');
const bugToggle = document.getElementById('bugToggle');
const runBtn = document.getElementById('runBtn');

logBtn.addEventListener('click', () => {
  const student = { name: 'Alex', score: 3 };
  console.log('Student object:', student);
  console.log('Score + 1 =', student.score + 1);
  console.log('%cUse the console to inspect values', 'background:#2563eb;color:white;padding:2px 6px;border-radius:4px');
});

runBtn.addEventListener('click', () => {
  try {
    if (bugToggle.checked) {
      // Intentional ReferenceError
      // eslint-disable-next-line no-undef
      console.log(notDefinedVar + 1);
    } else {
      const x = 2;
      console.log('No bug. x + 1 =', x + 1);
    }
  } catch (err) {
    console.error('Caught error:', err);
  }
});
