import { CharactersCollection } from './collections/CharactersCollections'
import { NumbersCollection } from './collections/NumbersCollection'
import { LinkedListCollection } from './collections/LinkedListCollection'

const arr: number[] = [1, -4, 100, 200, 80, -100, 0, 3]

const word: string = 'apples'

const numberCollection = new NumbersCollection(arr)
const charCollection = new CharactersCollection(word)

const linkedList = new LinkedListCollection()
linkedList.add(10)
linkedList.add(1)
linkedList.add(-5)
linkedList.add(100)
linkedList.add(45)

numberCollection.sort()
charCollection.sort()
linkedList.sort()

console.log(arr)
console.log(word)
linkedList.print()
