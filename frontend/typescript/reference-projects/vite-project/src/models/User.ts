import { Model } from './Model'
import { Attrs } from './Attributes'
import { HttpSync } from './HttpsSync'
import { Events } from './Events'
import { Collection } from '../collections/Collection'

export interface UserAttributes {
  id?: number
  name?: string
  age?: number
}

const baseUrl = 'http://localhost:3000/users'

export class User extends Model<UserAttributes> {
  static create(attrs: UserAttributes): User {
    return new User(
      new Attrs<UserAttributes>(attrs),
      new Events(),
      new HttpSync<UserAttributes>(baseUrl),
    )
  }

  static collection = (): Collection<User, UserAttributes> => {
    return new Collection<User, UserAttributes>(
      baseUrl,
      (serializedUserPayload: UserAttributes) =>
        User.create(serializedUserPayload),
    )
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
