// Normal object
const drink = {
  color: 'brown', // string
  carbonated: true, // boolean
  sugar: 50, // number
}

// Converted to tuple - must be typed as so - lots of code and memorizaton. Can be improved with type aliasing (see below)
const pepsi: [string, boolean, number] = ['brown', true, 50]

// Type Aliasing
type Drink = [string, boolean, number]
const sprite: Drink = ['white', true, 35]

console.log('Sprite', ' -> ', sprite)
