const petalsGroup = document.getElementById('petals');

// Petal path: pointed, slightly curved like the flower in the image
const petalPath = "M100,100 C98,40 102,40 100,100";

for(let i = 0; i < 16; i++) {
  const angle = i * (360 / 16);
  const petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
  petal.setAttribute("d", petalPath);
  petal.setAttribute("fill", "#00f0ff");
  petal.setAttribute("filter", "url(#glow)");
  petal.setAttribute("transform", `rotate(${angle}, 100, 100)`);
  petalsGroup.appendChild(petal);
}

// Loop the animation every 7 seconds
setInterval(() => {
  const svg = document.getElementById('flower');
  svg.style.animation = 'none';
  svg.offsetHeight; // trigger reflow
  svg.style.animation = 'bloomFade 6s ease forwards';
}, 7000);
