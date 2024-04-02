import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi2";
import { RiArrowDropDownFill } from "react-icons/ri";



function Navebar() {
  return (
    <>

<div className="w-full h-[80px] bg-blue-600">
<div className="flex pt-7 pl-36 font-bold">
<h3 className='text-white text-[17px] mt-1'><FaLocationDot /></h3>
<h3 className='text-white text-[17px] ml-1'>MoonShine St. 14/05 Light City</h3>
</div>

<div className="flex pl-[950px] mt-[-25px]">
<h3 className='text-white text-[20px]  mt-1 mr-4'><FaPhoneVolume /></h3>
<h3 className='text-white text-[17px] font-bold'>00 (123) 456 78 90</h3>
<h3 className='text-white text-[20px] mt-1 ml-3'><HiPaperAirplane /></h3>
<h3 className='text-white text-[17px] ml-3 font-bold'>Sendbox  @email.com</h3>


</div>
</div>

   <div className="w-full h-[70px] border-[1px]  border-none flex items-center mt-7 gap-16 mr-10">
  <div><img src="./img/box1.png" alt="" className='ml-[150px] text-[40px]' /></div>

  <ul className='text-black text-[15px] flex gap-[70px] ml-[50px] font-bold'>
    <div className="flex items-center gap-[20px] ml-[50px]">
    <li className='text-[18px] hover:text-red-600 cursor-pointer'>Demos </li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>
    <li className='text-[18px] hover:text-red-600 cursor-pointer'>pages</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>

    <li className='text-[18px] hover:text-red-600 cursor-pointer'>Projects</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>

    <li className='text-[18px] hover:text-red-600 cursor-pointer'>Blog</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>

    <li className='text-[18px] hover:text-red-600 cursor-pointer'>Blocks</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>

    <li  className='text-[18px] hover:text-red-600 cursor-pointer'>Documentaion</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>

    <li className='text-[18px] hover:text-red-600 cursor-pointer ml-16'>EN</li>
    <h4 className='text-blue-700 flex text-[30px] ml-[-20px]'><RiArrowDropDownFill /></h4>


    </div>
  
  </ul>
  <div className="w-[130px] h-[57px] rounded-[50px] bg-blue-500 ml-[-40px] ">
    <h4 className='text-[18px] font-bold text-white mt-3 ml-7'>Contect</h4>
  </div>
  </div>

    </>
  )
}

export default Navebar

