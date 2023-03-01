import './404Styles.css'
import { useNavigate } from 'react-router-dom'
export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='oops'>
      <h3>Oops! There is nothing to see here</h3>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}
