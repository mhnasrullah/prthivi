import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { directionScroll } from '../utils/func'
import Box from './Box'
import Button from './Button'
import Text from './Text'

export default function Jumbotron({
  bottomContent,
  heading,
  subHeading,
  img,
  contentPosition,
  buttonText,
  href}) {

  let position = ' '
  if(contentPosition === "right"){
    position = 'md:mr-10'
  }else if(contentPosition == "left"){
    position = "md:ml-10"
  }
  
  
  return (
    <div className='relative'>

        <div className='relative w-full h-[80vh] md:h-screen md:after:hidden after:absolute after:inset-0 after:bg-gradient-to-b after:from-trans after:to-white'>
            <Image
            loading='lazy'
            src={img}
            layout="fill"
            objectFit='cover'
            objectPosition={"center"}/>
        </div>
        
        <div className='relative md:absolute md:inset-0'>
          <Box className={`${bottomContent ? 'md:mt-96' : 'md:mt-64'} ${position}`}>

            <Text
            direction={contentPosition}
            className={"-mt-4"}
            _for={"headingJumbo"}>{heading}</Text>

            <Text
            direction={contentPosition}
            className={"mt-4 lg:mt-6"}
            center
            _for={"subJumbo"}>{subHeading}</Text>

            <div className={`flex justify-center
            ${contentPosition === "right" ? 'md:justify-end' : ' '}
            ${contentPosition === "left" ? 'md:justify-start' : ' '}
            pb-12 mt-4 md:mt-6 lg:mt-8`}>
            <Button
            href={href}
            type={"link"}
            _for="jumbotron"
            >{buttonText}</Button>
            </div>
            
          </Box>
        </div>
    </div>
  )
}
