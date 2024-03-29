function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}

const el = document.getElementById("idk");
if (el) {
    el
} else {
    el
}

const printLetters  = (word? : string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log("You did not pass in a word!");
    }
};

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
    if (x == y) {
        // x.toUpperCase();
    }
}

someDemo(3, "3");
// End Of Equality Narrowing

interface Movie {
    title: string,
    duration: number,
}

interface  TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number,
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

// console.log(getRuntime({title: "Amadeus", duration: 160 }));
// console.log(getRuntime({title: "Spongebob", numEpisodes: 100, episodeDuration: 60}));

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.getUTCDate());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username:string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if(entity instanceof User) {
        entity
    }else {
        entity
    }
}

// Type Predicates
interface Cat {
    name: string,
    numLives: number,
}

interface Dog {
    name: string,
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        animal
        return "Meow";
    } else {
        animal
        return "Bark";
    }
}

// Discriminated Unions
interface Rooster {
    name: string,
    weight: number,
    age: number
    kind: "rooster",
}

interface Cow {
    name: string,
    weight: number;
    age: number;
    kind: "cow",
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig",
}

interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: "sheep",
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case ("pig") :
            return "Oink!";
        case ("cow") :
            return "Mooo!";
        case ("rooster") :
            return "Cockadoodledledoo!";
        case ("sheep") :
            return "Baa!";
        default:
    //         We should never make it here, if we handle all case correctly
    //         const shouldNeverGetHere: never = animal
    //         return shouldNeverGetHere;
                const _exhaustiveCheck: never = animal
                return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "Steview Chciks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};

console.log(stevie);