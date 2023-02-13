import React from 'react'
import heroImg from "../assets/heroImg.png"
import { AiOutlineSearch } from "react-icons/ai" 

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>
          <h1 className='py-2 md:text-6xl text-5xl font-semibold md:leading-[72px]'>Access To <span className='text-[#20B486]'>5000+</span>
          Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</h1>
          <p className='py-2 text-lg text-gray-900'>Various versions have evolved over the years, sometimes by accident,</p>
          <form className='p-4 rounded-md flex justify-between max-w-[700px] shadow-[-4px_-4px_44px_rgba(0,0,0,0.08)] border'>
            <input
              className='bg-white'
              type="text"
              placeholder="What do you want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{color: "#000"}}
              />
            </button>
          </form>
        </div>

        <img src={ heroImg } alt="heroImg" className='md:order-last order-first' />
      </div>
    </div>
  )
}

export default Hero
