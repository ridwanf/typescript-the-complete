class Vehicle {

  constructor(public color: string){}
  public getColor(): void {
    console.log(this.color)
  }
  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('red')
vehicle.getColor()

class Car extends Vehicle {
  constructor(public wheels: number, public color: string){
    super(color)
  }

  drive(): void {
    console.log('broom');
  }
}

const car = new Car(4, 'white pearl')
car.drive()
car.getColor()