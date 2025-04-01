import { lettersCells } from "./data.js";

export function hoverEffect() {
  const lettersElements = document.querySelectorAll(".letter");
  lettersElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      const letter = element.textContent;
      const morseData = lettersCells.find((item) => item.letter === letter);

      if (morseData) {
        morseData.morsePosition.forEach(([row, col]) => {
          const el = document.querySelector(
            `.ring-${row}-${col}, .square-${row}-${col}`
          );
          if (el) el.classList.add("highlight");
        });
      }
    });

    element.addEventListener("mouseleave", () => {
      document
        .querySelectorAll(".highlight")
        .forEach((el) => el.classList.remove("highlight"));
    });
  });
}
