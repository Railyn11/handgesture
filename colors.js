const colors = [
    { name: "Red", image: "http://www.solidbackgrounds.com/images/2560x1440/2560x1440-red-solid-color-background.jpg", audio: "red.mp3" },
    { name: "Blue", image: "https://tse3.mm.bing.net/th?id=OIP.vra_Nq_xYqtOKfJWEE9NNwHaEK&pid=Api&P=0&h=180", audio: "blue.mp3" },
    { name: "Yellow", image: "https://tse2.mm.bing.net/th?id=OIP.YZG-2Izzvi-V7ANxHWwxMgHaEo&pid=Api&P=0&h=180", audio: "yellow.mp3" },
    { name: "Green", image: "https://tse2.mm.bing.net/th?id=OIP.i2Xyg2lc5voJPtGXRfvFMwHaFk&pid=Api&P=0&h=180", audio: "green.mp3" },
    { name: "Orange", image: "https://tse2.mm.bing.net/th?id=OIP.T5HxOjomJmloBikvoaKQmwHaEo&pid=Api&P=0&h=180", audio: "orange.mp3" },
    { name: "Purple", image: "https://cdn.wallpapersafari.com/22/72/0TDxAP.jpg", audio: "purple.mp3" },
    { name: "Pink", image: "https://tse4.mm.bing.net/th?id=OIP.zcMPP9SCI_6hFOW40rQYXgHaEK&pid=Api&P=0&h=180", audio: "pink.mp3" },
    { name: "Black", image: "https://cdn.wallpapersafari.com/96/75/LDgOH7.jpg", audio: "black.mp3" },
    { name: "White", image: "https://www.solidbackgrounds.com/images/3840x2160/3840x2160-white-solid-color-background.jpg", audio: "white.mp3" }
  ];
  
  let currentIndex = 0;
  let currentAudio = null;

  
  function updateColor() {
    const card = document.getElementById("color-card");
    const background = card.querySelector(".color-background");
    const nameElement = document.getElementById("color-name");
  
    background.style.backgroundImage = `url(${colors[currentIndex].image})`;
    nameElement.textContent = colors[currentIndex].name;
  
  }
  
  function playColor() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    currentAudio = new Audio(colors[currentIndex].audio);
    currentAudio.play();
  }
  
  function prevColor() {
    if (currentIndex > 0) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex--;
      updateColor();
    }
  }

  function nextColor() {
    if (currentIndex < colors.length - 1) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex++;
      updateColor();
    }
  }
  
  window.onload = updateColor;
  