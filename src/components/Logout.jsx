import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user'

const Logout = () => {
  const { userOnline, setUserOnline } = useContext(UserContext)
  useEffect(() => {
    setUserOnline({ username: '' })
  }, [])
  return (
    <main className='container-main'>
      <h1 className='p-5'>You are now successfully logged out</h1>
    </main>
  )
}
export default Logout
