import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'


export const Navbar = () => {

    const { user, setUser } = useUserContext()

    return (
        <nav>
            <NavLink to='/'>Home</NavLink> |

            {user && (
                <>
                    <NavLink to='/dashboard'> DashBoard</NavLink>
                    <button onClick={() => setUser(false)}>Logout</button>

                </>
            )}

        </nav>
    )
}
