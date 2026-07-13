// إنشاء نجوم متحركة
const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.animationDuration = (2 + Math.random() * 3) + "s";

  stars.appendChild(star);
}

// تأثير عند الضغط على الزر
const button = document.getElementById("heartBtn");

if (button) {
  button.addEventListener("click", () => {
    button.innerHTML = "❤️ أحبك يا رتوج ❤️";

    const hearts = ["❤️", "💖", "💕", "💗", "💞"];

    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = (20 + Math.random() * 20) + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.transition = "all 4s linear";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
      }, 50);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  });
}
