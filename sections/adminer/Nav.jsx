import Link from 'next/link'
import React, { useState } from 'react'
import Box from '../../components/Box'
import Logo from '../../components/Logo'

const navData = [
  {
    id : 1,
    href : '/adminer',
    label : 'Landing Page'
  },
  {
    id : 2,
    href : '/adminer',
    label : 'List Merchant'
  }
]

export default function Nav() {

  const[active,setActive] = useState(1);
  const[show,setShow] = useState(false);

  return (
    <div className='h-screen'>
      <div className={`bg-black w-64 h-full pt-14 fixed ${show ? 'left-0' : 'left-0'}`}>
        <Box>
          <div className='flex justify-between items-center'>
            <Logo className={"w-1/2"}/>
            <button className='text-white'>
              x
            </button>
          </div>
          <div className='mt-12 flex flex-col space-y-4'>
            {navData.map((e,i)=>(
              <Link
              href={e.href}
              key={i}>
                <a
                onClick={()=>setActive(e.id)}
                className={`text-white ${active == e.id ? 'ml-5 pl-2 border-l-2 border-white font-medium' : 'ml-0' }`}>{e.label}</a></Link>
            ))}
          </div>
        </Box>
      </div>
    </div>
  )
}
