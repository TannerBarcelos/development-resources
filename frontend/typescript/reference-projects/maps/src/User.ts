import { faker } from '@faker-js/faker'
import { Mappable } from './common/ts/interfaces'
export class User implements Mappable {
  private name: string
  public location: { lat: number; lng: number }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  public print(): string {
    return `<h3>${this.name}</h3>`
  }
}
