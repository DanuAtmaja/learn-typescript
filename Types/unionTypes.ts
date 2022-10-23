let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = {lat: 321.213, long: 23.123 }

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  } 
    price * tax;
}

// const nums: number[] = [1,2,3,4];
// const stuff: any[] = [1,2,3,4, true, "asdas", {}];

// const stuff: (number | string)[] = [1,2,3, "das", true]
// const stuff: number[] | string[] = [1,2,3, "das"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.123, long: 23.532});
coords.push({ x: 321, y: 12});

let zero: 0 = 0;

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "weds";