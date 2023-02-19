class Vehicle {
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
    }
    numWheels = 4;
}

class Motorcycle extends Vehicle{
    constructor(a,b,c) {
        super(a,b,c);
    }
    numWheels = 2;
    
    revEngine() {
        return "VROOM VROOM";
    }
}

class Garage {
    constructor(a) {
        this.capacity = a;
    }
    
    vehicles = [];
    
    add(a) {
        if (this.capacity === this.vehicles.length) {
            return "Sorry, this garage is full.";
        }
        if (!(a instanceof Vehicle)) {
            return "Sorry, only vehicles allowed in garage."
        }
        else {
        this.vehicles.push(a);
        return "Vehicle added";
        }
    }

}