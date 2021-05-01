const audioElement = document.querySelector('audio')
const button = document.querySelector('button');

const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;

const gain = audioCtx.createGain();

oscillator.connect(gain);
gain.connect(audioCtx.destination);

button.addEventListener('click', () => {
  audioElement.play()
  // oscillator.start(0);
  setTimeout(() => {
    audioElement.pause()
    // oscillator.stop(0);
    // oscillator.disconnect(0);
  }, 500)
})
