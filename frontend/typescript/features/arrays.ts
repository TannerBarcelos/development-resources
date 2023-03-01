const carManufaturers: string[] = ['Chevy', 'Ford', 'Honda']
const makes: string[][] = [
  ['Silverado', 'Camaro'],
  ['F150', 'Mustang'],
  ['Civic', 'Accord'],
]

const chevyMakes = makes.slice(0)

// Note ages uses inferences - ages is an array of type number
const ages = [1, 2, 3, 4, 5]
// carManufaturers.push(100) <- will tell us 100 cannot be assigned to type string[]

// Higher order method with types
carManufaturers.forEach((car: string): void => {
  console.log(car.toUpperCase())
})

// In JS we can use many types in the same array. In TS, this is not possible out of the box. To do this, we need to specifically write the types the
// array can hold so that TS knows how to parse the code - we can also simply annotate it with 'any' and it will do the same thing however we do not want to rely on any types
const importantDates: (string | Date | number)[] = [
  new Date(),
  '12/04/1995',
  2022,
]
