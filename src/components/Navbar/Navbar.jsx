import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="style.header">
        <div className="style.header_text">
          <h2>Navbar</h2>
        </div>
        <Link to="loginPage">
          <button>Login</button>
        </Link>
      </div>
    </>
  )
}

export default Navbar
