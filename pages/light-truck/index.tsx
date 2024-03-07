import Selectmenu from '@/components/general/selectmenu'
import React, { useState } from 'react'

const LightTruck = () => {
  const [menu,setMenu]=useState("")
  return (
    <>
     <div className='flex justify-center items-center w-[900px] h-[100vh]'>
      <div className='w-full'>
        <p>LightTruck</p>
        <Selectmenu value={menu}
          onChange={(newValue)=>setMenu(newValue)}
          placeholder="select Transport" 
          options={["bus","car","truck"]}
          />
      </div>
     </div>
    
    </>
  )
}

export default LightTruck
