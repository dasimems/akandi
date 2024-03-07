import React from 'react'
import Image from 'next/image';
import { carGuide } from '@/assets/images';
import Button from '@/components/general/Button';

const CarGuide = () => {
  return (
      <section className='flex justify-center items-center h-[100vh]'>
        <div className='flex  text-center gap-8 items-center'>
          <div className='flex-col gap-8 flex '>
            <h3 className='text-2xl font-semibold ml-8 w-[250px]'>Find the car for your needs</h3>
            <p className='text-lg font-normal w-[350px] text-gray-400'>Answer some simple question and find the car that suits your needs </p>
            <Button className='text-md font-bold'>Get started!</Button>
          </div>
          <div className='h-[300px] w-[300px]  overflow-hidden rounded-full'>
             <Image src={carGuide} alt=''/>
          </div>
        </div>
      </section>
  )
}

export default CarGuide