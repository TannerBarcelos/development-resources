import { User, UserAttributes } from '../models/User'
import { View } from '../views/View'

type EventMapper = { [key: string]: () => void }

export class Form extends View<User, UserAttributes> {
  eventMap = (): EventMapper => {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    const inputEl = this.parent.querySelector('input') // select input element
    const inputText = inputEl?.value // get the text of the input element
    this.model.set({ name: inputText })
  }

  content = (): string => {
    return `
        <div>
            <input placeholder="${this.model.attributes?.name}"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save</button>
        </div>
    `
  }
}
