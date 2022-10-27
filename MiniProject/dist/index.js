"use strict";
const btn = document.getElementById("btn"); //put exclamation(!) at the end, means that we make sure that this would not null
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// (<HTMLInputElement>input).value // is not work on jsx/tsx
// // btn.addEventListener("click", function() {
// //   alert("CLICKED!");
// // });
// // let mystery: unknown = "Hello World!!!";
// // // const numbChars = mystery.length; // this will showing the error because the type is unknown
// // const numChars = (mystery as string).length;
// btn.addEventListener("click", function() {
//   alert(input.value);
//   input.value = "";
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    list.append(newLi);
    newLi.append(checkbox);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
