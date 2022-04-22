import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user'
import ProfileDefault from '../assets/images/profile-icon.png'
const ProfilePage = () => {
  const { userOnline } = useContext(UserContext)
  return (
    <main className='container-main'>
      <h1>Profile Page</h1>
      <img className='img-fluid' src={ProfileDefault} alt='profile image' />
      <h2>{userOnline.username}</h2>
    </main>
  )
}
export default ProfilePage
