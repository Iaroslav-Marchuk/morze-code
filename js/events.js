// import { сells } from "./data.js";

export function hoverEffect(data) {
  const letterCell = document.querySelectorAll(".letter");

  letterCell.forEach((letter) => {
    const letterName = letter.dataset.symbol;
    letter.addEventListener("mouseover", () => {
      const morseEls = document.querySelectorAll(
        `[data-symbol="${letterName}"]`
      );

      const conEls = document.querySelectorAll(
        `[data-line-symbol="${letterName}"]`
      );

      morseEls.forEach((morseEl) => {
        morseEl.classList.add("highlight");
      });

      conEls.forEach((conEL) => {
        conEL.classList.add("highlightCon");
      });
    });

    letter.addEventListener("mouseout", () => {
      const morseEls = document.querySelectorAll(
        `[data-symbol="${letterName}"]`
      );

      const conEls = document.querySelectorAll(
        `[data-line-symbol="${letterName}"]`
      );

      morseEls.forEach((morseEl) => {
        morseEl.classList.remove("highlight");
      });

      conEls.forEach((conEL) => {
        conEL.classList.remove("highlightCon");
      });
    });
  });
}
