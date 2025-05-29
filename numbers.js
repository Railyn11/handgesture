// Array from 1 to 50
const numbers = [
    { number: "1", image: "http://clipart-library.com/img/1803676.png", audio: "1.mp3" },
    { number: "2", image: "https://www.clipartkey.com/mpngs/m/47-475089_numbers-cute-number-2-clipart.png", audio: "2.mp3" },
    { number: "3", image: "http://clipart-library.com/img/1803968.png", audio: "3.mp3" },
    { number: "4", image: "http://clipart-library.com/image_gallery/n674920.png", audio: "4.mp3" },
    { number: "5", image: "http://clipart-library.com/image_gallery/n674970.png", audio: "5.mp3" },
    { number: "6", image: "https://clipart-library.com/image_gallery/n674999.png", audio: "6.mp3" },
    { number: "7", image: "http://clipart-library.com/image_gallery/n716737.png", audio: "7.mp3" },
    { number: "8", image: "https://www.pngitem.com/pimgs/m/526-5262704_cute-number-eight-png-clipart-image-numbers-clipart.png", audio: "8.mp3" },
    { number: "9", image: "https://charatoon.com/photo/6861.png", audio: "9.mp3" },
    { number: "10", image: "https://www.pngplay.com/wp-content/uploads/1/10-Number-PNG-Image.png", audio: "10.mp3" },
    { number: "11", image: "https://www.clipartkey.com/mpngs/m/91-914180_number-11-clipart.png", audio: "11.mp3" },
    { number: "12", image: "http://getdrawings.com/cliparts/number-12-clipart-21.png", audio: "12.mp3" },
    { number: "13", image: "https://s.clipartkey.com/mpngs/s/65-653445_spanish-idioms-with-numbers-13-colors-number-1.png", audio: "13.mp3" },
    { number: "14", image: "https://www.pngitem.com/pimgs/m/357-3574911_number-14-clipart-hd-png-download.png", audio: "14.mp3" },
    { number: "15", image: "https://clipart-library.com/2023/image-6227146ea864f.png", audio: "15.mp3" },
    { number: "16", image: "https://cdn.pnggallery.com/wp-content/uploads/16-number-03.png", audio: "16.mp3" },
    { number: "17", image: "https://i.pinimg.com/originals/4c/ec/e3/4cece355ef2d44dbe7c2f6a4a234d41c.jpg", audio: "17.mp3" },
    { number: "18", image: "https://www.kindpng.com/picc/m/251-2519360_number-18-clip-art-hd-png-download.png", audio: "18.mp3" },
    { number: "19", image: "https://clipart-library.com/2023/6287080.png", audio: "19.mp3" },
    { number: "20", image: "https://media.baamboozle.com/uploads/images/503685/1638795643_202530.png", audio: "20.mp3" },
  ];
  
  let currentIndex = 0;
  let currentAudio = null;
  
  function updateNumber() {
    const numberCard = document.getElementById('number-card');
    const numberElement = numberCard.querySelector('.number');
    const backgroundElement = numberCard.querySelector('.number-background');
  
    numberElement.textContent = ""; // Hidden
    backgroundElement.style.backgroundImage = `url(${numbers[currentIndex].image})`;
  
  }
  
  function playNumber() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    currentAudio = new Audio(numbers[currentIndex].audio);
    currentAudio.play();
  }
  
  function prevNumber() {
    if (currentIndex > 0) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex--;
      updateNumber();
    }
  }
  
  function nextNumber() {
    if (currentIndex < numbers.length - 1) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex++;
      updateNumber();
    }
  }
  
  window.onload = updateNumber;
  