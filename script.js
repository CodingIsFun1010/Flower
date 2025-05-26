 // Create 8 petals rotated around the center
const petalsGroup = document.getElementById('petals');

for (let i = 0; i < 8; i++) {
  const petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const angle = i * 45;
  const path = "M100,100 C90,70 110,70 100,100";
  petal.setAttribute("d", path);
  petal.setAttribute("fill", "#00f0ff");
  petal.setAttribute("transform", `rotate(${angle}, 100, 100)`);
  petal.setAttribute("filter", "url(#glow)");
  petalsGroup.appendChild(petal);
}

// Restart full animation
setInterval(() => {
  const flower = document.getElementById('flower');
  const root = document.getElementById('root-path');
  
  flower.style.animation = 'none';
  root.style.animation = 'none';

  flower.offsetHeight; // force reflow
  flower.style.animation = 'bloomAndFade 10s ease-out forwards';
  root.style.animation = 'growRoot 3s ease-out forwards';
}, 12000); // total duration
