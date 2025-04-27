//this is an interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;

}
//implement Vehicle class
class Car implements Vehicle {

    make: string;
    model: string;
    year: number;

constructor(make: string,model: string,year:number) {
    this.make = make;;
    this.model = model;
    this.year = year;

}
start():void{
    console.log("car engine started");
    
}
}
    const myCar = new Car ("Mazda", "cx5",2015)
myCar.start();
