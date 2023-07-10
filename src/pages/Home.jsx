import {  useNavigate } from 'react-router-dom'
import {useUserContext} from '../context/UserContext'
export const Home = () => {

  const {setUser} = useUserContext()

  const navigate = useNavigate()


  const handleLogin = () => {

    setUser({
      name: 'juan',
      email: 'juan@juan'


    })
    navigate('./dashboard')

  }
  return (
    <>
        <h1>Home</h1>
        <button onClick={handleLogin}>Login</button>

    
    </>
  )
}
