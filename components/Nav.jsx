import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Box from './Box'

export default function Nav() {
  return (
    <Box className={"fixed w-full z-50"}>
        <nav className='grid grid-cols-3 py-4 items-center'>
            <div className='flex items-center mt-3 lg:hidden'>
                <button>
                    <div className='relative w-4 md:w-6'>
                        <Image src={"/asset/icons/hamw.svg"} layout="responsive" width={44.31} height={32}/>
                    </div>
                </button>
            </div>
            <div className='hidden lg:flex lg:items-center lg:mt-3 space-x-6'>
                <Link href={"/"}>
                    <a className='text-white'>
                        NEW ARRIVALS
                    </a>
                </Link>
                <Link href={"/"}>
                    <a className='text-white'>
                        SHOP
                    </a>
                </Link>
                <Link href={"/"}>
                    <a className='text-white'>
                        COLLECTIONS
                    </a>
                </Link>
            </div>
            <div className='flex md:justify-center items-center'>
                <div className="relative w-5/6 md:w-1/2 lg:w-1/5">
                    <Image src={"/logow.png"} layout="responsive" width={187} height={63}/>
                </div>
            </div>
            <div className='flex items-center justify-end space-x-6 md:space-x-10 mt-3'>
                <button>
                    <div className='lg:flex lg:items-center lg:space-x-2'>
                        <div className="relative w-4 md:6">
                            <Image src={"/asset/icons/searchw.svg"} layout="responsive" width={1} height={1}/>
                        </div>
                        <p className="hidden lg:inline-block text-white">SEARCH</p>
                    </div>
                </button>
                <Link href={"/"}>
                    <a className='text-white hidden lg:inline'>
                        SIGN IN
                    </a>
                </Link>
                <Link href={"/"}>
                    <a className='text-white hidden lg:inline'>
                        BAG(2)
                    </a>
                </Link>
                <button className='lg:hidden'>
                    <div className="relative w-4 md:6">
                        <Image src={"/asset/icons/shopw.svg"} layout="responsive" width={27.43} height={32}/>
                    </div>
                </button>
                <button>
                    <div className="relative w-4 md:6">
                        <Image src={"/asset/icons/lovew.svg"} layout="responsive" width={36.4} height={32}/>
                    </div>
                </button>
            </div>
        </nav>
    </Box>
  )
}
