function doFunction() { alert("HELLO");}

const button = document.querySelector('.button');
const panel = document.querySelector('.panel');

button.addEventListener('click', () => {
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
});