import Link from 'next/link'
import React from 'react'

export default function Button({_for,type,children,className,href}) {

    let styled = ' ';

    if(_for === "jumbotron"){
        styled = `${className ? className : ' '} md:text-white md:border-white bg-trans border-2 py-2 px-6 border-black`
    }

    if(type === "link"){
        return (
            <Link href={href}>
                <a className={styled}>{children}</a>
            </Link>
        )
    }else{
          return (
            <button>Button</button>
          )

    }

}
