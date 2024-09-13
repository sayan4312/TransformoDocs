import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link';


const Header = () => {
  return (
    <header className="text-black py-5 px-10 flex justify-between items-end " id='navbar'>
      <Link to={"/"} id="header-title" className="text-3xl font-bold flex-col flex  justify-center relative">
        <span className='font-normal text-3xl textColor'>Transformo</span>
        <span className='font-semibold  text-xl -mt-2'>Docs</span>
      </Link>
      <nav className="flex  gap-[1.8vw] items-center" id='nav-part2'>
        <h4 className='font-bold'><Link to="/" className="font-semibold">Home</Link></h4>
        <h4 className='font-bold'><HashLink to={"/#about"} className="font-semibold">About</HashLink></h4>
        <h4 className='font-bold'><Link to="/Login" className="font-semibold">Login</Link></h4>
      </nav>
    </header>
  )
}

export default Header