"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const TryOne = () => {
  return (
    <div className='bg-yellow-100 pb-[95px]'>
        <h2 className='uppercase text-[60px] font-bold text-[#005564] text-center py-[71px]'>Try one, you’ll like it!</h2>
        <div className='flex px-3'>

        <Swiper
        slidesPerView={3}
        spaceBetween={24}
   
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='w-full flex flex-col max-w-[480px] min-w-[480px] border-[2px] border-[#005564] rounded-[8px] divide-y-[2px] divide-[#005564]'>
            <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Imagetry.png"
            className='rounded-tl-[6px] rounded-tr-[6px]'
            width={480}
            height={480}
            alt="img"/>
            <div className='flex justify-between items-center bg-[#FFFAF6] rounded-br-[6px] rounded-bl-[6px] p-6 text-[#005564]'>
        <div className='flex flex-col gap-3'>
            <p className='text-[32px] font-bold  leading-[100%]'>Taster Bundle</p>
            <p className='text-[24px] font-normal  leading-[100%]'>4x 8oz + Pita</p>
        </div>
        <div className='flex gap-3 items-center'>
            <p className='text-[24px] font-normal '>$48.99</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M10.8001 15L18 8L10.8001 1M17.9997 8.00128L0 7.99829" stroke="#005564" stroke-width="2" stroke-miterlimit="10"/>
</svg>
        </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide>   <div className='w-full flex flex-col max-w-[480px] min-w-[480px] border-[2px] border-[#005564] rounded-[8px] divide-y-[2px] divide-[#005564]'>
            <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Imagetry2.png"
            className='rounded-tl-[6px] rounded-tr-[6px]'
            width={480}
            height={480}
            alt="img"/>
            <div className='flex justify-between items-center bg-[#FFFAF6] rounded-br-[6px] rounded-bl-[6px] p-6 text-[#005564]'>
        <div className='flex flex-col gap-3'>
            <p className='text-[32px] font-bold  leading-[100%]'>Taster Bundle</p>
            <p className='text-[24px] font-normal  leading-[100%]'>4x 8oz + Pita</p>
        </div>
        <div className='flex gap-3 items-center'>
            <p className='text-[24px] font-normal '>$48.99</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M10.8001 15L18 8L10.8001 1M17.9997 8.00128L0 7.99829" stroke="#005564" stroke-width="2" stroke-miterlimit="10"/>
</svg>
        </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide>   
        <div className='w-full flex flex-col max-w-[480px] min-w-[480px] border-[2px] border-[#005564] rounded-[8px] divide-y-[2px] divide-[#005564]'>
            <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Imagetry2.png"
            className='rounded-tl-[6px] rounded-tr-[6px]'
            width={480}
            height={480}
            alt="img"/>
            <div className='flex justify-between items-center bg-[#FFFAF6] rounded-br-[6px] rounded-bl-[6px] p-6 text-[#005564]'>
        <div className='flex flex-col gap-3'>
            <p className='text-[32px] font-bold  leading-[100%]'>Taster Bundle</p>
            <p className='text-[24px] font-normal  leading-[100%]'>4x 8oz + Pita</p>
        </div>
        <div className='flex gap-3 items-center'>
            <p className='text-[24px] font-normal '>$48.99</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M10.8001 15L18 8L10.8001 1M17.9997 8.00128L0 7.99829" stroke="#005564" stroke-width="2" stroke-miterlimit="10"/>
</svg>
        </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide> 
        <div className='w-full flex flex-col max-w-[480px] min-w-[480px] border-[2px] border-[#005564] rounded-[8px] divide-y-[2px] divide-[#005564]'>
            <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Imagetry2.png"
            className='rounded-tl-[6px] rounded-tr-[6px]'
            width={480}
            height={480}
            alt="img"/>
            <div className='flex justify-between items-center bg-[#FFFAF6] rounded-br-[6px] rounded-bl-[6px] p-6 text-[#005564]'>
        <div className='flex flex-col gap-3'>
            <p className='text-[32px] font-bold  leading-[100%]'>Taster Bundle</p>
            <p className='text-[24px] font-normal  leading-[100%]'>4x 8oz + Pita</p>
        </div>
        <div className='flex gap-3 items-center'>
            <p className='text-[24px] font-normal '>$48.99</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M10.8001 15L18 8L10.8001 1M17.9997 8.00128L0 7.99829" stroke="#005564" stroke-width="2" stroke-miterlimit="10"/>
</svg>
        </div>
            </div>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex flex-col max-w-[480px] min-w-[480px] border-[2px] border-[#005564] rounded-[8px] divide-y-[2px] divide-[#005564]'>
            <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Imagetry2.png"
            className='rounded-tl-[6px] rounded-tr-[6px]'
            width={480}
            height={480}
            alt="img"/>
            <div className='flex justify-between items-center bg-[#FFFAF6] rounded-br-[6px] rounded-bl-[6px] p-6 text-[#005564]'>
        <div className='flex flex-col gap-3'>
            <p className='text-[32px] font-bold  leading-[100%]'>Taster Bundle</p>
            <p className='text-[24px] font-normal  leading-[100%]'>4x 8oz + Pita</p>
        </div>
        <div className='flex gap-3 items-center'>
            <p className='text-[24px] font-normal '>$48.99</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M10.8001 15L18 8L10.8001 1M17.9997 8.00128L0 7.99829" stroke="#005564" stroke-width="2" stroke-miterlimit="10"/>
</svg>
        </div>
            </div>
        </div></SwiperSlide>

      </Swiper>

 
     
        </div>

    </div>
  )
}

export default TryOne