function recalculatePageHeight() {
  // set page height
  const pageHeight = document.body.scrollHeight;
  document.documentElement.style.setProperty('--pageHeight', pageHeight - 250 + 'px');
}

function playMusic() {
  const iframe = document.getElementById("player");
  iframe.src = "https://www.youtube.com/embed/MqazV4hbu8E?autoplay=1&loop=1&playlist=MqazV4hbu8E";
  document.getElementsByClassName("titulo")[0].removeEventListener("click", playMusic);
}

// present appear
document.querySelectorAll('.present').forEach((div, i) => {
  div.style.animationDelay = `${i * 0.1}s`;
});
document.getElementsByClassName("titulo")[0].addEventListener("click", playMusic);

// create infinite heart elements
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = '<img src="images/heart.png">';

  const size = Math.random() * 10 + 2; // random size
  const left = Math.random() * 90; // random position
  const duration = 3 + Math.random() * 7; // random speed

  heart.style.left = `${left}vw`;
  heart.style.maxWidth = `${size}vw`;
  heart.style.maxHeight = `${size}vw`;
  heart.style.animationDuration = `${duration}s`;

  document.body.appendChild(heart);

  // remove from DOM when finished
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// cria 1 coração a cada 500ms
setInterval(createHeart, 500);

recalculatePageHeight();
window.addEventListener('resize', recalculatePageHeight);
window.addEventListener('load', recalculatePageHeight);
