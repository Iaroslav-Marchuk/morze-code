import { lettersCells, ringCells, squareCells, connectCells } from "./data.js";

export function createGrid(rows, cols, container) {
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      if (
        (row === 0 && col === 6) ||
        (row === 0 && col === 7) ||
        (row === 1 && col === 6) ||
        (row === 1 && col === 7)
      ) {
        gridItem.classList.add("merged-cell");
        gridItem.textContent = "START";
      } else {
        const textCell = lettersCells.find(
          (letter) =>
            letter.letterPosition.row === row &&
            letter.letterPosition.col === col
        );

        if (textCell) {
          const letterCell = document.createElement("div");
          letterCell.classList.add("letter", `letter-${textCell.letter}`);
          letterCell.style[textCell.letterPosition.position] = "0px";
          letterCell.textContent = textCell.letter;
          gridItem.appendChild(letterCell);

          lettersCells.forEach(({ morseConnection }) =>
            morseConnection.forEach(
              ({ from, to, type, startHalf, endHalf }) => {
                const line = document.createElement("div");
                line.classList.add(
                  "connect",
                  `connect-${from[0]}-${from[1]}-${to[0]}-${to[1]}`
                );

                if (type === "h") {
                  line.style.width = `${
                    (to[1] - from[1]) * 50 +
                    (startHalf ? 25 : 0) -
                    (endHalf ? 25 : 0)
                  }px`;
                  line.style.height = "2px";
                  line.style.left = `${from[1] * 50 + (startHalf ? 25 : 0)}px`;
                  line.style.top = `${from[0] * 50 + 23}px`;
                }
                gridItem.appendChild(line);
              }
            )
          );
        }

        if (ringCells.find(([r, c]) => r === row && c === col)) {
          const ring = document.createElement("div");
          ring.classList.add("ring", `ring-${row}-${col}`);
          gridItem.appendChild(ring);
        }

        if (squareCells.find(([r, c]) => r === row && c === col)) {
          const square = document.createElement("div");
          square.classList.add("square", `square-${row}-${col}`);
          gridItem.appendChild(square);
        }
      }

      container.appendChild(gridItem);
    }
  }
}
//   ${
//     50 - (startHalf ? 25 : 0) - (endHalf ? 25 : 0)
//   }px`;
//   line.style.height = "2px";
//   line.style.left = `${from[1] * 50 + (startHalf ? 25 : 0)}px`;
//   line.style.top = `${from[0] * 50 + 25}px`;
// } else {
//   line.style.height = `${
//     50 - (startHalf ? 25 : 0) - (endHalf ? 25 : 0)
//   }px`;
//   line.style.width = "2px";
//   line.style.top = `${from[0] * 50 + (startHalf ? 25 : 0)}px`;
//   line.style.left = `${from[1] * 50 + 25}px`;
// }
