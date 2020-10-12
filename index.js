

let Car = class {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }
}

mycar = new Car("Ford", 50);

console.log(mycar.brand)
console.log(mycar.speed)