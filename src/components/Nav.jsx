import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopics } from '../utils/api'
import { FaCode } from 'react-icons/fa'

const Nav = () => {
  const [topics, setTopics] = useState([])

  const [isActive, setActive] = useState(true)

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi)
    })
  }, [])

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <nav className='navbar sticky-top navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' activeclassname='active' to='/'>
          <FaCode /> NC-News <FaCode />
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleClass}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={isActive ? 'collapse navbar-collapse' : null}
          id='navbarNav'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeclassname='active'
                to='/articles'
              >
                All Articles
              </NavLink>
            </li>
            {topics.map((topic) => {
              return (
                <li key={topic.slug} className='nav-item'>
                  <NavLink
                    className='nav-link capitalize'
                    activeclassname='active'
                    to={`/topics/${topic.slug}`}
                  >
                    {topic.slug}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav
