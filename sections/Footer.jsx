import React from 'react'
import Box from '../components/Box'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='py-16'>
      <Box className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"}>

        <div>
          <h2 className="text-lg">CUSTOMER SERVICE</h2>
          <div className='flex flex-col mt-6 space-y-3'>
            <Link href="/"><a>CONTACT</a></Link>
            <Link href="/"><a>FAQ</a></Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg">INFORMATION</h2>
          <div className='flex flex-col mt-6 space-y-3'>
            <Link href="/"><a>SIZE GUIDE</a></Link>
            <Link href="/"><a>ABOUT US</a></Link>
            <Link href="/"><a>LEGAL POLICIES</a></Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg">FOLLOW US</h2>
          <div className='flex flex-col mt-6 space-y-3'>
            <Link href="/">
              <a className='font-merry flex items-center'>
                <div className="relative w-6 mr-2">
                  <Image src={"/asset/icons/fb.svg"} layout="responsive" height={1} width={1}/>
                </div>
                FACEBOOK</a>
            </Link>
            <Link href="/">
              <a className='font-merry flex items-center'>
                <div className="relative w-6 mr-2">
                  <Image src={"/asset/icons/odon.svg"} layout="responsive" height={1} width={1}/>
                </div>
                prthivifashionlab</a>
            </Link>
            <Link href="/">
              <a className='font-merry flex items-center'>
                <div className="relative w-6 mr-2">
                  <Image src={"/asset/icons/ig.svg"} layout="responsive" height={1} width={1}/>
                </div>
                @prthivi.lab</a>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg">CONTACT US</h2>
          <div className='flex flex-col mt-6 space-y-3'>
            <p>prthivilab@gmail.com</p>
            <p>(+62) 8229 4498 99</p>
            <p>Malang, East Java, IDN</p>
          </div>
        </div>

      </Box>
    </footer>
  )
}
