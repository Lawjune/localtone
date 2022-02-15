let delay_ms = 200;

const btn_set = document.querySelector(".set-delay");
btn_set.addEventListener("click", () => {
  delay_ms = document.getElementById("delay-ms").value;
  alert("New delay duration : " + delay_ms + " milliseconds.");
  // delay_ms = delay_ms - correction_factor;
});

const btn_1 = document.querySelector(".btn-1");
// const audio_1 = new Audio("./res/button-rollover.mp3");
const audio_1 = document.getElementById("audio-1");
const play_audio_1 = () => {
  console.log("play_audio_1");
  audio_1.play();
};

const btn_2 = document.querySelector(".btn-2");
// const audio_2 = new Audio("./res/button-switch.mp3");
const audio_2 = document.getElementById("audio-2");
const play_audio_2 = () => {
  console.log("play_audio_2");
  audio_2.play();
};

const btn_3 = document.querySelector(".btn-3");
// const audio_3 = new Audio("./res/button-check.mp3");
const audio_3 = document.getElementById("audio-3");
const play_audio_3 = () => {
  console.log("play_audio_3");
  audio_3.play();
};

btn_1.addEventListener("click", () => {
  setTimeout(play_audio_1, delay_ms);
});

btn_2.addEventListener("click", () => {
  setTimeout(play_audio_2, delay_ms);
});

btn_3.addEventListener("click", () => {
  setTimeout(play_audio_3, delay_ms);
});

const btn_music_play = document.querySelector(".btn-music-play");
// const btn_music_pause = document.querySelector(".btn-music-pause");
// const btn_music_stop = document.querySelector(".btn-music-stop");
const music = document.getElementById("music");
let music_playing_state = false;
const play_music = () =>
{
  if (music_playing_state)
  {
    music_playing_state = false;
    music.pause();
    btn_music_play.innerHTML = "play";
  } else
  {
    music_playing_state = true;
    music.play()
    btn_music_play.innerHTML = "pause"
  }
}

btn_music_play.addEventListener("click", play_music);
// btn_music_pause.addEventListener("click", () => music.pause());
// btn_music_stop.addEventListener("click", () => {
//   music.pause();
//   music.currentTime = 0;
// });

const btn_interval = document.querySelector(".btn-interval");
btn_interval.addEventListener("click", () => {
  const interval = document.getElementById("interval-ms").value;
  play_audio_2();
  setTimeout(() => play_audio_3(), interval);
});
