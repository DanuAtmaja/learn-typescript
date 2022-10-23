// type Point = {
//   x: number,
//   y: number
// };

// const pt: Point = {x: 213, y: 12}:

//instead

interface Point {
  x: number;
  y: number;
};

const pt: Point = {x: 123, y: 1234};

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
};

const thomas: Person = {id: 12312, first: "Thomas", last: "Hardy", 
sayHi: () => { return "Hello" }};

thomas.first = "Hearlaeka";
// thomas.id = 1231;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
};

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  }
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
  name: string;
  age: number;
};

interface Dog {
  breed: string;
  bark(): string;
};

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog"
}

interface Human {
  name: string;
};

interface Employee {
  readonly id: number;
  email: string;
};

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
};

const pierre: Engineer = {
  name: "Pierre",
  id: 1231,
  email: "made@mailinator.com",
  level: "senior",
  languages: ["JS", "Python"],
}

type Color = "red" | "blue";

type Chicken = {
  breed: string,
};

