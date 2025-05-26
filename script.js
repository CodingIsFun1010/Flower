// Automatically restarts the animation every 6 seconds
setInterval(() => {
  const flower = document.getElementById('flower');
  flower.style.animation = 'none';
  flower.offsetHeight; // trigger reflow
  flower.style.animation = 'bloomAndFade 5s ease-out forwards';
}, 6000);
