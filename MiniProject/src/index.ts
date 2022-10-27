const btn = document.getElementById("btn")! as HTMLButtonElement; //put exclamation(!) at the end, means that we make sure that this would not null
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

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

function handleSubmit (e: SubmitEvent) {
  e.preventDefault();
  console.log("SUBMITTED");
}

form.addEventListener("submit", handleSubmit);