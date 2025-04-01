export const lettersCells = [
  {
    letter: "H",
    letterPosition: { row: 0, col: 0, position: "bottom" },
    morse: "....",
    morsePosition: [
      [1, 5],
      [1, 3],
      [1, 1],
      [1, 0],
    ],
    morseConnection: [
      { from: [1, 0], to: [1, 5], type: "h", startHalf: true, endHalf: false },
    ],
  },

  // {
  //   letter: "S",
  //   letterPosition: { row: 0, col: 1, position: "bottom" },
  //   morse: "...",
  //   morsePosition: [
  //     [1, 5],
  //     [1, 3],
  //     [1, 1],
  //   ],
  //   morseConnection: [
  //     { from: [1, 1], to: [1, 5], type: "h", startHalf: true, endHalf: false },
  //   ],
  // },

  // {
  //   letter: "I",
  //   letterPosition: { row: 0, col: 3, position: "bottom" },
  //   morse: "..",
  //   morsePosition: [
  //     [1, 5],
  //     [1, 3],
  //   ],
  // },

  // {
  //   letter: "E",
  //   letterPosition: { row: 0, col: 5, position: "bottom" },
  //   morse: ".",
  //   morsePosition: [[1, 5]],
  // },

  // {
  //   letter: "T",
  //   letterPosition: { row: 0, col: 8, position: "bottom" },
  //   morse: "-",
  //   morsePosition: [[1, 8]],
  // },

  // {
  //   letter: "M",
  //   letterPosition: { row: 0, col: 10, position: "bottom" },
  //   morse: "--",
  //   morsePosition: [
  //     [1, 8],
  //     [1, 10],
  //   ],
  // },

  // {
  //   letter: "O",
  //   letterPosition: { row: 0, col: 12, position: "bottom" },
  //   morse: "---",
  //   morsePosition: [
  //     [1, 8],
  //     [1, 10],
  //     [1, 12],
  //   ],
  // },

  // {
  //   letter: "V",
  //   letterPosition: { row: 3, col: 2, position: "left" },
  //   morse: "...-",
  //   morsePosition: [
  //     [1, 5],
  //     [1, 3],
  //     [1, 1],
  //     [3, 1],
  //   ],
  // },

  // {
  //   letter: "U",
  //   letterPosition: { row: 3, col: 4, position: "left" },
  //   morse: "..-",
  //   morsePosition: [
  //     [1, 5],
  //     [1, 3],
  //     [3, 3],
  //   ],
  // },

  // {
  //   letter: "A",
  //   letterPosition: { row: 3, col: 6, position: "left" },
  //   morse: ".-",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //   ],
  // },

  // {
  //   letter: "G",
  //   letterPosition: { row: 3, col: 10, position: "right" },
  //   morse: "--.",
  //   morsePosition: [
  //     [1, 8],
  //     [1, 10],
  //     [3, 11],
  //   ],
  // },

  // {
  //   letter: "Q",
  //   letterPosition: { row: 3, col: 13, position: "left" },
  //   morse: "--.-",
  //   morsePosition: [
  //     [1, 8],
  //     [1, 10],
  //     [3, 11],
  //     [3, 12],
  //   ],
  // },

  // {
  //   letter: "F",
  //   letterPosition: { row: 4, col: 4, position: "left" },
  //   morse: "..-.",
  //   morsePosition: [
  //     [1, 5],
  //     [1, 3],
  //     [3, 3],
  //     [4, 3],
  //   ],
  // },

  // {
  //   letter: "Z",
  //   letterPosition: { row: 4, col: 10, position: "right" },
  //   morse: "--..",
  //   morsePosition: [
  //     [1, 8],
  //     [1, 10],
  //     [3, 11],
  //     [4, 11],
  //   ],
  // },

  // {
  //   letter: "K",
  //   letterPosition: { row: 5, col: 10, position: "bottom" },
  //   morse: "-.-",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [6, 10],
  //   ],
  // },

  // {
  //   letter: "Y",
  //   letterPosition: { row: 5, col: 12, position: "bottom" },
  //   morse: "-.--",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [6, 10],
  //     [6, 12],
  //   ],
  // },

  // {
  //   letter: "L",
  //   letterPosition: { row: 6, col: 2, position: "bottom" },
  //   morse: ".-..",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //     [7, 3],
  //     [7, 2],
  //   ],
  // },

  // {
  //   letter: "R",
  //   letterPosition: { row: 6, col: 3, position: "bottom" },
  //   morse: ".-.",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //     [7, 3],
  //   ],
  // },

  // {
  //   letter: "N",
  //   letterPosition: { row: 6, col: 8, position: "right" },
  //   morse: "-.",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //   ],
  // },

  // {
  //   letter: "W",
  //   letterPosition: { row: 8, col: 6, position: "left" },
  //   morse: ".--",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //     [8, 5],
  //   ],
  // },

  // {
  //   letter: "C",
  //   letterPosition: { row: 8, col: 11, position: "top" },
  //   morse: ".-.-",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [6, 10],
  //     [7, 11],
  //   ],
  // },

  // {
  //   letter: "P",
  //   letterPosition: { row: 9, col: 2, position: "right" },
  //   morse: ".--.",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //     [8, 5],
  //     [9, 3],
  //   ],
  // },

  // {
  //   letter: "D",
  //   letterPosition: { row: 9, col: 8, position: "right" },
  //   morse: "-..",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [9, 9],
  //   ],
  // },

  // {
  //   letter: "X",
  //   letterPosition: { row: 9, col: 11, position: "left" },
  //   morse: "-..-",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [9, 9],
  //     [9, 10],
  //   ],
  // },
  // {
  //   letter: "J",
  //   letterPosition: { row: 10, col: 6, position: "left" },
  //   morse: ".---",
  //   morsePosition: [
  //     [1, 5],
  //     [3, 5],
  //     [8, 5],
  //     [10, 5],
  //   ],
  // },
  // {
  //   letter: "B",
  //   letterPosition: { row: 10, col: 8, position: "right" },
  //   morse: "-...",
  //   morsePosition: [
  //     [1, 8],
  //     [6, 9],
  //     [9, 9],
  //     [10, 9],
  //   ],
  // },
];

export const ringCells = [
  [1, 0],
  [1, 1],
  [1, 3],
  [1, 5],
  [3, 11],
  [4, 3],
  [4, 11],
  [6, 9],
  [7, 2],
  [7, 3],
  [7, 11],
  [9, 3],
  [9, 9],
  [10, 9],
];

export const squareCells = [
  [1, 8],
  [1, 10],
  [1, 12],
  [3, 1],
  [3, 3],
  [3, 5],
  [3, 12],
  [6, 10],
  [6, 12],
  [8, 5],
  [9, 10],
  [10, 5],
];

export const connectCells = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 11],
  [2, 1],
  [2, 3],
  [2, 5],
  [2, 9],
  [2, 11],
  [3, 3],
  [3, 5],
  [3, 9],
  [3, 11],
  [4, 5],
  [4, 9],
  [5, 5],
  [5, 9],
  [6, 5],
  [6, 9],
  [6, 10],
  [6, 11],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 9],
  [8, 5],
  [8, 9],
  [9, 4],
  [9, 5],
  [9, 9],
];
