import React, { useState } from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { logo, close, menu } from '../assets'
import ThemeToggle from './ThemeToggle'
import useThemeStore from './theme'
const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  const { theme } = useThemeStore();


  return (
    <nav className={`${styles.paddingX} flex items-center py-2 z-20 fixed top-0 w-full bg-gray-200 dark:bg-primary`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link to='/' className='flex gap-2 items-center' 
          onClick={() => {setActive(""); window.scrollTo(0,0);}}>         
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />

          <p className='text-black dark:text-white text-[1rem] cursor-pointer font-bold flex'>Ajay's Portfolio</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} 
            className={`${
              active === link.title ? "text-black dark:text-white" : "text-gray-500 dark:text-grey-100"
            } hover:text-black dark:hover:text-white text-[1.1rem] font-medium cursor-pointer`}onClick={() => setActive(link.title)}
                >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />

        {/**nav div for links in mobile view*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={ toggle ? close : menu } alt="menu"
              className="w-[1.75rem] h-[1.75rem] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
          />
          
          <div className={`${!toggle ? 'hidden' : 'flex'} p-5 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[8.75rem] z-10 rounded-xl shadow-2xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} 
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins text-[1rem] font-medium cursor-pointer`} 
                  onClick={() =>{ 
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              ))}
            </ul>
           


          </div>
        </div>
      </div>
    </nav>
  ) 

}

export default Navbar