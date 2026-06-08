const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top, #1e3c72 0%, #2a5298 100%);
  }

  #confettiButton {
    position: relative;
    width: 260px;
    height: 120px;
    font-size: 1.5rem;
    color: white;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(135deg, #ff4ecd, #6a00ff, #1fd1f9, #27ae60);
    background-size: 300% 300%;
    cursor: pointer;
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    animation: spin 6s linear infinite, pulse 2.5s ease-in-out infinite;
    transform-origin: center;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }

  .confetti-particle {
    position: fixed;
    width: 10px;
    height: 14px;
    opacity: 0.95;
    pointer-events: none;
    border-radius: 4px;
    will-change: transform, opacity;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    color: white;
    padding: 10px 20px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-family: 'Arial', sans-serif;
    }

  .topbar nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    }
  
  .topbar a{
    color: black;
    text-decoration: none;
    font-weight: bold;
    }
`;
document.head.appendChild(style);

const button = document.createElement('button');
button.id = 'confettiButton';
button.textContent = 'Shoot Rainbow Confetti!';
document.body.appendChild(button);

function createConfetti(x, y) {
  const colors = ['#ff3cac', '#ffdd00', '#00ff9d', '#0088ff', '#ff6534', '#9b00ff'];
  const count = 100;
  const particles = [];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 6;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed - 3;
    const rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 20;
    const lifetime = 90 + Math.random() * 30;
    const size = 8 + Math.random() * 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size * 1.2}px`;
    particle.style.transform = `translate3d(0,0,0) rotate(${rotation}deg)`;
    document.body.appendChild(particle);

    particles.push({ particle, x, y, vx, vy, rotation, rotationSpeed, life: lifetime });
  }

  let frame = 0;
  function animate() {
    frame += 1;
    for (let i = particles.length - 1; i >= 0; i--) {
      const item = particles[i];
      item.vy += 0.15;
      item.x += item.vx;
      item.y += item.vy;
      item.rotation += item.rotationSpeed;
      item.life -= 1;
      item.particle.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rotation}deg)`;
      item.particle.style.opacity = `${Math.max(0, item.life / 90)}`;
      if (item.life <= 0) {
        item.particle.remove();
        particles.splice(i, 1);
      }
    }
    if (particles.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

button.addEventListener('click', (event) => {
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  createConfetti(x, y);
});
