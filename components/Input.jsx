import React from 'react'

export default function Input({placeholder,buttonText,className}) {
  return (
    <div className={`w-full md:w-1/2 md:mx-auto lg:w-1/3 border-b-2 border-gray p-4 flex ${className ? className : ' '}`}>
        <input type="email" required placeholder={placeholder} className="w-full outline-none text-lg"/>
        <button>{buttonText}</button>
    </div>
  )
}
