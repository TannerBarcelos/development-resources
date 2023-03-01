import { User, UserAttributes } from '../models/User'
import { View } from './View'

export class UserDetails extends View<User, UserAttributes> {
  content(): string {
    return `
        <div>
            <h1>User Details</h1>
            <div>User Name: ${this.model.attributes?.name}</div>
            <div>Age: ${this.model.attributes?.age}</div>
        </div>
        `
  }
}
