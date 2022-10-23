function printName(person: {first: string, last: string }): void {
  console.log(`${person.first} ${person.last}`);
};

printName({first: "Thomas", last: "Jenkins"});

let coordinate:{ x: number, y: number} = {x: 34, y: 2};

// printName({first: "Mick", last: "Jagger", age: 74});
const singer ={first: "Mick", last: "Jagger", age: 74}
// pengecualian utk var yg udah diberikan object akan tetep jalan cuma
// yang dicek tetep dari data obeject yg pertama, sisanya akan di ignore
printName(singer);

/**
 * old version
 */
// type Point = {
//   x: number;
//   y: number;
// };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point{
//   return {x: point.x * 2, y: point.y *2};
// }
/**
 * end of old version
 */

type myNum = number;
let age: myNum = 1321;

type Song = {
  title: string, 
  artist: string, 
  numStreams: number, 
  credits: { 
    producer: string, 
    writer: string
  }
};

function calculatePayout(song: Song): number{
  return song.numStreams * .0033
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}


const mySong: Song = {
  title: "hello",
  artist: "hahaha",
  numStreams: 1231,
  credits: {
    producer: "dewa",
    writer: "made",
  }
}


const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = {x: 1, y: 3, z: 9};

type User = {
  readonly id: number,
  username: string;
}

const user: User = {
  id: 12312,
  username: "catgurl",
}

console.log(user.id);
// user.id = 1231;

type Circle = {
  radius: number;
}

type Colorful = {
  color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 3,
  color: "Yellow",
};

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & {
  age: number;
}

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
}