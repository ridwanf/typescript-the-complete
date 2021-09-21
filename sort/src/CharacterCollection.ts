import { Sorter } from './Sorter'

export class CharacterCollections extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const character = this.data.split('')
      const temp = character[leftIndex]
      character[leftIndex] = character[rightIndex]
      character[rightIndex] = temp
      this.data = character.join('')
    } else {
      return
    }
  }
}