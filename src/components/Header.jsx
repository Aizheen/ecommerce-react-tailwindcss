import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import Logo from "../img/logo.svg"
import { BsBag } from "react-icons/bs";



export default function Header() {
  // header state
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)
// event listener

useEffect(()=>{
  window.addEventListener("scroll", ()=> {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  })
})

  return (
    <header className={`${isActive? "bg-white py-4 shadow-md" : "bg-none py-6 "} fixed w-full  z-10 transition-all`}>
      <div className="container flex mx-auto items-center justify-between h-full">
      <Link to={"/"}>
        <div>
          <img className="w-[40px]" src={Logo} alt="" />
        </div>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex flex-row justify-end  h-full"
        >
        <BsBag className="text-2xl   " />
        <div className="bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center " >{itemAmount}</div>
      </div>
        </div>
    </header>
  );
}
