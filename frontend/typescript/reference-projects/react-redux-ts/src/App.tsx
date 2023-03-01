import { useNavigate } from 'react-router-dom'

interface Props {
  color?: string
}

// Components return JSX - Alias JSX.Element type to be just JSX to keep code cleaner
type JSX = JSX.Element

export const App = (props: Props): JSX => {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <h1 style={{ color: props.color || '#eee' }}>
        React-Redux Using TS Demo Site
      </h1>
      <button onClick={() => navigate('/counter')}>React/Redux Counter</button>
      <button onClick={() => navigate('/todolist')}>Async Todo List</button>
    </div>
  )
}
