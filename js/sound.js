const dotAudio = new Audio("/sounds/dot.mp3");
const dashAudio = new Audio("/sounds/dash.mp3");

export function playDot() {
  dotAudio.currentTime = 0;
  dotAudio.play();
}

export function playDash() {
  dashAudio.currentTime = 0;
  dashAudio.play();
}
