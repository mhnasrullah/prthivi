import React from 'react'
import Image from 'next/image'

export default function Logo({className}) {
  return (
    <div className={`relative ${className ? className : ' '}`}>
        <Image src={"/logow.png"} layout="responsive" width={187} height={63}/>
    </div>
  )
}
