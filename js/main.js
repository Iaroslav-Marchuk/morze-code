import { createGrid } from "./grid.js";
import { keyOn, setupInputPlayback } from "./events.js";

const gridContainer = document.querySelector(".grid-container");
createGrid(11, 14, gridContainer);
keyOn();
setupInputPlayback();
