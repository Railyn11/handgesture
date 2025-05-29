const animals = [
    { name: "Lion", image: "http://clipart-library.com/img/1633551.png" },
    { name: "Elephant", image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00077427_yjtgnj.jpg" },
    { name: "Giraffe", image: "https://static.vecteezy.com/system/resources/previews/016/761/888/original/animal-giraffe-isolated-png.png" },
    { name: "Tiger", image: "https://img.freepik.com/premium-photo/tiger-isolated-white-background_268174-942.jpg?w=2000" },
    { name: "Zebra", image: "https://img.freepik.com/premium-photo/zebra-white-background-isolated_198067-114.jpg?w=2000" },
    { name: "Monkey", image: "https://img.freepik.com/premium-photo/monkey-with-white-background-black-nose_880935-1956.jpg?w=2000" },
    { name: "Kangaroo", image: "https://img.freepik.com/premium-photo/kangaroo-white-background-isolated_198067-109.jpg?w=2000" },
    { name: "Panda", image: "https://classroomclipart.com/image/static7/preview2/photo-panda-isolated-on-white-background-62123.jpg" },
    { name: "Dolphin", image: "https://www.pngplay.com/wp-content/uploads/6/Dolphin-Transparent-PNG.png" },
    { name: "Penguin", image: "https://static.vecteezy.com/system/resources/previews/022/165/721/non_2x/cute-penguin-white-belly-black-penguin-beautiful-penguin-free-png.png" },
    { name: "Bear", image: "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-brown-bear-wild-animal-transparent-on-white-background-png-image_6655698.png" },
    { name: "Fox", image: "https://img.freepik.com/premium-photo/hyperrealistic-photograph-fox-white-background_1018912-1535.jpg" },
    { name: "Rabbit", image: "http://media.istockphoto.com/photos/european-rabbit-2-months-old-oryctolagus-cuniculus-against-white-picture-id160333372?k=6&m=160333372&s=612x612&w=0&h=ZQQ6329O141tbwuWXUqYh4uTCm9vxHcNPohm-sgoi5Q=" },
    { name: "Turtle", image: "https://thumbs.dreamstime.com/b/sea-turtle-realistic-style-white-background-275635593.jpg" },
    { name: "Camel", image: "https://img.freepik.com/premium-photo/camel-is-standing-front-white-background_435599-146.jpg?w=2000" },
    { name: "Hippopotamus", image: "https://classroomclipart.com/image/static7/preview2/photo-large-hippopotamus-side-view-isolated-on-white-background-61305.jpg" },
    { name: "Peacock", image: "https://img.freepik.com/premium-photo/peacock-with-white-background-high-quality-ultra-hd_889056-34635.jpg?w=2000" },
    { name: "Owl", image: "https://img.freepik.com/premium-photo/beautiful-realistic-owl-white-background-generative-by-ai-technology_802212-55.jpg?w=2000" },
    { name: "Crocodile", image: "https://purepng.com/public/uploads/large/purepng.com-green-crocodilecrocodilealigatorcroccrocodiles-441520278714nkoep.png" },
    { name: "Deer", image: "https://static.vecteezy.com/system/resources/previews/009/337/602/large_2x/spotted-deer-isolated-on-white-background-include-clipping-path-photo.jpg" },

  ];
  
  function loadAnimals() {
    const gallery = document.getElementById("animal-gallery");
    animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "animal-card";
      card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}" />
        <h2>${animal.name}</h2>
      `;
      card.onclick = () => showModal(animal);
      gallery.appendChild(card);
    });
  }
  
  function showModal(animal) {
    document.getElementById("modalAnimalName").textContent = animal.name;
    document.getElementById("modalAnimalImage").src = animal.image;
    document.getElementById("animalModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("animalModal").style.display = "none";
  }
  
  window.onload = loadAnimals;
  