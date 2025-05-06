window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const section     = document.getElementById('explore');
  const faceImage   = section.querySelector('img');
  const textInput   = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton  = section.querySelector('button');


  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    if (!synth) return;
    voices = synth.getVoices();
    voiceSelect.length = 1;
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})` +
                           (voice.default ? ' — DEFAULT' : '');
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedName = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
    utterThis.voice = voices.find(v => v.name === selectedName) || null;

    utterThis.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    synth.speak(utterThis);
    textInput.blur();
  });
}
