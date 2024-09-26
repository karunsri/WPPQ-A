// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Doors: ${this.doors}`);
    }
  }
  
  // Create an instance of the Vehicle class
  const vehicle = new Vehicle('Ford', 'F-150', 2020);
  
  // Display vehicle details
  console.log('Vehicle Details:');
  vehicle.displayDetails();
  
  // Create an instance of the Car class
  const car = new Car('Honda', 'Accord', 2023, 4);
  
  // Display car details
  console.log('\nCar Details:');
  car.displayDetails();
  