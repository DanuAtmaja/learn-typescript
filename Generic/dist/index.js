"use strict";
// const nums: Array<number> = [];
// const colors: Array<string> = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
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
function identity(item) {
    return item;
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
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(comboObj);
// merge<{name: string}, {pets: string[]}>({ name: "colt"}, { pets: ["blue", "elton" ] })
console.log(merge({ name: "Colt" }, { num: 9 }));
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("asd");
// printDoubleLength(234);
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const bools = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
// videos.add()
