"use strict";
//implement Vehicle class
class Car {
    constructor(make, model, year) {
        this.make = make;
        ;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("car engine started");
    }
}
const myCar = new Car("Mazda", "cx5", 2015);
myCar.start();
