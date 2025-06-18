const BUTTERFLY_COUNT = 50;
const STAR_COUNT = 70;

const butterflyContainer = document.getElementById('butterflies-container');
const starsContainer = document.getElementById('stars-container');

// Create butterflies
for (let i = 0; i < BUTTERFLY_COUNT; i++) {
  const butterfly = document.createElement('div');
  butterfly.classList.add('butterfly');

  // Random position and speed
  butterfly.style.left = Math.random() * 100 + 'vw';

  butterfly.style.top = Math.random() * -100 + 'vh';
  butterfly.style.animationDuration = (5 + Math.random() * 10) + 's';
  butterfly.style.animationDelay = Math.random() * 5 + 's';

  butterflyContainer.appendChild(butterfly);
}

// Create stars
for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = (Math.random() * 2 + 1) + 'px';
  star.style.setProperty('--size', size);
  star.style.setProperty('--top', Math.random() * 100 + 'vh');
  star.style.setProperty('--left', Math.random() * 100 + 'vw');
  star.style.setProperty('--duration', (2 + Math.random() * 3) + 's');

  starsContainer.appendChild(star);
}
