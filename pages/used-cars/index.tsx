import SelectBox from '@/components/general/form/SelectBox'
import Selectmenu from '@/components/general/selectmenu'
import React, { useState } from 'react'

const UsedCars = () => {
   const [hideFilter,setHideFilter]=useState(false)
  return (
    <section className='flex justify-center'>
        <div>
          <div>
           <p>Ourcustomers say <span>Great</span></p>
            <p>starr image</p>
            <p>4.2 out of 5 based on 7,622 reviews</p>
            <div>
              <p>star</p>
              <h5>Trustpilot</h5>
            </div>
          </div>
          <section>
            <div>
              <h3>Used cars for sale-Bidding and fixed price</h3>
              <span>more info</span>
            </div>
            <article>
              Here you will find hundreds of used cars to buy from different car bands-at
              auction and for a fixed price.Many are in the best condition,while others may need 
              to be fixed a little.All cars are properly tested with the results reported in the ad 
              for each car  
            </article>
            <div>
              <div>
                <SelectBox placeholder='Brand'/>
                <SelectBox placeholder='Model'/>
                <SelectBox placeholder='Fuel'/>
                <SelectBox placeholder='Gearbox'/>
                <SelectBox placeholder='Model year'/>
                <SelectBox placeholder='Price at car description'/>
              </div>
             { hideFilter ? <div>
                <h6>More filters</h6>
               </div> : 
               <div>
                  <div>
                    <SelectBox placeholder='Buy method'/>
                    <SelectBox placeholder='Cost'/>
                    <SelectBox placeholder='Body'/>
                    <SelectBox placeholder='Mileage'/>
                    <SelectBox placeholder='Facilities'/>
                    <SelectBox placeholder='other'/>
                  </div>
                  <div>
                    <p>Fewer filters</p>
                  </div>
                </div>
                }
            </div>
          

          </section>
        </div>
    </section>
  )
}

export default UsedCars