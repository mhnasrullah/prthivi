import Image from 'next/image'
import React from 'react'
import Box from '../components/Box'

export default function NewArrival() {
  return (
    <section className='py-16'>
        <Box>
            <p className='mb-6 text-xl'>NEW ARRIVALS</p>
            <div className='grid grid-cols-2 grid-rows-2 h-[60vh] md:grid-cols-4 md:grid-rows-1'>
                <div className='relative'>
                    <Image src={"/asset/images/arrA.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={'center'} />
                </div>
                <div className='relative'>
                    <Image src={"/asset/images/arrB.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={'center'} />
                </div>
                <div className='relative'>
                    <Image src={"/asset/images/arrC.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={'center'} />
                </div>
                <div className='relative'>
                    <Image src={"/asset/images/arrD.jpg"} layout="fill" loading='lazy' objectFit='cover' objectPosition={'center'} />
                </div>
            </div>
        </Box>
    </section>
  )
}
