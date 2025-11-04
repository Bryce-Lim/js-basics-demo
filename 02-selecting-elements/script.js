
// 02 — Selecting Elements
const byIdBtn = document.getElementById('byIdBtn');
const byClassBtn = document.getElementById('byClassBtn');
const byTagBtn = document.getElementById('byTagBtn');
const clearBtn = document.getElementById('clearBtn');

function highlight(el){ if(el) el.classList.add('sel-highlight'); }
function clearHighlights(){ document.querySelectorAll('.sel-highlight').forEach(el=>el.classList.remove('sel-highlight')); }

byIdBtn.addEventListener('click', () => {
  clearHighlights();
  const el = document.getElementById('title');
  highlight(el);
});

byClassBtn.addEventListener('click', () => {
  clearHighlights();
  const els = document.querySelectorAll('.desc');
  els.forEach(highlight);
});

byTagBtn.addEventListener('click', () => {
  clearHighlights();
  const els = document.querySelectorAll('p');
  els.forEach(highlight);
});

clearBtn.addEventListener('click', clearHighlights);

// Suggested live console demo:
// document.getElementById('title').textContent = 'You changed me!'
