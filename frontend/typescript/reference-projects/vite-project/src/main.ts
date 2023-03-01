import { User } from './models/User'
import { Form } from './views/Form'

const root = document.getElementById('app')

if (root) {
  const form = new Form(
    root as HTMLElement,
    User.create({ name: 'tanner', age: 21 }),
  )

  form.render()
}
