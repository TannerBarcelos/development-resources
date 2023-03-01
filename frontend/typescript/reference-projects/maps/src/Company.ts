import { faker } from '@faker-js/faker'
import { Mappable } from './common/ts/interfaces'
export class Company implements Mappable {
  private companyName: string
  private catchPhrase: string
  public location: { lat: number; lng: number }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  public print(): string {
    return `<h3>${this.companyName}</h3> <p>${this.catchPhrase}</p>`
  }
}
