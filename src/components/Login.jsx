import { useState, useEffect, useContext } from 'react'
import { getUsers } from '../utils/api'
import { FaUser } from 'react-icons/fa'
import { UserContext } from '../context/user'

const Login = () => {
  const [users, setUsers] = useState([])
  const { userOnline, setUserOnline } = useContext(UserContext)
  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi)
    })
  }, [])

  return (
    <main className='container-main'>
      <h1 className='p-2'>Available users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username} className='card m-3'>
              <div className='card-body'>
                <FaUser />
                <h2>{user.username}</h2>
                <button
                  className='p-1'
                  onClick={() => setUserOnline(user)}
                  disabled={user.username === userOnline.username}
                >
                  Log me in
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
export default Login
