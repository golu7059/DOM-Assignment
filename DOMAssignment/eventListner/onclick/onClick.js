// first catching the  div by class name
const btnClick = document.getElementsByClassName('message')[0];

// now adding event listner
btnClick.addEventListener("click", function() {
    const images = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "50vw";
    document.body.style.backgroundPosition = "center";
  });

 