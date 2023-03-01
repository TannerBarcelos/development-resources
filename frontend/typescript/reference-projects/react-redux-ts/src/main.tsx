import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './Pages/Counter/Counter'
import { TodoList } from './Pages/TodoList/TodoList'
import { NotFound } from './Pages/404/404'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* React router v6 - https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='counter' element={<Counter />} />
        <Route path='todolist' element={<TodoList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
