const pageHeight = document.body.scrollHeight;
document.documentElement.style.setProperty('--pageHeight', pageHeight-250 + 'px');

document.querySelectorAll('.present').forEach((div, i) => {
  div.style.animationDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.heart').forEach((heart) => {
  const randomLeft = Math.random() * 88;

  const randomDelay = Math.random() * 10; 

  const randomDuration = 5 + Math.random() * 5;

  const randomScale = 3 + Math.random() * 12;

  heart.style.left = `${randomLeft}vw`;
  heart.style.animationDelay = `${randomDelay}s`;
  heart.style.animationDuration = `${randomDuration}s`;
  heart.style.width = `${randomScale}vw`;
});

