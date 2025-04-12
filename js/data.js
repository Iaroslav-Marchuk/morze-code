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
  {
    letter: {
      coord: [1, 2],
      orientation: "bottom",
      symbol: "S",
    },
    morseSymbol: {
      morseCode: "...",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
        { coord: [2, 2], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 2],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
      ],
    },
  },
  {
    letter: {
      coord: [1, 4],
      orientation: "bottom",
      symbol: "I",
    },
    morseSymbol: {
      morseCode: "..",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 4],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
      ],
    },
  },
  {
    letter: {
      coord: [1, 6],
      orientation: "bottom",
      symbol: "E",
    },
    morseSymbol: {
      morseCode: ".",
      morsePosition: [{ coord: [2, 6], symbol: "dot" }],
      morseConnection: [
        {
          from: [2, 6],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
      ],
    },
  },
  {
    letter: {
      coord: [1, 9],
      orientation: "bottom",
      symbol: "T",
    },
    morseSymbol: {
      morseCode: "-",
      morsePosition: [{ coord: [2, 9], symbol: "dash" }],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 9],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [1, 11],
      orientation: "bottom",
      symbol: "M",
    },
    morseSymbol: {
      morseCode: "--",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [2, 11], symbol: "dash" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 11],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [1, 13],
      orientation: "bottom",
      symbol: "O",
    },
    morseSymbol: {
      morseCode: "---",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [2, 11], symbol: "dash" },
        { coord: [2, 13], symbol: "dash" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 13],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [4, 3],
      orientation: "left",
      symbol: "V",
    },
    morseSymbol: {
      morseCode: "...-",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
        { coord: [2, 2], symbol: "dot" },
        { coord: [4, 2], symbol: "dash" },
      ],
      morseConnection: [
        {
          from: [2, 2],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
        {
          from: [2, 2],
          to: [4, 2],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [4, 5],
      orientation: "left",
      symbol: "U",
    },
    morseSymbol: {
      morseCode: "..-",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
        { coord: [4, 4], symbol: "dash" },
      ],
      morseConnection: [
        {
          from: [2, 4],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
        {
          from: [2, 4],
          to: [4, 4],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [4, 7],
      orientation: "left",
      symbol: "A",
    },
    morseSymbol: {
      morseCode: ".-",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
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
          to: [4, 6],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [4, 11],
      orientation: "right",
      symbol: "G",
    },
    morseSymbol: {
      morseCode: "--.",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [2, 11], symbol: "dash" },
        { coord: [4, 12], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 12],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
        {
          from: [2, 12],
          to: [4, 12],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [4, 14],
      orientation: "left",
      symbol: "Q",
    },
    morseSymbol: {
      morseCode: "--.-",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [2, 11], symbol: "dash" },
        { coord: [4, 12], symbol: "dot" },
        { coord: [4, 13], symbol: "dash" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 12],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
        {
          from: [2, 12],
          to: [4, 12],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [4, 12],
          to: [4, 13],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [5, 5],
      orientation: "left",
      symbol: "F",
    },
    morseSymbol: {
      morseCode: "..-.",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [2, 4], symbol: "dot" },
        { coord: [4, 4], symbol: "dash" },
        { coord: [5, 4], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 4],
          to: [2, 6],
          type: "h",
          startHalf: true,
          endHalf: false,
        },
        {
          from: [2, 4],
          to: [5, 4],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [5, 11],
      orientation: "right",
      symbol: "Z",
    },
    morseSymbol: {
      morseCode: "--..",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [2, 11], symbol: "dash" },
        { coord: [4, 12], symbol: "dot" },
        { coord: [5, 12], symbol: "dot" },
      ],
      morseConnection: [
        {
          from: [2, 9],
          to: [2, 12],
          type: "h",
          startHalf: false,
          endHalf: true,
        },
        {
          from: [2, 12],
          to: [5, 12],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [6, 11],
      orientation: "bottom",
      symbol: "K",
    },
    morseSymbol: {
      morseCode: "-.-",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [7, 11], symbol: "dash" },
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
          to: [7, 11],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
  {
    letter: {
      coord: [6, 13],
      orientation: "bottom",
      symbol: "Y",
    },
    morseSymbol: {
      morseCode: "-.--",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [7, 11], symbol: "dash" },
        { coord: [7, 13], symbol: "dash" },
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
          to: [7, 13],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

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

  {
    letter: {
      coord: [7, 4],
      orientation: "bottom",
      symbol: "R",
    },
    morseSymbol: {
      morseCode: ".-.",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
        { coord: [8, 4], symbol: "dot" },
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
          from: [8, 4],
          to: [8, 6],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

  {
    letter: {
      coord: [7, 9],
      orientation: "right",
      symbol: "N",
    },
    morseSymbol: {
      morseCode: "-.",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
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
      ],
    },
  },

  {
    letter: {
      coord: [9, 7],
      orientation: "left",
      symbol: "W",
    },
    morseSymbol: {
      morseCode: ".--",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
        { coord: [9, 6], symbol: "dash" },
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
          to: [9, 6],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

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

  {
    letter: {
      coord: [10, 3],
      orientation: "right",
      symbol: "P",
    },

    morseSymbol: {
      morseCode: ".--.",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
        { coord: [9, 6], symbol: "dash" },
        { coord: [10, 4], symbol: "dot" },
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
          to: [10, 6],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [10, 4],
          to: [10, 6],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

  {
    letter: {
      coord: [10, 9],
      orientation: "right",
      symbol: "D",
    },
    morseSymbol: {
      morseCode: "-..",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [10, 10], symbol: "dot" },
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
          to: [10, 10],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

  {
    letter: {
      coord: [10, 12],
      orientation: "left",
      symbol: "X",
    },
    morseSymbol: {
      morseCode: "-..-",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [10, 10], symbol: "dot" },
        { coord: [10, 11], symbol: "dash" },
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
          to: [10, 10],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
        {
          from: [10, 10],
          to: [10, 11],
          type: "h",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

  {
    letter: {
      coord: [11, 7],
      orientation: "left",
      symbol: "J",
    },
    morseSymbol: {
      morseCode: ".---",
      morsePosition: [
        { coord: [2, 6], symbol: "dot" },
        { coord: [4, 6], symbol: "dash" },
        { coord: [9, 6], symbol: "dash" },
        { coord: [11, 6], symbol: "dash" },
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
          to: [11, 6],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },

  {
    letter: {
      coord: [11, 9],
      orientation: "right",
      symbol: "B",
    },
    morseSymbol: {
      morseCode: "-...",
      morsePosition: [
        { coord: [2, 9], symbol: "dash" },
        { coord: [7, 10], symbol: "dot" },
        { coord: [10, 10], symbol: "dot" },
        { coord: [11, 10], symbol: "dot" },
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
          to: [11, 10],
          type: "v",
          startHalf: true,
          endHalf: true,
        },
      ],
    },
  },
];
