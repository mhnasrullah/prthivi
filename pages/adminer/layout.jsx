import React from 'react'
import Nav from '../../sections/adminer/Nav'

export default function layout({children}) {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <div>{children}</div>
    </div>
  )
}
