//// #2.6 Objects
const player = {
  // const라는 object, 각각은 property
  name: "nico",
  points: 10,
  human: true,
};

console.log(player);
player.fat = false; // const 안의 무언가를 바꾸는 것은 ok
// player = false; -- player라는 const 자체를 바꾸는 것이므로 에러 발생
player.lastName = "potato"; // object에 추가
console.log(player);
player.points += 15;
console.log(player.points);

//// #2.7 ~.8 Functions
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);

//// #2.13 ~ 15 Conditionals
const myAge = parseInt(prompt("How old are you?"));

if (isNaN(myAge) || myAge < 0) {
  console.log("Please write a real positive number");
} else if (myAge >= 18 && myAge <= 50) {
  console.log("You are too young.");
} else if (myAge > 50 && myAge <= 80) {
  console.log("You should exercise");
}

//// #3.5 More Events
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowcopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick);
// 또는 h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
// 또는 h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowcopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//// #3.6 CSS in Javascript
const h2 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h2.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h2.style.color = newColor;
}

h2.addEventListener("click", handleTitleClick);

//// #3.7~8 CSS inJavascript part Two - with [style.css]
const h3 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = "clicked"; // 변수로 만들어서 오류 최소화하기
  // if (h3.classList.contains(clickedClass)) {
  //   h3.classList.remove(clickedClass);
  // } else {
  //   h3.classList.add(clickedClass);
  // }
  // -> toggle function으로 더 줄이기
  h3.classList.toggle("clicked");
  // toggle: h3의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면, clicked를 제거하고 없으면 추가함.
}

h3.addEventListener("click", handleTitleClick);
