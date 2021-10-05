class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfEverything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfEverything(['a', 'b', 'c'])
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything(['a', 'b', 'c'])

interface Printable {
  print(): void
}


class House {
  print() {
    console.log('I am a house')
  }
}

class Car {
  print() {
    console.log('I am a car')
  }
}


function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHouseOrCars<Car>([new Car(), new Car()])