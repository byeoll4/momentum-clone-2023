const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];
// 변수 지정, 가지고 있는 이미지들을 배열로 만듦

const chosenImage = images[Math.floor(Math.random() * images.length)];
// Math.random(), Math.floor()를 이용하여 images(배열)에 들어있는 랜덤한 이미지를 가져오는 변수 지정

const bgImage = document.createElement("img");
// document에 "img"라는 element를 만드는 변수 지정

bgImage.src = `img/${chosenImage}`;
// bgImage(변수)의 src는 `img/${chosenImage}`->string

document.body.appendChild(bgImage);
