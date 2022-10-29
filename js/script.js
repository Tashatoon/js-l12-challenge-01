const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const getImage = async function () {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100");
const images = await res.json();
    selectRandomImage(images);
console.log(images);
};
const selectRandomImage = function (images) {
    const randonIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    randomImages = images[randomIndex];
    console.log(randomImages);
    displayImage = images[randomIndex];
};
const displayImage = function (randomImage) {
    const author = randomIndex.author;
   const imageAddress = randomIndex.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imaDiv.classlist.remove = "hide";
};
  button.addeventListener("click", function (){
  getImage();
  });
