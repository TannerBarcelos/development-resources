const profile = {
  name: 'tanner',
  age: 26,
  loc: {
    city: 'Milpitas',
    state: 'CA',
  },
  changeLoc(city: string, state: string): void {
    this.loc.city = city
    this.loc.state = state
  },
}

// Type annotations of objects are probably the most cumbersome of all. But, it is essentially just duplicating whatever you
// pull pull out on the right side but annotating it
const { name, age }: { name: string; age: number } = profile

console.log(name, age)

const {
  loc: { city, state },
}: { loc: { city: string; state: string } } = profile

console.log(city, state)
