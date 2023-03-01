// Describe what a Todo looks like so we can type axios calls
export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// Define an interface for what the state of the todolist slice will look like
export interface TodoListState {
  todos: Todo[]
  isLoading: boolean
  isError: boolean
  message: string | unknown
}
