import { playDot, playDash } from "./sound.js";
import { cells } from "./data.js";

export function hoverEffect() {
  const letterCell = document.querySelectorAll(".letter");

  letterCell.forEach((letter) => {
    const letterName = letter.dataset.letterSymbol;

    letter.addEventListener("mouseover", () => {
      hightLightSymbols(letterName);
    });

    letter.addEventListener("mouseout", () => {
      unHightLightSymbols(letterName);
    });
  });
}

let hightlightTimers = [];

function hightLightSymbols(letterName) {
  const cell = cells.find((c) => c.letter.symbol === letterName);
  if (!cell) return;

  const morsePositions = cell.morseSymbol.morsePosition;

  morsePositions.forEach(({ coord, symbol }, index) => {
    const el = document.querySelector(`[data-coord="${coord[0]}-${coord[1]}"]`);
    const timeoutId = setTimeout(() => {
      el?.classList.add("highlight-dash-dot");
      if (symbol === "dot") playDot();
      else if (symbol === "dash") playDash();
    }, index * 300);

    hightlightTimers.push(timeoutId);
  });

  const letterEls = document.querySelectorAll(
    `[data-letter-symbol="${letterName}"]`
  );
  const lineEls = document.querySelectorAll(
    `[data-line-symbol="${letterName}"]`
  );

  letterEls.forEach((letterEl) => {
    letterEl.classList.add("highlight-letter");
  });

  lineEls.forEach((lineEl) => {
    lineEl.classList.add("highlight-line");
  });
}

function unHightLightSymbols(letterName) {
  hightlightTimers.forEach(clearTimeout);
  hightlightTimers = [];

  const cell = cells.find((c) => c.letter.symbol === letterName);
  if (!cell) return;

  const morsePositions = cell.morseSymbol.morsePosition;

  morsePositions.forEach(({ coord }) => {
    const el = document.querySelector(`[data-coord="${coord[0]}-${coord[1]}"]`);
    el?.classList.remove("highlight-dash-dot");
  });

  const letterEls = document.querySelectorAll(
    `[data-letter-symbol="${letterName}"]`
  );
  const lineEls = document.querySelectorAll(
    `[data-line-symbol="${letterName}"]`
  );

  letterEls.forEach((letterEl) => {
    letterEl.classList.remove("highlight-letter");
  });

  lineEls.forEach((lineEl) => {
    lineEl.classList.remove("highlight-line");
  });
}

function hightLightByKey(letterName) {
  const letterView = document.querySelectorAll(".merged-cell");
  const morseEls = document.querySelectorAll(
    `[data-dash-dot-symbol="${letterName}"]`
  );
  const totalTime = morseEls.length * 300;

  hightLightSymbols(letterName);
  letterView.forEach((cell) => {
    cell.textContent = letterName;
    cell.style.background = "#708946";
    cell.style.fontSize = "60px";
  });

  setTimeout(() => {
    unHightLightSymbols(letterName);
    letterView.forEach((cell) => {
      cell.textContent = "START";
      cell.style.background = "lightblue";
      cell.style.fontSize = "16px";
    });
  }, totalTime);
}

export function keyOn() {
  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;

    if (activeElement.tagName === "INPUT") return;

    const key = event.key.toUpperCase();
    const isLetter = /^[A-Z]$/.test(key);

    if (isLetter) {
      hightLightByKey(key);
    }
  });
}

export function setupInputPlayback() {
  const input = document.getElementById("morseInput");
  const playBtn = document.getElementById("playBtn");
  const letterView = document.querySelectorAll(".merged-cell");

  playBtn.addEventListener("click", () => {
    const word = input.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (!word) return;

    let delay = 0;

    [...word].forEach((letter, index) => {
      setTimeout(() => {
        hightLightByKey(letter);
      }, delay);

      delay += getMorseDuration(letter) + 100;
    });

    setTimeout(() => {
      input.value = "";
      letterView.forEach((cell) => {
        cell.textContent = "START";
        cell.style.background = "lightblue";
        cell.style.fontSize = "16px";
      });
    }, delay);
  });
}

function getMorseDuration(letter) {
  const cell = cells.find((c) => c.letter.symbol === letter);
  if (!cell) return 0;
  return cell.morseSymbol.morsePosition.length * 300;
}
