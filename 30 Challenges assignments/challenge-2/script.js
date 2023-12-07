const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause Sound';
  } else {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playButton.textContent = 'Play Sound';
  }
});
