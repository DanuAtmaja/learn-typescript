"use strict";
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You did not pass in a word!");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x == y) {
        // x.toUpperCase();
    }
}
someDemo(3, "3");
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
// console.log(getRuntime({title: "Amadeus", duration: 160 }));
// console.log(getRuntime({title: "Spongebob", numEpisodes: 100, episodeDuration: 60}));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.getUTCDate());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Bark";
    }
}
