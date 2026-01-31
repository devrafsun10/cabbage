import React from 'react'
import herb from '../../assets/herb.png'
import leaf from '../../assets/leaf.png'
import banner from '../../assets/banner.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-[#F7F5EB] py-29.75 relative'>
        <div className=' container flex justify-between items-center z-10'>
            <div>
                <div className='flex  items-center mb-2.25'>
                    <img src={herb} alt="#herb" />
                    <p className='font-secondary font-normal text-[18px] text-[#232323]'>100% genuine Products</p>
                </div>
                <h1 className='font-primary font-bold text-[70px] text-[#232323] mb-8.75'>Tasty & Healthy <span>organic Food</span></h1>

                 <button className='py-4 px-7.5 bg-[#80B500] font-secondary font-bold text-[14px] text-[#FFFFFF] flex items-center' >Explore Products
                    <FaLongArrowAltRight className='ml-1' />
                 </button>
            </div>

            <div>
                <img src={banner} alt="#banner" />
            </div>
        </div>
        <img src={leaf} alt="" className=' absolute top-0 left-0 w-20'/>
    </div>
  )
}

export default Banner