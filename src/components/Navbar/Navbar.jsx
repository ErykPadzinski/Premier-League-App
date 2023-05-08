import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router'


function Navbar() {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <ul>
        <li onClick={() => navigate('/')}>Latest</li>
        <li onClick={() => navigate('/standings')} >Standings</li>
        <li>Stats</li>
      </ul>
    </div>
  )
}

export default Navbar
