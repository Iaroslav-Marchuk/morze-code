import { cells } from "./data.js";

export function createGrid(rows, cols, container) {
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");

      // if (
      //   (row === 1 && col === 7) ||
      //   (row === 1 && col === 8) ||
      //   (row === 2 && col === 7) ||
      //   (row === 2 && col === 8)
      // ) {
      //   gridCell.classList.add("merged-cell");
      //   gridCell.textContent = "START";
      // }

      createLetters(cells, row, col, gridCell);
      createDashDot(cells, row, col, gridCell);
      createConnection(cells, row, col, container);

      container.appendChild(gridCell);
    }
  }
}

export function createLetters(cells, row, col, gridCell) {
  cells.forEach((item) => {
    const letterRowPos = item.letter.coord[0];
    const letterColPos = item.letter.coord[1];

    if (letterRowPos === row && letterColPos === col) {
      const elLetter = document.createElement("div");
      elLetter.classList.add(
        "letter",
        `letter-${letterRowPos}-${letterColPos}`
      );
      elLetter.style[item.letter.orientation] = "1px";
      elLetter.textContent = item.letter.symbol;
      gridCell.appendChild(elLetter);
    }
  });
}

export function createDashDot(cells, row, col, gridCell) {
  cells.forEach((item) => {
    item.morseSymbol.morsePosition.forEach((morseItem) => {
      const morseRowPos = morseItem.coord[0];
      const morseColPos = morseItem.coord[1];

      if (morseRowPos === row && morseColPos === col) {
        const elDotOrDash = document.createElement("div");
        elDotOrDash.classList.add(
          morseItem.symbol,
          `${morseItem.symbol}-${morseRowPos}-${morseColPos}`
        );

        if (morseItem.symbol === "dash") {
          item.morseSymbol.morseConnection.forEach((lineEl) => {
            const fromRowEl = lineEl.from[0];
            const fromColEl = lineEl.from[1];
            const toRowEl = lineEl.to[0];
            const toColEl = lineEl.to[1];

            const isOnLine =
              morseRowPos >= fromRowEl &&
              morseRowPos <= toRowEl &&
              morseColPos >= fromColEl &&
              morseColPos <= toColEl;

            if (isOnLine && lineEl.type === "v") {
              elDotOrDash.style.transform = "rotate(90deg)";
              elDotOrDash.style.transformOrigin = "center";
            }
          });
        }

        gridCell.appendChild(elDotOrDash);
      }
    });
  });
}

export function createConnection(cells, row, col, gridContainer) {
  cells.forEach((connect) => {
    connect.morseSymbol.morseConnection.forEach((morseConnect) => {
      const { from, to, type, startHalf, endHalf } = morseConnect;

      const fromRow = from[0];
      const fromCol = from[1];

      const toRow = to[0];
      const toCol = to[1];

      if (type === "h" && row === fromRow && col === fromCol) {
        const startOffset = startHalf ? 25 : 50;
        const endOffset = endHalf ? 25 : 0;
        const length = (toCol - fromCol) * 50 + startOffset - endOffset;

        const line = document.createElement("div");
        line.classList.add(
          "connect",
          `connect-${connect.letter.symbol}-${fromRow}-${fromCol}-${toRow}-${toCol}`
        );

        line.style.position = "absolute";
        line.style.width = `${length}px`;
        line.style.height = "2px";
        line.style.left = `${fromCol * 50 - startOffset}px`;
        line.style.top = `${fromRow * 50 - 27}px`;
        gridContainer.appendChild(line);
      }

      if (type === "v" && row === fromRow && col === fromCol) {
        const startOffset = startHalf ? 25 : 50;
        const endOffset = endHalf ? 25 : 0;
        const length = (toRow - fromRow) * 50 + startOffset - endOffset;

        const line = document.createElement("div");
        line.classList.add(
          "connect",
          `connect-${connect.letter.symbol}-${fromRow}-${fromCol}-${toRow}-${toCol}`
        );
        line.style.position = "absolute";
        line.style.width = "2px";
        line.style.height = `${length}px`;
        line.style.left = `${fromCol * 50 - 27}px`; // по центру клітинки по X
        line.style.top = `${fromRow * 50 - startOffset}px`; // враховуємо offset

        gridContainer.appendChild(line);
      }
    });
  });
}
