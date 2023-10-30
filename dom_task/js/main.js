"use strict";

// getElementByTagName
// getElementById
// getElementByClassName
// const todoList=document.getElementById("li");
// todoList.forEach=(function(todo){
//     console.log(todo);
// })
// const todoList = Array.from(
//   document.querySelectorAll("button:nth-child(even)")
// );
// todoList.forEach(function (todo) {
//   todo.style.backgroundColor = "lightGrey";
// });
const button = document.querySelectorAll("#accordion button");
const p = document.querySelectorAll("#accordion p");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    for (let j = 0; j < p.length; j++) {
      p[j].classList.remove("active");
    }
    this.nextElementSibling.classList.add("active");
  });
}
