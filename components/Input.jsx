import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

export default function Input({placeholder,buttonText,className}) {
  return (
    <div className={`w-full md:w-1/2 md:mx-auto lg:w-1/3 border-b-2 border-gray p-4 flex ${className ? className : ' '}`}>
        <input type="email" required placeholder={placeholder} className="w-full outline-none text-lg"/>
        <button>{buttonText}</button>
    </div>
  )
}

export const InputAuth = ({label,id,placeholder,mt,value,...props}) => {
  const [active,setActive] = useState(false)

  return(
    <div className={`${mt ? mt : 'mt-0'}`}>
      <label htmlFor={id} className={`${active || value ? 'opacity-100' : 'hidden'} text-sm transition-all duration-75`}>{label}</label>
      <div className='py-2 border-b-2 border-gray'>
          <input
          className='bg-white outline-none w-full'
          id={id}
          onFocus={()=>setActive(true)}
          onBlur={()=>{
            if(value){
              setActive(true)  
            }else{
              setActive(false)
            }
          }}
          placeholder={active ? '' : placeholder}
          {...props}/>
      </div>
    </div>
  )
}

export const CheckBox = ({children,id,checked,mt,...props}) => {
  return(
    <div className={`flex items-start space-x-2 ${mt ? mt : 'mt-0'}`}>
        <div className={`mt-1 h-5 border-2 p-0 w-5 relative flex items-center justify-center ${checked ? 'bg-black' : 'bg-trans' } `}>
          <div className='absolute w-3 h-3'>
            <Image src={'/asset/icons/checkbox-icon.svg'} layout="fill"/>
          </div>
          <input type="checkbox" checked={checked} {...props} className="relative z-10 opacity-0 w-5 h-5" id={id}/>
        </div>
        <label htmlFor={id}>{children}</label>
    </div>
  )
}

export const Alert = ({children}) => {
  return <p className='text-[#ff4848] mt-1 ml-1 text-sm'>* {children}</p>
}