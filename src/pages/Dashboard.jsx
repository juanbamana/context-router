import { useUserContext } from "../context/UserContext"

export const Dashboard = () => {



  const {user} = useUserContext()
  return (
    <>
        <h1>Dashboard</h1>
    <p>{`Hola ${user.name}`}</p>
    </>

  )
}
