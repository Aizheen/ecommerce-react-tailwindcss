import React from 'react'
import womanImg from "../img/woman_hero.png"
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section className='h-[800px] bg-slate-200 bg-no-repeat bg-cover bg-center py-24 '>
      <div className='container mx-auto flex justify-around h-full'>
          <div className='flex flex-col justify-center '>
              <div className='font-semibold flex items-center uppercase' >
                <div className='w-10 h-[2px] hover:bg-white bg-black mr-3'></div>New Trend
              </div >
              <h1 className='text-[70px] leading-[1.1] font-light mb-4 ' >AUTUM SALE STYLISH <br />
              <span className='font-semibold'>MEN'S & WOMEN'S</span> 
              </h1>
          <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary" >
            Discover More
          </Link>
          </div>
          <div className='hidden lg:block pt-1 '>
            <img src={womanImg} alt="" />
          </div>
      </div>
    </section>
  )
}
