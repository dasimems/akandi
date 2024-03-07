import { SelectProps } from '@/utils/types'

import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'


const Selectmenu:React.FC<SelectProps> = ({value, onChange, placeholder ,options}) => {
    const [open,setOpen]=useState(false)
  return (
      <div className='relative max-w-[220px] w-full'>
        <div onClick={()=>setOpen(!open)}
          tabIndex={0}
          className="w-full flex items-center justify-between py-3 px-3 bg-white border-2 border-gray-200">
         <p className={`text-sm ${value ? "text-black" : "text-gray-400"} `}>{value ? value :placeholder} </p>
         <FaAngleDown className={`text-base transition-all ${open ? "rotate-180" : "rotate-0"}`}/>
       </div>
       {
         open && 
         <div className="absolue top-[110%] left-0 w-full max-h-[320px] py-2 bg-white border-2 border-gray-200">
            {options.map((items,i) =>
               <div key={i} onClick={()=>{
                onChange(items)
                setOpen(false);
              }}
                 className={`flex my-1 py-2 px-3 cusor-pointer ${items === value ? "bg-gray-200" : "bg-white"} hover:bg-gray-200 rounded-md`}>
                 <p className='text-sm text-black '>{items}</p>
                </div>
             )}
         </div>
       }

      </div>
  )
}

export default Selectmenu