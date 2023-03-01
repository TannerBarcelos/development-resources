import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

/**
 * Interface = Used to define the shape and properties of some piece of data in TS. In our case, the todo
 * from jsonplaceholder is to be of type "todo".
 *
 * Doing this will turn on type annotations and error catching in dev time. If the properties we are trying to take out of
 * res.data is not a todo type (interface), then we will see red underlines on the properties we are trying to access
 */
interface todo {
  id: number
  userId: number
  title: string
  completed: false
}

axios.get(url).then((res) => {
  const { userId, id, title, completed } = res.data as todo
  logTodo(userId, id, title, completed)
  logTodoEnhanced(res.data)
})

const logTodo = (
  userId: number,
  id: number,
  title: string,
  completed: boolean,
) => {
  console.log(`
        User Id : ${userId}
        Todo Id : ${id}
        Todo Content : ${title}
        Status : ${completed ? "done" : "pending"}
    `)
}

/**
 * This function takes in a todo and is type annoted with the todo interface - this is great for clean code
 */
const logTodoEnhanced = (todo: todo) => {
  console.log(`
    Enhanced Todo Logger
    User Id : ${todo.userId}
    Todo Id : ${todo.id}
    Todo Content : ${todo.title}
    Status : ${todo.completed ? "done" : "pending"}
`)
}
