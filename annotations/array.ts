const carMakers = ['ford', 'toyote', 'chevy']
const dates = [new Date(), new Date(2021,12,12)]

const carByMake: string[][] = []

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// flexible types
const importantDates = [new Date(), '2030-10-10']

const importantDates2: (Date|string)[] = []
importantDates2.push('2021-12-12')
importantDates2.push(new Date())
importantDates2.push(1000)