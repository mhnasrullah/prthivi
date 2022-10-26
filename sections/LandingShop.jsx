import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Box from '../components/Box'

export default function LandingShop() {
  return (
    <section className='h-screen items-center flex'>
        <Box className={"h-[75vh] w-full"}>
            <div className='space-x-6'>
                <Link href={"/"}>
                    <a className='text-lg md:text-xl'>SHOP INSTAGRAM</a>
                </Link>
                <Link href={"/"}>
                    <a className='text-lg md:text-xl'>SHOP &rarr;</a>
                </Link>
            </div>
            <div className='h-full md:flex mt-4'>
                <div className="w-full h-2/3 md:h-full relative">
                    <Image src={"/asset/images/shopA.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={"center"}/>
                </div>
                <div className='w-full h-1/3 md:h-full grid grid-cols-4 md:grid-cols-2'>
                    <div className="relative">
                        <Image src={"/asset/images/shopB.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={"center"}/>
                    </div>
                    <div className="relative">
                        <Image src={"/asset/images/shopC.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={"center"}/>
                    </div>
                    <div className="relative">
                        <Image src={"/asset/images/shopD.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={"center"}/>
                    </div>
                    <div className="relative">
                        <Image src={"/asset/images/shopE.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={"center"}/>
                    </div>
                </div>
            </div>
        </Box>


    </section>
  )
}
