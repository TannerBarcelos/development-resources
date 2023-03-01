import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchTodos } from '../../features/todolist/todoListSlice'
import { Todo } from '../../features/todolist/interfaces'
import { TodoListItem } from './TodoListItem'

// Custom type override
type JSXElementArray = JSX.Element[]

export const TodoList = () => {
  const dispatch = useAppDispatch()
  const todoState = useAppSelector((state) => state.todoList)
  const { todos, isLoading, isError, message } = todoState

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const renderList = (): JSXElementArray => {
    return todos.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />)
  }
  return (
    <div>
      <h1>Todo List Example</h1>
      {isLoading && <p>You wish this was a loading spinner...</p>}
      {isError && <p>Something went wrong...</p>}
      {renderList()}
    </div>
  )
}
