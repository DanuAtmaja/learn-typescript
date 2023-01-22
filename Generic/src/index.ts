// const nums: Array<number> = [];
// const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// function identity(item: any):any {
//     return item;
// }

/**
 * declaration of input Type return same Type
 * in ex: identity string return string
 * @param item
 */
function identity<Type>(item: Type): Type {
    return item;
}

interface Cat {
    name: string;
    breed: string;
}

// identity<number>(7);
// identity<string>("hello");
// identity<Cat>({})

// function getRandomElement<T>(list: T[]): T {
//     const randIdx = Math.floor(Math.random() * list.length);
//     return list[randIdx];
// }
//
// console.log(getRandomElement<string>(["a", "b", "c"]));
// getRandomElement<number>([5,6,4,2,1,2]);
//
// getRandomElement(["a", "b", "abv"]);
//
function merge<T extends object,U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}

const comboObj = merge({ name: "colt" }, {pets: ["blue", "elton"]});
console.log(comboObj)

// merge<{name: string}, {pets: string[]}>({ name: "colt"}, { pets: ["blue", "elton" ] })

console.log(merge({ name: "Colt" }, { num: 9 }));

interface Lengthy {
    length: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }

function printDoubleLength(thing: Lengthy): number {
    return thing.length * 2;
}

printDoubleLength("asd");
// printDoubleLength(234);

function makeEmptyArray<T = number>(): T[] {
    return [];
}

const nums = makeEmptyArray()
const bools = makeEmptyArray<boolean>();

interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
       this.queue.push(el) ;
    }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
// videos.add()
