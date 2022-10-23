function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName({ first: "Thomas", last: "Jenkins" });
var coordinate = { x: 34, y: 2 };
// printName({first: "Mick", last: "Jagger", age: 74});
var singer = { first: "Mick", last: "Jagger", age: 74 };
// pengecualian utk var yg udah diberikan object akan tetep jalan cuma
// yang dicek tetep dari data obeject yg pertama, sisanya akan di ignore
printName(singer);
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 1321;
function calculatePayout(song) {
    return song.numStreams * .0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "hello",
    artist: "hahaha",
    numStreams: 1231,
    credits: {
        producer: "dewa",
        writer: "made"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
