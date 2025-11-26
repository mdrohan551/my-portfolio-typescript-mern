import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' // react-icons
import whitelogo from "/lightlogo.png"
import { navBar } from '../../constants/Data/data'
import { Link, useLocation } from 'react-router-dom'
import Button_link from '../../components/button/Button_link'
import Button_menu from '../../components/button/Button_menu'

const Navbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathName = useLocation().pathname

  return (
    <div className='container mx-auto px-2 py-6'>
      <div className="grid grid-cols-12 items-center">
        {/* Logo */}
        <div className="col-span-2">
          <div className='w-25 md:w-25 lg:w-35'>
            <a href="#"><img src={whitelogo} alt="logo" className='w-full h-auto' /></a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="col-span-8 hidden md:flex justify-center  ">
          <ul className="flex justify-center gap-2 md:gap-5 w-full">
            {navBar.map((item, idx) => {
              const isActive = item.href === pathName
              const isHover = hoveredIdx === idx

              return (
                <li
                  key={idx} className='group relative w-30' onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link
                    to={item.href || '/'}
                    className={`block w-full h-full rounded-md px-1 py-2 text-center font-jakarta-bold text-[1rem] capitalize transition-all duration-300
                      ${(isActive && hoveredIdx === null) || isHover ? 'bg-Light_primary text-primary' : ' text-gray-800'}
                    `}
                  >
                    {item.title}
                    <div className={`absolute bottom-0 left-0 h-[0.2rem] w-full bg-primary origin-bottom transition-transform duration-500
                        ${(isActive && hoveredIdx === null) || isHover ? 'scale-y-100' : 'scale-y-0'}
                      `}></div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="col-span-2 hidden md:flex justify-end gap-2">
          <Button_link text="Let's Talk" href='/contact-us' />
        </div>

        {/* Mobile Menu Icon */}
        <div className="col-span-10 md:hidden flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {/* {menuOpen ? <HiX /> : <HiMenu />} */}
            <Button_menu/>
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        <div
          className={`
    col-span-12 md:hidden 
    flex flex-col gap-3 bg-gradient-to-r from-primary via-lime-600 to-secondary backdrop-blur-xs px-5 py-5 absolute top-20 right-0 w-full
    transform transition-all duration-300 origin-top-right z-50
    ${menuOpen ? 'scale-100 opacity-100' : 'scale-0 '}
  `}
        >
          {navBar.map((item, idx) => {
            const isActive = item.href === pathName
            return (
              <Link
                key={idx}
                to={item.href || '/'}
                onClick={() => setMenuOpen(false)}
                className={`block w-full px-4 py-2 rounded-md text-center font-jakarta-bold text-[1rem] capitalize
          ${isActive ? 'bg-Light_primary text-white' : 'bg-gray-50 text-gray-800'}
        `}
              >
                {item.title}
              </Link>
            )
          })}
          {/* Mobile Button */}
          <div className='w-full flex justify-center'>
            <div className='w-40 ring'>
              <Button_link text="Let's Talk" href='/contact-us' />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar
