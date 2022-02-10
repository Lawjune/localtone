let delay_ms = 200;

const btn_set = document.querySelector(".set-delay");
btn_set.addEventListener("click", () => {
  delay_ms = document.getElementById("delay-ms").value;
  alert("New delay duration : " + delay_ms + " milliseconds.");
});

const btn_1 = document.querySelector(".btn-1");
// const audio_1 = new Audio("./res/button-rollover.mp3");
const audio_1 = document.getElementById("audio-1");

const btn_2 = document.querySelector(".btn-2");
// const audio_2 = new Audio("./res/button-switch.mp3");
const audio_2 = document.getElementById("audio-2");

const btn_3 = document.querySelector(".btn-3");
// const audio_3 = new Audio("./res/button-check.mp3");
const audio_3 = document.getElementById("audio-3");

btn_1.addEventListener("click", () => {
  setTimeout(() => {
    audio_1.play();
  }, delay_ms);
});

btn_2.addEventListener("click", () => {
  setTimeout(() => {
    audio_2.play();
  }, delay_ms);
});

btn_3.addEventListener("click", () => {
  setTimeout(() => {
    audio_3.play();
  }, delay_ms);
});
