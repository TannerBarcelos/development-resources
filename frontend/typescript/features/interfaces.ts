// Creates a new type that describes the shape, types, names and values of an object
interface Vehicle {
  name: string
  year: number
  driveType: string
  //   features: string[] // uncomment this and you will note that Chevy is then underlined because features property is not in the Chevy declaration of a Vehicle
  features?: string[] // the above can be removed by adding a ? on the property to make it optional
}

const Chevy: Vehicle = {
  name: 'Silverado',
  year: 2021,
  driveType: '4wd',
  //   isFavorite: true, // uncomment and this fails because isFavorite is not a property of the Vehicle interface
}

const logVehicle = (vehicle: Vehicle): void => {
  const { name, year, driveType }: Vehicle = vehicle // can also destructure in the args too and negate the need to do this at all
  // const {name, year, driveType }: { name: string; year: number; driveType: string } = vehicle <- this works too but Vehicle already has the destructured type annotations shape. Why write more than needed? Use the above
  console.log(`Name: ${name}   Year: ${year}   Drive Type: ${driveType}`)
}

logVehicle(Chevy)

////// More advanced situation

interface Summarizable {
  summarize(): string
}

const Ford = {
  type: 'Ford',
  name: 'F150',
  year: 2022,
  driveType: '4wd',
  isFavorite: false,
  summarize(): string {
    return `This is a ${this.year} ${this.type} ${this.name}`
  },
}

const Drink = {
  color: 'red',
  isFizzy: true,
  sugar: 50,
  summarize(): string {
    return this.color
  },
}

const log = (item: Summarizable): void => {
  console.log(item.summarize())
}

log(Ford) // This is a 2022 Ford F150
log(Drink) // red

/**
 * A single interface was used to describe the shape of two completely different objects! a drink and a car are literally completely unrelated
 * but log still worked? This is called "keeping the code generic" so it can be reused. This log function can now be used to log anything
 * so long as the item passed in is of type Summarizable
 */
