// type Point = {
//   x: number,
//   y: number
// };
;
var pt = { x: 123, y: 1234 };
;
var thomas = { id: 12312, first: "Thomas", last: "Hardy",
    sayHi: function () { return "Hello"; } };
thomas.first = "Hearlaeka";
;
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
;
;
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: function () {
        return "WOOF WOOF!";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark: function () {
        return "Bark!";
    },
    job: "guide dog"
};
;
;
;
var pierre = {
    name: "Pierre",
    id: 1231,
    email: "made@mailinator.com",
    level: "senior",
    languages: ["JS", "Python"]
};
