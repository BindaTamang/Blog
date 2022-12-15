import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <a>Home</a>
      </Link>
      <Link to={'/about'} style={{textDecoration: 'none'}}>
        <a>About</a>
      </Link>
     
      <Link to={'/users'} style={{textDecoration: 'none'}}>
        <a>Users</a>
      </Link>
      
      <Link to={'/login'} style={{textDecoration: 'none'}}>
        <a>Login</a>
      </Link>
     
      <Link to={'/signup'} style={{textDecoration: 'none'}}>
      <a>Signup</a></Link>
    </div>
  )
}

export default Navbar
