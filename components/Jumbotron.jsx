import Image from 'next/image'
import React from 'react'
import Box from './Box'
import Button from './Button'
import Text from './Text'

export default function Jumbotron({heading,subHeading,img,textPosition}) {
  return (
    <div className='relative'>
        <div className='relative w-full h-[80vh] md:h-screen md:after:hidden after:absolute after:inset-0 after:bg-gradient-to-b after:from-trans after:to-white'>
            <Image
            src={img}
            layout="fill"
            objectFit='cover'
            objectPosition={"center"}/>
        </div>
        <div className='relative md:absolute md:inset-0'>
          <Box className={"md:mt-64 md:mr-10"}>
            <Text
            direction={"right"}
            className={"-mt-4"}
            _for={"headingJumbo"}>NEW COLLECTION</Text>
            <Text
            direction={"right"}
            className={"mt-4 lg:mt-6"}
            center
            _for={"subJumbo"}>
              Our easiest chuck-on-and-go staples come with a serious style heritage that`s liberating, sexy, comfy and supremely cool. 
            </Text>
            <div className="flex justify-center md:justify-end pb-12 mt-4 md:mt-6 lg:mt-8">
            <Button
            href={"/"}
            type={"link"}
            _for="jumbotron"
            >SHOP NEW ARRIVALS</Button>
            </div>
          </Box>
        </div>
    </div>
  )
}
