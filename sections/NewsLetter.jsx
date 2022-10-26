import React from 'react'
import Input from '../components/Input'
import Box from "../components/Box"

export default function NewsLetter() {
  return (
    <section className='py-14'>
        <Box>
            <p className='text-center text-lg md:text-xl'>SIGN UP FOR UPDATES</p>
            <p className='font-merry text-center mt-1 text-sm'>Sign up for exclusive early sale access and tailored new arrivals.</p>
            <Input
            className={"mt-6"}
            buttonText={"JOIN"}
            placeholder={"Your email address"}/>
        </Box>
    </section>
  )
}
