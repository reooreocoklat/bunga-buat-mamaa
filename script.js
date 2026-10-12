document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startButton");
  const text = document.getElementById("animatedText");

  const letters = ["F", "O", "R", "M", "A", "M", "A"];
  let index = 0;

  function showNextLetter() {
    text.textContent = letters[index];

    setTimeout(() => {
      text.textContent = "";

      index++;

      if (index < letters.length) {
        setTimeout(showNextLetter, 200);
      } else {
        // Setelah selesai, tampilkan tulisan lengkap
        setTimeout(() => {
          text.textContent = "FOR MAMA";
        }, 200);
      }
    }, 600);
  }

  showNextLetter();

  button.addEventListener("click", () => {
    document.body.classList.add("started");
    document.body.classList.remove("not-loaded");
  });
});