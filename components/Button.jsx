import Link from 'next/link'
import React from 'react'

export default function Button({_for,type,children,className,href,...props}) {

    let styled = ' ';

    if(_for === "jumbotron"){
        styled = `${className ? className : ' '} md:text-white md:border-white bg-trans border-2 py-2 px-6 border-black`
    }else if(_for === "buttonBlack"){
        styled = `${className ? className : ' '} text-white md:border-black bg-black border-2 py-2 px-6 border-black`
    }

    if(type === "link"){
        return (
            <Link href={href}>
                <a className={styled}>{children}</a>
            </Link>
        )
    }else{
          return (
            <button {...props} className={styled}>{children}</button>
          )

    }

}
