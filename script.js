const toggles = document.querySelectorAll('.toggle');
const quality = document.querySelector('#quality');
const affordable = document.querySelector('#affordable');
const speed = document.querySelector('#speed');

toggles.forEach(toggle =>
  toggle.addEventListener('change', e => {
    doTheTrick(e.target);
  })
);

function doTheTrick(theClickedOne) {
  if (quality.checked && affordable.checked && speed.checked) {
    if (quality === theClickedOne) {
      speed.checked = false;
    }
    if (affordable === theClickedOne) {
      quality.checked = false;
    }
    if (speed === theClickedOne) {
      affordable.checked = false;
    }
  }
}
