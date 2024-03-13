import React from 'react'
import Image from 'next/image';
import { carInsuranceHero} from '@/assets/images';
import Link from 'next/link';

const Insurance = () => {
  return (
    <section className='flex justify-center'>
      <div>
        <div className='relative'>
           <Image src={carInsuranceHero} alt='' width={1920}/>
          <div className='absolute top-[60%] left-[40%]'>
              <h3 className='text-2xl font-bold text-white'>Insured from the get-go</h3>
          </div>
        </div>

        <section className='flex justify-center my-10'>
          <div className='w-[600px] flex flex-col gap-4'>
            <h3 className='text-2xl font-bold'>Car insurance through Trygg-Hansa</h3>
            <article className='text-lg font-semibold '>
              Together with Trygg-Hansa we offer you a commplimentary 14-day car
              insurance when you buy a car through us.That way you are insured from
              the get-go!Once teh trialperiod is over you will ne offered to extend the insurance deal.
            </article>
            <article className='text-lg'>
              Together with Trygg-Hansa we offer you the car insurance TryggaMil-a car insurance 
              that becomes available once you buy a car through us.We will offer you a two week 
              trial-period.starting theh moment you pick up your car at one of our facilities and 
              thereafter you will be offered to extand the insurance TryggaMil through Trygg-Hansa
              if you wish     
            </article>
            <p className='text-lg'>please contact our <Link href="" className='text-blue-700 font-semibold ' >Customer Service</Link> to learn more.</p>
           </div>
        </section>

      </div>
    </section>
  )
}

export default Insurance