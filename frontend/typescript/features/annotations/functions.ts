const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const mul = function (a: number, b: number): number {
  return a * b
}

// Result is an inferred type of number because add() returns a number so TS knows the resulting type - works for arrows, function definitions and declarations
const result = add(2.4, 2)

const logger = (message: string): void => {
  console.log(message)
}

// never type annotation - represents a function that will never return something - something like throwing an error (but we can put void and it still be valid)
const errorHandler = (message: string): never => {
  throw new Error(message)
}

// Destructuring arguments in TS -> ({destructuredArgs} : {object literal definitions}) - see vairable.ts / notes for object literal types
const tellMeTheWeather = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => console.log(date, '   ', weather)
