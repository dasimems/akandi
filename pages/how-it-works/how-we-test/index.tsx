import { testHero } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Test = () => {
  return (
    <section className='flex justify-center'>
        <div>
            <main>
                <div>
                 <Image src={testHero} alt=''/>  
               </div>
               <div>
                The Akandi-test
               </div>
            </main>
            <section>
                <div>
                    <h3>How we test the cars</h3>
                    <article>
                        Buying a car from us at Akandi online is just as safe as buying a new one.
                        All cars have of course undergone our Akandi test - a standardize vehicle test 
                        performed by our professional technicians.The car is tested at more than 170 points
                        and also test-driven during the test.  
                    </article>
                    <article>
                        Our business concept ensures that the person buying a used cars does not have to prepare
                        for unforeseen cost but rather knows the actual condition of the car when buying it.We see 
                        to it that both seller and buyer get a good car deal and we neither embellish nor undersell
                        the car in its presentation and advertisement. 
                    </article>
                </div>
                <div>
                    <h3>We test 170 different points</h3>
                    <div>
                        <p>During the vehicle test,the car is tested on 170 points.these are divided into 
                            the following  five cartegories:
                        </p>
                        <ul>
                            <li>Engine and gearbox</li>
                            <li>Brakes</li>
                            <li>Technology and equipment</li>
                            <li>Body-interior</li>
                        </ul>
                        <article>
                            if there  is a remark this is presented under "see comment",with text and sometimes an 
                            image.in this way,you as the buyer can decide if you think it is something to consider before bidding   
                        </article>
                    </div>

                      
                </div>
                <div>
                    <h3>Tread depth is measures and noted</h3>
                    <article>
                        
                    </article>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Test