"use strict";
/*class Player {
  constructor(first, last) {
    this.first = first;
    this.last = last
  }

  taunt(){
    console.log("HEELL YEA");
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();

const player1 = new Player("blue", "steele");
player2.taunt();
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Player_instances, _Player_score, _Player_numLives, _Player_secret;
class Player {
    constructor(first, last) {
        _Player_instances.add(this);
        _Player_score.set(this, 0);
        _Player_numLives.set(this, 10);
        this.first = first;
        this.last = last;
        __classPrivateFieldGet(this, _Player_instances, "m", _Player_secret).call(this);
    }
    static randomPlayer() {
        return new Player("Andy", "Samberg");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
    get score() {
        return __classPrivateFieldGet(this, _Player_score, "f");
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        }
        __classPrivateFieldSet(this, _Player_score, newScore, "f");
    }
    updateScore(newScore) {
        __classPrivateFieldSet(this, _Player_score, newScore, "f");
    }
    taunt() {
        console.log("BOOYAH!");
    }
    loseLife() {
        __classPrivateFieldSet(this, _Player_numLives, __classPrivateFieldGet(this, _Player_numLives, "f") - 1, "f");
    }
}
_Player_score = new WeakMap(), _Player_numLives = new WeakMap(), _Player_instances = new WeakSet(), _Player_secret = function _Player_secret() {
    console.log("SECRET!!!");
};
Player.description = "Player In Our Game";
class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.isAdmin = true;
        this.powers = powers;
    }
}
const player1 = new Player("blue", "steele");
player1.taunt();
// const player2 = new Player("blue", "steele");
// player2.taunt();
// console.log(player1.numLives);
player1.loseLife();
// player1.getScore();
/**
 * getter
 */
console.log(player1.fullName);
console.log(player1.score);
// player1.#secret();
/**
 * setter
 */
// player1.score = -123;
player1.score = 123;
console.log(player1.score);
console.log(player1.fullName);
player1.fullName = "Made Gele";
console.log(player1);
// const admin = new AdminPlayer("admin", "mCadmin");
const admin = new AdminPlayer("admin", "mcAdmin", ["delete", "create"]);
console.log(admin);
