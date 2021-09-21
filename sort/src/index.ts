import { CharacterCollections } from './CharacterCollection'
import { LinkedList } from './LinkedList'
import { NumberCollections } from './NumbersCollections'

const numbersCollections = new NumberCollections([1, 3, -6, 10])
numbersCollections.sort()
console.log(numbersCollections.data)

const stringCollection = new CharacterCollections('Xaaaa')
stringCollection.sort()
console.log(stringCollection.data)

const linkedList = new LinkedList()
linkedList.add(-500)
linkedList.add(-10)
linkedList.add(10)
linkedList.add(3)

linkedList.sort()
linkedList.print()