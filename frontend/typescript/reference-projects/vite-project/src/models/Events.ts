type Callback = () => void

export interface EventTable {
  [key: string]: Callback[]
}

export class Events {
  private events: EventTable = {}

  on = (event: string, callback: Callback): void => {
    const handlers = this.events[event] || []
    handlers.push(callback)
    this.events[event] = handlers
  }

  dispatch = (event: string): void => {
    const events = this.events[event]
    if (!events || events.length === 0) {
      return
    }
    for (let event of events) {
      event()
    }
  }
}
