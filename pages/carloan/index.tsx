import { carLoanHero } from '@/assets/images'
import CheckBox from '@/components/general/form/CheckBox'
import InputField from '@/components/general/form/InputField'
import Image from 'next/image'
import React from 'react'
import About from '../about/index';
import Button from '@/components/general/Button'

const CarLoan = () => {
  return (
     <section className='flex justify-center'>
         <div>

            <main className='relative'>
               <div>
                  <Image src={carLoanHero} alt='' width={1920}/>
               </div>
               <div className='absolute text-center top-[50%] left-[30%] flex flex-col gap-4'>
                  <h3 className='text-4xl font-bold text-white'>Car loan from Akandi Online </h3>
                  <p className='text-lg text-white font-semibold'>Simple and flexible</p>
               </div>
            </main>
            <div className=' my-10 flex justify-center'> 
               <div className='flex flex-col gap-4 justify-center w-[1000px]'>

                 <section className='flex justify-center gap-6 bg-neutraldark-background p-4 border-2 border-gray-200'>     
                     <div className='w-full flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>would you like some help?</h4>
                        <InputField placeholder='Name' type='text'/>
                        <InputField placeholder='Email' type='email'/>
                        <InputField placeholder='Phone number' type='number'/>
                        <InputField placeholder='identificarion number' type='number'/>
                        <div className='flex items-start gap-2'>
                           <CheckBox/>
                           <p>
                              I agree that Akandi online save my personal data and contact
                              me regarding the carloan
                           </p>
                        </div>
                           <Button>Send Interest inquiry</Button>
                     </div>
                     <div className='w-full mt-7 flex flex-col gap-6'>
                        <article className='text-slate-600 font-normal'>
                           make an interest inquiry here! When you fill iin your details you agree that 
                           Akandi online manage yoour personal data for your loan application 
                        </article>
                        <article className='italic font-bold'>
                           *For cars with a meter reading below 200 000km,the loan is calculated with 50%
                           residual value,36-month loan period,20% cash contribution and 8.95% interest.
                           For cars with a meter reading of more than 200 000km,the loan isi calculated 
                           without residual value and with a 72-month loan period.
                        
                        </article>
                     </div>
                  </section>
                  <section className='flex justify-between gap-8 my-6'>
                        <div className='flex flex-col gap-4'>
                          <div className='flex flex-col gap-4' >
                           <h3 className='text-2xl font-medium'>With a car loan you get:</h3>
                              <ul className='flex flex-col gap-2'>
                                 <li>opportunity to buy a car today </li>
                                 <li>a tailor-made financing situation</li>
                                 <li>favourable conditions due to our size</li>
                              </ul>
                          </div>
                           <div className='flex flex-col gap-4 '>
                              <h3 className='text-2xl font-medium'>95 percent of  applicants are granted </h3>
                              <article>
                                 we sell 26 000 cars a year,which gives us a good starting point 
                                 for negotiating a favourable car loan for you.We have the 
                                 opportunity to help 95 percent of those who apply to sign a car loan,
                                 and if we are not able to solve a loan for you,you have the right to skip the purchase.
                                 The best way to fair car trade  basically

                              </article>
                           </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                           <h3 className='text-2xl font-medium'>A simple and tailor-made car loan </h3>
                           <article>
                              We want to make it easy for you to buy a car.We therefore offer a finiancing 
                              solution custom made for you-based on your needs.You choose how much you wnat 
                              to pay in cash (minimum 20 percent) and how much you pay per month  
                           </article>
                        </div>
                  </section>
               
               </div>
          
            </div>
         </div> 
     </section>
   
  )
}

export default CarLoan