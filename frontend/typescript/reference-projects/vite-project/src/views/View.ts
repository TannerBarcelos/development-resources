import { Model } from '../models/Model'

type EventMapper = { [key: string]: () => void }

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    // On change of some html values, events, etc. re render the view with a view event
    this.model.on('change', () => {
      this.render()
    })
  }

  // every class that inherits from view to make some view needs to implement CONTENT to render some html (like template in Vue or render in JSX) - we make it abstract so we never need to invoke View but instead extend it
  abstract content(): string

  // return no events by default - not all views will need events (render only)
  eventMap = (): EventMapper => {
    return {}
  }

  bind = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventMap()
    for (let event in eventsMap) {
      const [eventType, selector] = event.split(':')
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventType, eventsMap[event])
      })
    }
  }

  render = (): void => {
    this.parent.innerHTML = ''
    const elementTemplate = document.createElement('template')
    elementTemplate.innerHTML = this.content()
    this.bind(elementTemplate.content)
    this.parent.append(elementTemplate.content)
  }
}
