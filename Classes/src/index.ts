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

class Player {
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ")
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw  new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAH!");
  }
  loseLife() {
    this.#numLives -= 1;
  }
  #secret() {
    console.log("SECRET!!!");
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
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
console.log(admin)