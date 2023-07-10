import { Outlet, Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
export const LayoutPrivate = () => {

  const {user} = useUserContext()


  return (
    <>  

   {user ?  <Outlet/> : <Navigate to='/'/>}
    </>
  )
}
