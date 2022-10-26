import React from 'react'

export default function Box({children,className}) {
  return (
    <div className={`px-4 md:px-6 lg:px-10 ${className ? className : ' '}`}>{children}</div>
  )
}
