import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
      <nav className="navbar">
  <h2 className="logo">Shreyians</h2>

  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
    </div>
  )
}

export default Navbar
