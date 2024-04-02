import React from 'react'
import { MdPhoneInTalk } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaMarsAndVenus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";






function Home() {
  return (
    <>
     <div className="w-full h-[95vh] mt-20">
      <div className="flex justify-center items-center gap-14">
        <div className="w-[40%] h-[80vh] ">
          <h1 className='text-[50px] font-bold ml-20 mt-5'>We bring solutions <br /> to make life easier <br /> for our customers.</h1>
          <p className='text-gray-500 ml-20 mt-5 text-[26px]'>We have considered our solution to <br />support every stage of your growth.</p>

          <button className='text-white text-[18px] w-[170px] h-[60px] font-bold bg-blue-500 rounded-[50px] ml-20 mt-11'>Explore Now</button>
          <button className='text-blue-600 text-[18px] w-[150px] h-[65px] font-bold border-[3px] border-blue-600 rounded-[50px] ml-4 mt-11'>Free Trail</button>
        </div>


        <div className=" img1 shadow-md shadow-gray-900  bg-cover w-[40%] h-[90vh] rounded-[15px]"></div>



      </div>
      <div className="w-full h-[30vh]">
        <div className="flex justify-center items-center gap-20 pt-32">
          <img src="./img/logo1.png" alt="" className='w-[120px] h-[40px]' />
          <img src="./img/logo2.png" alt="" className='w-[120px] h-[40px]' />
          <img src="./img/logo3.png" alt="" className='w-[120px] h-[40px]' />
          <img src="./img/logo4.png" alt="" className='w-[120px] h-[40px]' />
          <img src="./img/logo5.png" alt="" className='w-[120px] h-[40px]' />
          <img src="./img/logo6.png" alt="" className='w-[120px] h-[40px]' />

        </div>
      </div>

      <div className="w-full h-[25vh] mt-36">
        <div className="flex justify-center items-center flex-col">
          <h4 className='text-gray-500 text-[18px] font-bold'>WHAT WE Do?</h4>
          <h1 className='text-[45px] font-bold'>The service we offer is specifically </h1>
          <h2 className='text-[40px] ml-4 font-bold'>designed to meet your needs.</h2>
        </div>
      </div>
      <div className="w-full h-[60vh]">
        <div className="flex justify-center items-center pt-6 gap-8">
          <div className="w-[20%] h-[50vh] bg-white flex justify-center items-center  flex-col">
            <div className="w-[70px] h-[70px] bg-blue-600 rounded-[50px]">
              <h3 className='text-white text-[35px] mt-5 ml-4'><MdPhoneInTalk /></h3>
            </div>
            <h2 className='text-[20px] font-bold mt-3'>24/7 Support</h2>
           
            <p className='ml-11 mt-4 text-gray-500 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> quod! Sequi illo, veritatis  is <br />delectus  nulla eius magnam tempore magni distinctio?</p>
            <div className="flex">
           <h2 className='text-blue-600 text-[17px] ml-3 mt-4'>Learn more</h2>
            <h2 className='text-blue-600 text-[10px] ml-2 mt-6'><FaArrowRight /></h2>
</div>
          </div>

          <div className="w-[20%] h-[50vh] bg-white flex justify-center items-center  flex-col">
          <div className="w-[70px] h-[70px] bg-blue-600 rounded-[50px]">
            <h3 className='text-white text-[35px] mt-4 ml-5'><FaBookReader />
</h3>

          </div>

            <h2 className='text-[20px] font-bold mt-3'>Sesure payments</h2>
            <p className='ml-11 mt-4 text-gray-500 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> quod! Sequi illo, veritatis  is <br />delectus  nulla eius magnam tempore magni distinctio?</p>
                        <div className="flex">
           <h2 className='text-blue-600 text-[17px] ml-3 mt-4'>Learn more</h2>
            <h2 className='text-blue-600 text-[10px] ml-2 mt-6'><FaArrowRight /></h2>
</div>
          </div>
          <div className="w-[20%] h-[50vh] bg-white flex justify-center items-center  flex-col">
          <div className="w-[70px] h-[70px] bg-blue-600 rounded-[50px]">
            <h3 className='text-white text-[35px] mt-4 ml-5'><MdOutlineBrowserUpdated />
</h3>
          </div>
            <h2 className='text-[20px] font-bold mt-3'>Daily Update</h2>
            <p className='ml-11 mt-4 text-gray-500 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> quod! Sequi illo, veritatis  is <br />delectus  nulla eius magnam tempore magni distinctio?</p>
                        <div className="flex">
           <h2 className='text-blue-600 text-[17px] ml-3 mt-4'>Learn more</h2>
            <h2 className='text-blue-600 text-[10px] ml-2 mt-6'><FaArrowRight /></h2>
</div>
          </div>
          <div className="w-[20%] h-[50vh] bg-white flex justify-center items-center  flex-col">
          <div className="w-[70px] h-[70px] bg-blue-600 rounded-[50px]">
            <h3  className='text-white text-[35px] mt-5 ml-3'><FaMarsAndVenus />
</h3>
          </div>
            <h2 className='text-[20px] font-bold mt-3'>Market Research</h2>
            <p className='ml-11 mt-4 text-gray-500 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> quod! Sequi illo, veritatis  is <br />delectus  nulla eius magnam tempore magni distinctio?</p>
                        <div className="flex">
           <h2 className='text-blue-600 text-[17px] ml-3 mt-4'>Learn more</h2>
            <h2 className='text-blue-600 text-[10px] ml-2 mt-6'><FaArrowRight /></h2>
</div>
          </div>

        </div>
      </div>

      <div className="w-full h-[110vh]  mt-6">
        <div className="flex justify-center items-center gap-16 pt-6">
          <div className="w-[40%] h-[95vh] bg-cover mt-16 shadow-md shadow-gray-500 rounded-[10px]">
            <img src="./img/office1.jpg" alt=""  className='w-full h-full'/>
          </div>

          <div className="w-[35%] h-[100vh] bg-white">
            <h1 className='text-[40px] ml-5 mt-5 font-bold cursor-pointer'>How It Works?</h1>
            <p className='text-gray-500 text-[23px] mt-6 ml-5 cursor-pointer'>So here are three working steps <br /> why our value our valued customers <br /> choose us.</p>
            
            <div className="w-[50px] h-[50px] bg-blue-600 flex rounded-[50px] ml-4 mt-9">
              <h1 className='text-[35px] text-white ml-4'>1</h1>
            </div>
            <h1 className='text-[19px] text-gray-500 font-bold ml-20 mt-[-40px] cursor-pointer'>Collect Ideas</h1>
            <p className='text-[19px] text-gray-600 ml-20 mt-2 cursor-pointer'>Lorem, ipsum dolor sit amet <br />  consectetur adipisicing elit.</p>
         <br />

         <div className="w-[50px] h-[50px] bg-blue-600 flex rounded-[50px] ml-4 mt-9">
              <h1 className='text-[35px] text-white ml-4'>2</h1>
            </div>
            <h1 className='text-[19px] text-gray-500 font-bold ml-20 mt-[-40px] cursor-pointer'>Date Analysis</h1>
            <p className='text-[19px] text-gray-600 ml-20 mt-2 cursor-pointer'>Lorem, ipsum dolor sit amet <br />  consectetur adipisicing elit.</p>
        
            <div className="w-[50px] h-[50px] bg-blue-600 flex rounded-[50px] ml-4 mt-9">
              <h1 className='text-[35px] text-white ml-4'>3</h1>
            </div>
            <h1 className='text-[19px] text-gray-500 font-bold ml-20 mt-[-40px] cursor-pointer'>Finalize product</h1>
            <p className='text-[19px] text-gray-600 ml-20 mt-2 cursor-pointer'>Lorem, ipsum dolor sit amet <br />  consectetur adipisicing elit.</p>
        



          </div>


        </div>
      </div>

     </div>
    </>
  )
}

export default Home
