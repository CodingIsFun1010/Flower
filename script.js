// Restart the bloom/fade every 6 seconds
setInterval(() => {
  const flower = document.getElementById('flower');
  flower.style.animation = 'none';
  flower.offsetHeight; // force reflow
  flower.style.animation = 'bloomAndFade 5s ease-out forwards';
}, 6000);
