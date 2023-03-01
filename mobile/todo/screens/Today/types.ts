export interface Todo {
  id: number
  name: string
  due?: Date
  priority: Priority
  complete: boolean
}

export type JSX = JSX.Element

export enum Priority {
  none = 'none',
  low = 'low',
  medium = 'medium',
  high = 'high',
  urgent = 'urgent',
}

export enum PriorityColors {
  none = '#DFDFDE',
  low = '#C1D5A4',
  medium = '#3B44F6',
  high = '#003865',
  urgent = '#C21010',
}
