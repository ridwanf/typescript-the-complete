interface Reportable {
  summary(): string,
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const newDrink = {
  color: 'brown',
  carbonated: true,
  summary(): string {
    return `Name: ${this.color}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(`Summary: ${item.summary()}`);
}

printSummary(oldCivic)
printSummary(newDrink)