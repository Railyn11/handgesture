// Alphabet array for all letters A to Z with background and audio
const alphabet = [
    { letter: "A", image: "Aa.jpg", audio: "A.mp3" },
    { letter: "B", image: "Bb.jpg", audio: "B.mp3" },
    { letter: "C", image: "Cc.jpg", audio: "C.mp3" },
    { letter: "D", image: "Dd.jpg", audio: "D.mp3" },
    { letter: "E", image: "Ee.jpg", audio: "E.mp3" },
    { letter: "F", image: "Ff.jpg", audio: "F.mp3" },
    { letter: "G", image: "Gg.jpg", audio: "G.mp3" },
    { letter: "H", image: "Hh.jpg", audio: "H.mp3" },
    { letter: "I", image: "Ii.jpg", audio: "I.mp3" },
    { letter: "J", image: "Jj.jpg", audio: "J.mp3" },
    { letter: "K", image: "Kk.jpg", audio: "K.mp3" },
    { letter: "L", image: "Ll.jpg", audio: "L.mp3" },
    { letter: "M", image: "Mm.jpg", audio: "M.mp3" },
    { letter: "N", image: "Nn.jpg", audio: "N.mp3" },
    { letter: "O", image: "Oo.jpg", audio: "O.mp3" },
    { letter: "P", image: "Pp.jpg", audio: "P.mp3" },
    { letter: "Q", image: "Qq.jpg", audio: "Q.mp3" },
    { letter: "R", image: "Rr.jpg", audio: "R.mp3" },
    { letter: "S", image: "Ss.jpg", audio: "S.mp3" },
    { letter: "T", image: "Tt.jpg", audio: "T.mp3" },
    { letter: "U", image: "Uu.jpg", audio: "U.mp3" },
    { letter: "V", image: "Vv.jpg", audio: "V.mp3" },
    { letter: "W", image: "Ww.jpg", audio: "W.mp3" },
    { letter: "X", image: "Xx.jpg", audio: "X.mp3" },
    { letter: "Y", image: "Yy.jpg", audio: "Y.mp3" },
    { letter: "Z", image: "Zz.jpg", audio: "Z.mp3" }
  ];
  
  let currentIndex = 0;
  let currentAudio = null; // Store the current audio object
  
  function updateLetter() {
    const alphabetCard = document.getElementById('alphabet-card');
    const letterElement = alphabetCard.querySelector('.letter');
    const backgroundElement = alphabetCard.querySelector('.letter-background');
  
    letterElement.textContent = "";
    backgroundElement.style.backgroundImage = `url(${alphabet[currentIndex].image})`;
  
  }
  
  function playPronunciation() {
    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    // Start new audio
    currentAudio = new Audio(alphabet[currentIndex].audio);
    currentAudio.play();
  }

  function prevLetter() {
    if (currentIndex > 0) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex--;
      updateLetter();
    }
  }
  
  function nextLetter() {
    if (currentIndex < alphabet.length - 1) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex++;
      updateLetter();
    }
  }
  
  window.onload = updateLetter;