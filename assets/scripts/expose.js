// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // refs
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audioElement = document.querySelector('audio');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const playButton = document.querySelector('button');

  // confetti
  const jsConfetti = new JSConfetti();

  // horns
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    if (selected === 'select') return;

    // update image and audio for the chosen horn
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = selected.replace('-', ' ');
    audioElement.src = `assets/audio/${selected}.mp3`;
  });

  // slider
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);

    audioElement.volume = volume / 100;

    // swap volume icon 
    let iconLevel;
    if (volume === 0) {
      iconLevel = 0;
    } else if (volume < 33) {
      iconLevel = 1;
    } else if (volume < 67) {
      iconLevel = 2;
    } else {
      iconLevel = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${iconLevel}.svg`;
    volumeIcon.alt = `Volume level ${iconLevel}`;
  });

  //play button
  playButton.addEventListener('click', () => {
    if (!audioElement.src) return;

    audioElement.play();

    //  confetti only when  party horn 
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
