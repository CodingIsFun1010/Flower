 // Create 8 petals rotated around the center
const petalsGroup = document.getElementById('petals');

for (let i = 0; i < 8; i++) {
  const petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const angle = i * 45; // 360 / 8
  const path = "M100,100 C90,70 110,70 100,100"; // curved petal

  petal.setAttribute("d", path);
  petal.setAttribute("fill", "#00f0ff");
  petal.setAttribute("transform", `rotate(${angle}, 100, 100)`);
  petal.setAttribute("filter", "url(#glow)");

  petalsGroup.appendChild(petal);
}

// Restart bloom animation every 6s
setInterval(() => {
  const flower = document.getElementById('flower');
  flower.style.animation = 'none';
  flower.offsetHeight; // force reflow
  flower.style.animation = 'bloomAndFade 5s ease-out forwards';
}, 6000);
