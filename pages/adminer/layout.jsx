import React, { useState } from 'react'
import Nav from '../../sections/adminer/Nav'

export default function Layout({children}) {
  const [navShow,setShowNav] = useState(false)
  return (
    <div className='md:flex'>
        {!navShow && (
          <button onClick={()=>setShowNav(true)} className="md:hidden fixed p-4 rounded-full border-gray border-2 m-4">=</button>
        )}
        <div>
            <Nav show={navShow} setShow={()=>setShowNav(!navShow)}/>
        </div>
        <div className='md:max-h-screen md:overflow-y-auto md:w-full'>{children}</div>
    </div>
  )
}
