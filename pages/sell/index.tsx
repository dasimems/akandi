import { sellHero } from '@/assets/images'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/general/Button'
import InputField from '../../components/general/form/InputField';
import Link from 'next/link';
import { salesMaking } from '@/utils/_variables';



const Sell = () => {
  return (
    <>
    
      <section className='flex justify-center overflow-hidden'>
          <div className='relative'>
              <div className='mt-[-4rem] h-[670px]'>
                <Image src={sellHero} alt="" width={1920}/>
              </div>
              <div className='absolute top-[25%]  left-[21%] flex flex-col gap-1 text-center'>
                  <div>
                    <h3 className='text-[4rem] font-bold text-white'>We have sold 300 000 cars</h3>
                      <p className='text-2xl font-medium text-white'>Sell to highest bidder</p>
                  </div>
                  <div className='bg-gray-100 opacity-70 mt-6 p-6 flex flex-col gap-2 w-[450px] ml-[11rem]'>
                      <p>Ready to sell? Get your valuation in three easy steps!</p>
                    <InputField  placeholder='Enter licence plate'/>
                    <p>is the vehicle missing a reg.number? Does not apply to cars.<Link href="/">Click here</Link></p>
                    <Button>Continue</Button>
                  </div>
              </div>
          </div>
      </section>
      <section className='flex justify-center overflow-hidden'>
        <div >
          <h3>Testimonial api needed </h3>
        </div>

      </section>
      <section className='flex justify-center overflow-hidden mb-8'>
         <div>
           <h3 className='text-center'>Make a super simple sale</h3>
           <div className='flex  w-[1100px] gap-8'>
            { salesMaking.map((items,i)=> 
            <div key={i} className='flex flex-col gap-2' >
                <div>
                  <Image src={items.img} alt=''/>
                  <h4 className='font-semibold'>{items.title}</h4>
                </div>
                <div className='flex flex-col gap-1 p-1' >
                  <div className='flex items-center gap-4'>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckIcon</title><path d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m18 7.5-8.25 8.25L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p> {items.desc1}</p>
                  </div>  
                  <div className='flex items-center gap-4'>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckIcon</title><path d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m18 7.5-8.25 8.25L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p> {items.desc2}</p>
                  </div> 
                  <div className='flex items-center gap-4'>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckIcon</title><path d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m18 7.5-8.25 8.25L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p> {items.desc3}</p>
                  </div>
                </div>
            </div>)}
           </div>
         </div>
      </section>
      <section className='flex justify-center overflow-hidden mb-8 p-4 bg-neutraldark-background' >
          <div className='flex gap-6'>
            <div>
            
            </div>
            <main>
              <h4>We at Akandi online sells cars that:</h4>
              <div className='flex '>
                <div>

                   <div>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <article>Are registered for sale by the owner or a family member of the owner</article>
                  </div>
                  <div>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <article>The car has been registered to the same owner for the last 2 months.pls calll us and we will help you  </article>
                  </div>
                  <div>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <article>Are maximum 15 yeaars old</article>
                  </div>

                </div>
              
                <div>
                  <div>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <article>Have less than 300,000kkm on the clock</article>
                  </div>
                  <div>
                   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <article>Have atleast three months until the next inspection period and must pass the most recent inspection. </article>
                 </div>
                 <div>
                   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <article>Are not subject to a driving ban </article>
                 </div>
                 <div>
                   <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>CheckmarkIcon</title><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <article>Are not sport cars modified or tuned up</article>
                 </div>

                
                </div>
              </div>
            </main>
          </div>
      </section>
    </>
  )
}
export default Sell
