# Instructor Guide — Interactive Demos (Slides ↔ Code)

Open root `index.html` and click into each section as you advance slides.

- Slide 6: `06-what-is-dom/`
  * Buttons mutate the DOM. Open Elements panel to watch nodes change.
  * Reset reconstructs the subtree (teaches that the DOM is live and can be rebuilt).

- Slide 7: `07-selecting-elements/`
  * Highlight by ID, class, and tag. Show querySelector vs querySelectorAll.
  * In console, run: document.getElementById('title').textContent = 'You changed me!'

- Slide 8: `08-events/`
  * Click, input, and scroll events update a message. Add a breakpoint in a handler.

- Slide 9: `09-mini-project/`
  * Click button → change text + random HSL background. Add Reset to restore.

- Slide 10: `10-debugging-recap/`
  * Log demo shows styled console output and objects.
  * Introduce a bug → ReferenceError → read stacktrace → fix by unchecking toggle.
