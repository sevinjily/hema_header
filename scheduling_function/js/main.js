// function second() {
//   console.log("Welcome to our course ");
//   let dt = new Date();

//   console.log(dt.toLocaleTimeString());
//   setTimeout(second, 3000);
// }
// let button = document.getElementsByClassName(".btn1");
// function example() {
//   alert("hello");
// }
// setInterval(example, 2000);

// button.addEventListener("click", function () {
//   clearTimeout();
// });

// second();

// let id = setTimeout(second, 3000);
// console.log(id);

// let button = document.querySelector(".btn1");
// function welcome(name) {
//   return "Hello " + name;
// }

// let setInt = setInterval(() => {
//   console.log(welcome("Sevinc"));
// }, 2000);
// button.addEventListener("click", function () {
//   clearTimeout(setInt);
// });
let button = document.querySelector(".btn1");
button.addEventListener("click", function () {
  this.style.color = "red";
});
