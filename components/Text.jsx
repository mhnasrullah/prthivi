import React from 'react'

export default function Text({_for,children,className,direction}) {

    let on = ' ';

    if(direction === "right"){
        on ='md:text-right md:ml-auto'
    }


    if(_for === "headingJumbo"){
        return (
          <h1 className={`${className ? className : ' '} text-4xl md:text-5xl w-2/3 text-center mx-auto md:w-full md:text-white ${on} font-merry`}>{children}</h1>
        )
    }else if(_for === "subJumbo"){
        return(
            <p className={`${className ? className : ' '} text-center md:mx-0 md:text-lg md:text-white ${on} md:w-2/3 lg:w-1/3 font-roboto font-light`}>{children}</p>
        )
    }
}
