// function square(num: number) {
//   return num * num;
// }

//function greet(person: string) {
//    return `Hi there, ${person}!`;
//}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("TOnya Harding");

doSomething("ChickenFace", 76, true);

function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

greet();
greet("Tony");

function square(num: number):number {
  return num * num;
}

square(2);

const add = (x: number, y:number): number => {
  return x + y;
}

// function random(num: number) {
//   if(Math.random() < 0.5) {
//     return num.toString();
//   }

//   return num;
// }

const colors = ["red", "orange", "yellow"];
colors.map(color => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
}

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never{
  while(true){
    console.log("Game loop running!");
  }
}