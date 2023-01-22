/*
class Player {
    public readonly first: string;
    public readonly last: string;
    private score: number = 0;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    secretMethod(): void {
        console.log("SECRET METHOD!!");
    }
}
 */

/**
 * Params Properties Shorthand
 */
class Player {
    constructor(
        public first: string,
        public last: string,
        // private _score: number
        protected _score: number
    ) {}

    secretMethod(): void {
        console.log("SECRET METHOD!!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number)  {
        if(newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 999;
    }
}

// const elton = new Player("Elton", "Steele");
const elton = new Player("Elton", "Steele", 100);
// elton.score = 23;
// elton.secretMethod();
console.log(elton.fullName);
console.log(elton.score);
// elton.score = "2";

/**
 * Interface
 */
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}
class Bike implements Colorful{
    constructor(public  color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print(): void {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red");
const jaket1 = new Jacket("Prada", "black");

/**
 * Abstract
 */
abstract class Employee {
    constructor(public first: string, public last: string) {
    }
    abstract getPay(): number;
    greet() {
        console.log("Hello!");
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends  Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());


