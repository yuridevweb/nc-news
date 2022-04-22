import { createContext } from 'react'
import { useState } from 'react'
export const UserContext = createContext()

export const UserProvider = (props) => {
  const [userOnline, setUserOnline] = useState({ username: '' })

  return (
    <UserContext.Provider value={{ userOnline, setUserOnline }}>
      {props.children}
    </UserContext.Provider>
  )
}
