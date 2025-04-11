export const cells = [
  {
    letter: {
      coord: [1, 1],
      orientation: "bottom",
      symbol: "H",
    },

    morseSymbol: {
      morseCode: "....",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
        { coord: [2, 2], symbol: "dot" },
        { coord: [2, 1], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 1],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
      ],
    },
  },

  // {
  //   letter: "S",
  //   letterPosition: { coord: [1, 2], orientation: "bottom" },
  //   morse: "...",
  //   morsePosition: [
  //     { coord: [2, 6], symbol: "dot" },
  //     { coord: [2, 4], symbol: "dot" },
  //     { coord: [2, 2], symbol: "dot" },
  //   ],
  //   morseConnection: [
  //     { from: [2, 2], to: [2, 6], type: "h", startHalf: true, endHalf: false },
  //   ],
  // },

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

  {
    letter: {
      coord: [7, 3],
      orientation: "bottom",
      symbol: "L",
    },

    morseSymbol: {
      morseCode: ".-..",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
        { coord: [8, 4], symbol: "dot" },
        { coord: [8, 3], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 6],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
        {
          from: [2, 6],
          to: [8, 6],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [8, 3],
          to: [8, 6],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

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
  //   letter: {
  //     coord: [7, 9],
  //     orientation: "right",
  //     symbol: "N",
  //   },

  //   morseSymbol: {
  //     morseCode: "-.",
  //     morsePosition: [
  //       { coord: [2, 9], symbol: "dash" },
  //       { coord: [7, 10], symbol: "dot" },
  //     ],
  //     morseConnection: [
  //       {
  //         from: [2, 9],
  //         to: [2, 10],
  //         type: "h",
  //         startHalf: false,
  //         endHalf: true,
  //       },
  //       {
  //         from: [2, 10],
  //         to: [7, 10],
  //         type: "v",
  //         startHalf: true,
  //         endHalf: true,
  //       },
  //     ],
  //   },
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

  {
    letter: {
      coord: [9, 12],
      orientation: "top",
      symbol: "C",
    },

    morseSymbol: {
      morseCode: ".-.-",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [7, 11], symbol: "dash" },
        { coord: [8, 12], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 10],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
        {
          from: [2, 10],
          to: [7, 10],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [7, 10],
          to: [7, 12],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [7, 12],
          to: [8, 12],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
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

// export const ringCells = [
//   [1, 0],
//   [1, 1],
//   [1, 3],
//   [1, 5],
//   [3, 11],
//   [4, 3],
//   [4, 11],
//   [6, 9],
//   [7, 2],
//   [7, 3],
//   [7, 11],
//   [9, 3],
//   [9, 9],
//   [10, 9],
// ];

// export const squareCells = [
//   [1, 8],
//   [1, 10],
//   [1, 12],
//   [3, 1],
//   [3, 3],
//   [3, 5],
//   [3, 12],
//   [6, 10],
//   [6, 12],
//   [8, 5],
//   [9, 10],
//   [10, 5],
// ];
