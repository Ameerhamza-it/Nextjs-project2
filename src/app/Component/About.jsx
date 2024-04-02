import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaGlobe } from "react-icons/fa";
import { MdLinkedCamera } from "react-icons/md";
// import { FaYoutube } from "react-icons/fa";










function About() {
  return (
    <>
  <div className="w-full h-[100vh] mt-7">
  <div className="w-full h-[25vh] mt-36">
        <div className="flex justify-center items-center flex-col">
          <h4 className='text-gray-500 text-[18px] font-bold cursor-pointer'>Latest Projects</h4>
          <h1 className='text-[45px] font-bold cursor-pointer'>Check out some of our awasome projects</h1>
          <h2 className='text-[40px] ml-4 font-bold cursor-pointer'>with creative ideas and great design.</h2>
        </div>
  </div>

  <div className="flex justify-center items-center gap-9 pt-7">
    <div className=" bg-cover w-0[45%] h-[70vh] bg-white rounded-[10px] shadow-lg shadow-gray-500">
      <img src="./img/shampo1.jpg" alt=""   className='w-full h-full rounded-[10px]'/>
    </div>
    <div className=" bg-cover w-[45%] h-[70vh] bg-white rounded-[10px] shadow-lg shadow-gray-500">
    <img src="./img/shampo2.jpg" alt=""   className='w-full h-full rounded-[10px]'/>

    </div>

  </div>
   <br />

   <div className="w-full h-auto mt-6">
    <div className="flex justify-center items-center gap-9 pt-6">
      <div className=" bg-cover w-[45%] h-[80vh] shadow-lg shadow-gray-500">
        <img src="./img/office1.jpg" alt=""  className='w-full h-full rounded-[10px]'/>
      </div>

      <div className="w-[45%] h-[95vh]">
        <p className='text-gray-500 text-[18px] font-bold mt-7 ml-14 cursor-pointer'>WHO ARE WE</p>
        <h1 className='text-[40px] font-bold ml-14 text-gray-800 cursor-pointer'>Company that belives in <br />the power of creative <br />Strategy.</h1>
        <p className='text-[18px] text-gray-500 ml-14 mt-6 cursor-pointer '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ducimus sunt doloremque quos, molestias sequi voluptatum, quaerat ipsa earum laborum voluptatibus natus labore necessitatibus harum, voluptate dolorum repudiandae unde reprehenderit.</p>

<div className="flex justify-center items-center flex-row">

<div className="flex items-center">
<div className="w-[30px] h-[30px] bg-slate-200 rounded-[50px] ml-12">
  <h3 className='text-blue-700 text-[14px]  ml-2 mt-[10px]  cursor-pointer hover:text-red-500'><FaCheck /></h3>
  </div>
  <p className='text-gray-400 text-[16px] cursor-pointer ml-3 mt-6'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing  <br />elit quaerat ipsa earum</p>

</div>

<div className="flex items-center">
<div className="w-[30px] h-[30px] bg-slate-200 rounded-[50px] ml-12">
  <h3 className='text-blue-700 text-[14px]  ml-2 mt-[10px]  cursor-pointer hover:text-red-500'><FaCheck /></h3>
  </div>
  <p className='text-gray-400 text-[16px] cursor-pointer ml-3 mt-6'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing  <br />elit quaerat ipsa earum</p>

</div>
</div>

<div className="flex justify-center items-center flex-row">

<div className="flex items-center">
<div className="w-[30px] h-[30px] bg-slate-200 rounded-[50px] ml-12">
  <h3 className='text-blue-700 text-[14px]  ml-2 mt-[10px]  cursor-pointer hover:text-red-500'><FaCheck /></h3>
  </div>
  <p className='text-gray-400 text-[16px] cursor-pointer ml-3 mt-6'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing  <br />elit quaerat ipsa earum</p>

</div>

<div className="flex items-center">
<div className="w-[30px] h-[30px] bg-slate-200 rounded-[50px] ml-12">
  <h3 className='text-blue-700 text-[14px]  ml-2 mt-[10px]  cursor-pointer hover:text-red-500'><FaCheck /></h3>
  </div>
  <p className='text-gray-400 text-[16px] cursor-pointer ml-3 mt-6'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing  <br />elit quaerat ipsa earum</p>

</div>
</div>



      </div>

    </div>
   </div>

<div className="w-full h-auto">
  <div className="flex justify-center items-center gap-2 pt-8">
    <div className="w-[25%] h-[80vh]">
      <div className="">
        <h3 className='text-[17px] text-gray-500 ml-5 mt-5 font-bold cursor-pointer'>MEET THE TEAM</h3>
        <h1 className='text-[35px] text-gray-800 cursor-pointer mt-5 ml-5 font-bold'>Save your time and  <br />money by choosing <br /> our profection team </h1>
        <p className='text-[17px] text-gray-500 cursor-pointer ml-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus  labore, omnis animi mollitia, qui natus, hic unde impedit.</p>
        <button className='w-[180px] h-[60px] bg-blue-500 mt-5 ml-5 text-white rounded-[30px] font-bold cursor-pointer shadow-md shadow-gray-500 hover:text-red-500'>See All MEMBER</button>
      </div>
    </div>

    <div className="w-[20%] h-[80vh]">
      <div className="w-[200px] h-[200px] bg-purple-400 rounded-[50%] ml-11 shadow-md shadow-gray-500">
        <img src="./img/t1.jpg" alt="" className='w-full h-full rounded-[50%]' />
      </div>
      <h1 className='font-bold text-[22px] ml-20 mt-4 cursor-pointer'>Cory Zamore</h1>
      <p className='text-[15px] text-gray-300  ml-14 font-bold cursor-pointer'>MARKETING SPECIALIST</p>
      <h2 className='text-[18px] text-gray-500  ml-12 font-bold mt-3 cursor-pointer'>Etaim porta sem magna</h2>
      <h3 className='text-[18px] text-gray-500  ml-20 font-bold cursor-pointer'>malesues mollis.</h3>

<div className="flex justify-center items-center gap-4 pt-7">
  <h2 className='text-blue-500 text-[19px] cursor-pointer'><FaTwitter /></h2>
  <h2 className='text-red-600 text-[19px] cursor-pointer'><FaCubesStacked /></h2>
  <h2 className='text-blue-500 text-[19px] cursor-pointer'>  <RxLinkedinLogo /></h2>



</div>


    </div>


    <div className="w-[20%] h-[80vh]">
    <div className="w-[200px] h-[200px] bg-purple-400 rounded-[50%] ml-11  shadow-md shadow-gray-500">
        <img src="./img/t2.jpg" alt="" className='w-full h-full rounded-[50%]' />
      </div>
      <h1 className='font-bold text-[22px] ml-20 mt-4 cursor-pointer'>Cory Zamore</h1>
      <p className='text-[15px] text-gray-300  ml-14 font-bold cursor-pointer'>MARKETING SPECIALIST</p>
      <h2 className='text-[18px] text-gray-500  ml-12 font-bold mt-3 cursor-pointer'>Etaim porta sem magna</h2>
      <h3 className='text-[18px] text-gray-500  ml-20 font-bold cursor-pointer'>malesues mollis.</h3>

<div className="flex justify-center items-center gap-4 pt-7">
  <h2 className='text-red-600 text-[19px] cursor-pointer' cursor-pointer><FaYoutube />
</h2>
  <h2 className='text-blue-600 text-[19px] cursor-pointer'><FaFacebookF />
</h2>
  <h2 className='text-red-500 text-[19px] cursor-pointer'>  <FaGlobe />
</h2>

</div>
</div>

<div className="w-[20%] h-[80vh] ">
    <div className="w-[200px] h-[200px] bg-purple-400 rounded-[50%] ml-11 shadow-md shadow-gray-500">
        <img src="./img/t3.jpg" alt="" className='w-full h-full rounded-[50%]' />
      </div>
      <h1 className='font-bold text-[22px] ml-20 mt-4 cursor-pointer'>Cory Zamore</h1>
      <p className='text-[15px] text-gray-300  ml-14 font-bold cursor-pointer'>MARKETING SPECIALIST</p>
      <h2 className='text-[18px] text-gray-500  ml-12 font-bold mt-3 cursor-pointer'>Etaim porta sem magna</h2>
      <h3 className='text-[18px] text-gray-500  ml-20 font-bold cursor-pointer'>malesues mollis.</h3>

<div className="flex justify-center items-center gap-4 pt-7">
  <h2 className='text-blue-500 text-[19px] cursor-pointer'><FaTwitter /></h2>
  <h2 className='text-red-600 text-[19px] cursor-pointer'><FaCubesStacked /></h2>
  <h2 className='text-blue-500 text-[19px] cursor-pointer'>  <RxLinkedinLogo /></h2>



</div>
</div>

</div>
</div>


<div className="w-full h-auto bg-blue-100 mt-5">
  <div className="flex justify-center items-center gap-6">
    <div className="w-[26%] h-[85vh]">
      <img src="./img/co2.png" alt="" className='w-full h-full mt-[-90px]' />
    </div>
    <div className="w-[40%] h-[70vh]">

<div className="flex justify-center  items-center mt-8">
  <h2 className='text-[25px] text-yellow-400 '><IoMdStarHalf /></h2>
  <h2 className='text-[25px] text-yellow-400 '><IoMdStarHalf /></h2>
  <h2 className='text-[25px] text-yellow-400 '><IoMdStarHalf /></h2>
  <h2 className='text-[25px] text-yellow-400 '><IoMdStarHalf /></h2>
  <h2 className='text-[25px] text-yellow-400 '><IoMdStarHalf /></h2>

</div>

<p className='text-gray-600 text-[22px]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis, est eligendi vitae ratione repellat assumenda necessitatibus minima facere debitis ipsam obcaecati deleniti consequatur et velit ad vero! Eligendi, molestiae debitis"</p>
<h2 className='text-gray-500 text-[22px] ml-40'>lacine bibuldeum nulla sed</h2>
<h2 className='text-gray-500 text-[22px] ml-56'>ipsum sit amet</h2>
<h2 className='text-gray-700 text-[20px] ml-56 font-bold mt-8'>Coriss Ambaby</h2>
<h2 className='text-gray-400 text-[15px] ml-56 font-bold mt-4'>FINANCIAL ANALYST</h2>




    </div>

  </div>
  </div> <br />
  <div className="w-full h-auto ">
    <div className="flex justify-center items-center gap-5 pt-6">
      <div className="w-[20%] h-[45vh] bg-white">
        <img src="./img/box1.png" alt="" className='mt-8 ml-5 text-[25px]'/>
        <h2 className='mt-3 ml-5 text-[18px] text-gray-500 cursor-pointer'>@ 2024 Sandbox. <br />All right reserved.</h2>
        <div className="flex gap-4 pl-4 pt-5">
          <h2 className='text-blue-400 text-[20px]'><FaTwitter />
</h2>
          <h2 className='text-blue-700 text-[20px]'><FaFacebookF />
</h2>
          <h2 className='text-red-400 text-[20px]'><FaGlobe />
</h2>
          <h2 className='text-red-500 text-[20px]'><MdLinkedCamera />
</h2>
          <h2 className='text-red-700 text-[20px]'><FaYoutube />
</h2>


        </div>
      </div>

      <div className="w-[20%] h-[45vh] bg-white">
        <h1 className='text-[22px]  font-bold ml-5 mt-6 cursor-pointer'>Get in Touch</h1>
        <p className='mt-3 ml-5 text-[17px] text-gray-500 cursor-pointer'>Moonshine St.14/05  <br />Light City,Landon, <br />United Kingdom</p>
        <h2 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer'>info@gmail.com  <br />00 (123) 456 78 90</h2>
      </div>
      <div className="w-[20%] h-[45vh] bg-white">
        <h1 className='text-[22px]  font-bold ml-5 mt-6 cursor-pointer'>Learn More</h1>
        <h3 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer hover:text-blue-500'>About us</h3>
        <h3 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer hover:text-blue-500'>Our story</h3>
        <h3 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer hover:text-blue-500'>projects</h3>
        <h3 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer hover:text-blue-500'>Teams of use</h3>
        <h3 className='mt-5 ml-5 text-[17px] text-gray-500 cursor-pointer hover:text-blue-500'>Privacy policy</h3>

      </div>
      <div className="w-[20%] h-[45vh] bg-white">
      <h1 className='text-[22px]  font-bold ml-5 mt-6 cursor-pointer'>OUR NewsLatter</h1>
        <h3 className='mt-5 ml-5 text-[19px] text-gray-500 cursor-pointer hover:text-blue-500'>Subscribe to our newslatter to <br />gat our news $ deals delivered to  <br />to</h3>
      </div>

    </div>
  </div>

</div>
    
 
</>
  )
}

export default About
