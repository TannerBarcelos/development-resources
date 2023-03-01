/**
 * PRIMITIVE TYPES
 */
let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = false
let nothing: null = null
let none: undefined = undefined
let now: Date = new Date()

/**
 * OBJECT TYPES
 */

// Arrays
let fruits: string[] = ['apples', 'bananas', 'pears']
let myNumbers: number[] = [1, 2, 3, 4, 5]
let bools: boolean[] = [true, false, false, false, true]

// Classes
class Car {}
const car: Car = new Car() // instance of a car - car is of type "Car"

// Object Literals - we can see how to improve this later using Types or Interfaces
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Functions
const logNumber = (i: number): void => {
  console.log(i)
}
