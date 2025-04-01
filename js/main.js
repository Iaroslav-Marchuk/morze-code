import { createGrid } from "./grid.js";
import { hoverEffect } from "./events.js";

const gridContainer = document.querySelector(".grid-container");
createGrid(11, 14, gridContainer);

hoverEffect();
