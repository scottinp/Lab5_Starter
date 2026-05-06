// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //refs
  const faceImage = document.querySelector('#explore > img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  const synth = window.speechSynthesis;
  let voices = [];

  // voices drop down
  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.length = 1;

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoiceList;
  }

  // talk button
  talkButton.addEventListener('click', () => {
    const textToSpeak = textArea.value;
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // apply voice
    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== 'select' && voices[selectedIndex]) {
      utterance.voice = voices[selectedIndex];
    }

    // talking mouth when start
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    const resetFace = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
    utterance.addEventListener('end', resetFace);
    utterance.addEventListener('error', resetFace);

    synth.speak(utterance);
  });
}
