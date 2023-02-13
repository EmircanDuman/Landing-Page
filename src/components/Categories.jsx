import React from 'react'
import { BsVectorPen, BsSunrise, BsMusicNote } from 'react-icons/bs'
import { RiHtml5Line } from "react-icons/ri"
import { TbMicrophone2, TbHeartbeat } from "react-icons/tb"
import { RxBackpack } from "react-icons/rx"
import { AiOutlineCamera } from "react-icons/ai"
import { HiOutlineDatabase } from "react-icons/hi"
import { IoBulbOutline } from "react-icons/io5"
import { SlGraph } from "react-icons/sl"
import { FaChalkboardTeacher } from "react-icons/fa"
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
        <h1 className='text-3xl font-bold md:leading-[72px] '>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
        <p className=' text-lg text-gray-900'>Various versions have evolved over the years, sometimes by accident</p>
        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
          <CategoryCard icon={ <BsVectorPen size={30}/>} title={'Design'}/>
          <CategoryCard icon={ <RiHtml5Line size={30}/>} title={'Development'}/>
          <CategoryCard icon={ <TbMicrophone2 size={30}/>} title={'Marketing'}/>
          <CategoryCard icon={ <RxBackpack size={30}/>} title={'Business'}/>
          <CategoryCard icon={ <BsSunrise size={30}/>} title={'Lifestyle'}/>
          <CategoryCard icon={ <AiOutlineCamera size={30}/>} title={'Photography'}/>
          <CategoryCard icon={ <BsMusicNote size={30}/>} title={'Music'}/>
          <CategoryCard icon={ <HiOutlineDatabase size={30}/>} title={'Data Science'}/>
          <CategoryCard icon={ <IoBulbOutline size={30}/>} title={'Personal Development'}/>
          <CategoryCard icon={ <TbHeartbeat size={30}/>} title={'Health & Fitness'}/>
          <CategoryCard icon={ <SlGraph size={30}/>} title={'Finance'}/>
          <CategoryCard icon={ <FaChalkboardTeacher size={30}/>} title={'Teaching'}/>
        </div>
      </div>
    </div>
  )
}

export default Categories
