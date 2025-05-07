// expose.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  // TODO
  const section     = document.getElementById('expose');
  
  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = section.querySelector('img');              
  const hornAudio    = section.querySelector('audio');             

  const playButton   = section.querySelector('button'); 
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = section.querySelector('#volume-controls img'); 


//drop down menu  
  hornSelect.addEventListener('change', function() {
    const choice = hornSelect.value;
    hornImage.src = 'assets/images/' + choice + '.svg';
    hornAudio.src = 'assets/audio/' + choice + '.mp3';
  });

//change the volume
  volumeSlider.addEventListener('input', function() {
    const vol = Number(volumeSlider.value); // 0–100

    //vol = 0 icon dispays 
    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    hornAudio.volume = vol / 100;
  });

  
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', function() {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}


