import React from 'react'
import herb from '../../assets/herb.png'
import leaf from '../../assets/leaf.png'
import banner from '../../assets/banner.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-[#F7F5EB] md:py-29.75 relative pt-29.75 p-5'>
        <div className=' container md:flex md:justify-between md:items-center z-10'>
            <div>
                <div className='flex  items-center md:mb-2.25'>
                    <img src={herb} alt="#herb" />
                    <p className='font-secondary font-normal text-[18px] text-[#232323]'>100% genuine Products</p>
                </div>
                <h1 className='font-primary font-bold md:text-[70px] text-[34px] text-[#232323] md:mb-8.75 mb-5'>Tasty & Healthy <span>organic Food</span></h1>

                 <button className='md:py-4 py-2 md:px-7.5 px-6 bg-[#80B500] font-secondary font-bold text-[10px] md:text-[14px] text-[#FFFFFF] flex items-center' >Explore Products
                    <FaLongArrowAltRight className='ml-1' />
                 </button>
            </div>

            <div>
                <img className='md:w-full w-90' src={banner} alt="#banner" />
            </div>
        </div>
        <img src={leaf} alt="" className=' absolute top-0 left-0 w-20'/>
    </div>
  )
}

export default Banner