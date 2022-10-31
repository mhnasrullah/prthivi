import React from 'react'
import Nav from '../../sections/adminer/Nav'

export default function Layout({children}) {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <div>{children}</div>
    </div>
  )
}
