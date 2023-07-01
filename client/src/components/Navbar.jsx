import { useState } from "react";
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png';


const NavBarItem = ({title,classprops}) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );


const Navbar = () => {

    const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-left justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" height="100px" width="120px"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-column justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[yellow] hover:text-black transition duration-300 ease-in-out">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {ToggleMenu ? <AiOutlineClose fontSize={18} onClick={()=>setToggleMenu(!ToggleMenu)} className="text-white md:hidden cursor-pointer"/> : <HiMenuAlt4 onClick={()=>setToggleMenu(!ToggleMenu)} className="text-white text-2xl cursor-pointer"/>}
        {ToggleMenu && (
          <ul 
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white  animate-slideInRight"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
// Line 32 to Line 42 -> toggleMenu appears for mobile users when we click on '=' symbol on the web page and disssapears if we click on cross.