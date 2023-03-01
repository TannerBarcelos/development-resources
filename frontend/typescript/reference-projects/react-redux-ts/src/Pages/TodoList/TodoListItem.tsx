import { Todo } from '../../features/todolist/interfaces'
import { useAppDispatch } from '../../app/hooks'
import { deleteTodo } from '../../features/todolist/todoListSlice'

interface PropTypes {
  todo: Todo
}
export const TodoListItem = ({ todo }: PropTypes) => {
  const dispatch = useAppDispatch()
  const handleDeleteTodo = (): void => {
    dispatch(deleteTodo(todo.id))
  }
  return (
    <div>
      <p>{todo.title}</p>
      {!todo.completed && <button onClick={handleDeleteTodo}>X</button>}
    </div>
  )
}
