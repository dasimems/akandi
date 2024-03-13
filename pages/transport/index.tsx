import React from 'react'
import Image from 'next/image'
import { transportHero } from '@/assets/images'
import SelectBox from '@/components/general/form/SelectBox'

const Transport = () => {
  return (
    <section className='flex justify-center'>
      <div>

        <div className='relative'>
            <Image src={transportHero} alt=""  width={1920}/>
            <div className='absolute top-[50%] left-[40%] text-center'>
             <h3>You can collect your car here</h3>
           </div>
        </div>
        <div>
            <p>
                Akandi online have facilities all over Sweden.Regardless of which facility
                the car you buy is currently at, you can pick up at the facility that suit 
                you best.you can look for price information for the transport in the list below 
            </p>

            <div>
             <h3>How much is the transport of the car? </h3>
              <SelectBox placeholder='From facility'/>
              <SelectBox placeholder='To facility'/>
            </div>
        </div>
        <section>
            <div></div>
            <div>
              <p>
                *The price information relates to cars within the following 
                dimensions:L 5.0 by H 1.7  
              </p>
              <p>
                if the vehicle exceeds these dimensions,please contact our Customer Centre for price details
              </p>
              <p>
                For transport of repair objects,a winch cost of SEK 1,500 excluding VAT is added
              </p>
            </div>
        </section>
        <section>
            <div>
                <h3>How to book transport </h3>
                <article>
                    All transport of cars between our facilities is carried out using car 
                    transporters and takes around one week.At longer distances,the transport can
                    take up to 14 days.
                </article>
                <p>
                    For booking of transport we ask that you contact our customer center no later
                    than 24 hours after the end of the auction. 
                </p>
            </div>
            <div>
                <p>
                    Customer Service Center
                </p>
            </div>
        </section>
      </div>

    </section>
  )
}

export default Transport