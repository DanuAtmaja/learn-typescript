// const btn = document.getElementById("btn")!; //put exclamation(!) at the end, means that we make sure that this would not null

// btn.addEventListener("click", function() {
//   alert("CLICKED!");
// });

let mystery: unknown = "Hello World!!!";

// const numbChars = mystery.length; // this will showing the error because the type is unknown
const numChars = (mystery as string).length;