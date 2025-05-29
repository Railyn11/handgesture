const shapes = [
    { name: "Circle", image: "https://webstockreview.net/images/circle-clipart-circle-shape.png", audio: "circle.mp3" },
    { name: "Square", image: "http://getdrawings.com/cliparts/square-clipart-3.jpg", audio: "square.mp3" },
    { name: "Triangle", image: "https://clipartcraft.com/images/triangle-clipart-cute-4.png", audio: "triangle.mp3" },
    { name: "Rectangle", image: "https://illustoon.com/photo/7426.png", audio: "rectangle.mp3" },
    { name: "Star", image: "https://www.clipartqueen.com/image-files/cartoon-star.png", audio: "star.mp3" },
    { name: "Heart", image: "https://www.clipartkey.com/mpngs/m/24-240634_heart-shape-clipart-heart-shape-with-face-clipart.png", audio: "heart.mp3" }
  ];
  
  let currentIndex = 0;
  let currentAudio = null;
  
  function updateShape() {
    const card = document.getElementById("shape-card");
    const background = card.querySelector(".shape-background");
    const nameElement = document.getElementById("shape-name");
  
    background.style.backgroundImage = `url(${shapes[currentIndex].image})`;
    nameElement.textContent = shapes[currentIndex].name;
  }
  
  
function playShape() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(shapes[currentIndex].audio);
  currentAudio.play();
}

function prevShape() {
    if (currentIndex > 0) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex--;
      updateShape();
    }
  }
  
  function nextShape() {
    if (currentIndex < shapes.length - 1) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentIndex++;
      updateShape();
    }
  }
  
  window.onload = updateShape;
  