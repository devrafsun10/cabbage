import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import flag from '../../assets/flag.png'

const Header = () => {
  return (
    <div className=' bg-[#0A472E] font-primary text-white py-4.5'>
       <div className=' container md:flex md:justify-between items-center'>
         <div className='flex items-center md:text-normal
         text-sm '>

            <div className='flex items-center'>
                < CiLocationOn className='text-[#80B500]'  />
                <p className='pl-2'>254 Lillian, Holbrook |</p>
                </div>

                <div className='flex items-center px-2'>
                     <CiMail className='text-[#80B500]' />
                <p className='pl-2'>info@santizex-site.com</p>
                </div>
        </div>

        <div className=' flex items-center md:text-normal text-sm pl-12 md:pl-0'>
            <p>facebook - behance - interest <span>|</span></p>
            <div className=' flex  items-center pl-2'>
                <img src={flag} alt="#flag" />
                <p className='pl-2'>EN</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header