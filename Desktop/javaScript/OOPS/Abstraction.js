class Car {
    startCar(){
        this.#engineOn();
        this.#engineIgnition();
        this.#fuelPump();
        console.log("car started");
    }
    #engineOn(){
        console.log("Engine On");
    }
    #fuelPump(){
        console.log("Fuel pump started");
    }
    #engineIgnition(){
        console.log("Engine ignition started");
    }
}

let c1 = new Car();
c1.startCar();