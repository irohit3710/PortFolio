import './Navbar.scss'
import React, { useEffect, useState } from 'react'
import navLinksdata from '../../constants/index.js'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [scrolled,setScrolled] = useState(false);
  // setScrolled(window.scrollY);

  const handleScroll = () =>{
    const offset = window.scrollY;
    if(offset>200){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
  },[])
  return (
    <div className={`w-full h-20  flex flex-row justify-between items-center border-b-2 z-50 bg-gray-800 px-20 mx-auto ${scrolled ? 'sticky-header':''}`}>
      <div>
        <img src="https://i.postimg.cc/T245Ft9g/User-Profile-PNG-High-Quality-Image.png" alt="Logo"  style={{height:'50px'}}/>
      </div>
      <div>
        <ul className='flex justify-between items-center gap-2'>
          {navLinksdata.map((items)=>(
            <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer rounded-md hover:text-designColor hover:bg-black hover:bg-opacity-25 hover:shadow-shadowOne duration-700 px-4 py-2'
                key={items._id}
            >
              <span>
                <Link
                  activeClass="active"
                  to={items.link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  {items.title}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar