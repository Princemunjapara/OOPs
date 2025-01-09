class Vehicle {

    #regNumber
    constructor(name , color , wheels , number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    // methods

    getdetails(){
        console.log("the" +this.name + "is" + this.color + "in color . it has "+ this.wheels+ "wheels");
        
    }
}

const v1 = new Vehicle("scotter","black",23,2323);
console.log(v1);

// console.log(v1.#regNumber); not accees to use 

