class ArrayCollection<T> {
  private collection: T[]

  constructor(collection: T[]) {
    this.collection = collection
  }

  get(index: number): T {
    return this.collection[index]
  }

  getAll(): T[] {
    return this.collection
  }
}

const numArr = new ArrayCollection<number>([1, 2, 3, 4, 5])
const strArr = new ArrayCollection<string>(['hi', 'bye', 'bonjour', 'ciao'])

console.log(numArr.get(2))

function printCollection<T>(arr: T[]): void {
  console.log(arr)
}

printCollection<number>(numArr.getAll())

//////////////////////////////////

// Generic Constraints - Important
class Car {
  print(): void {
    console.log('I am a car')
  }
}

class Bike {
  print(): void {
    console.log('I am a bike')
  }
}

interface Printable {
  print(): void
}

// Generic constraints tell the compiler that the generic will promise to have some sort of value(s) defined on it
// that we call in the block of code - in our case, it tells the compiler that the collection T we will look and call .print()
// on exists in the instance of Bike and/or Car and therefore it works - in an array of number, strings etc. this would fail
// as they do not have a print() method
function printProperty<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printProperty<Car>([new Car()])
printProperty<Car>([new Car()])
printProperty<Bike | Car>([new Bike(), new Car()])
