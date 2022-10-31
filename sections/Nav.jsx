import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import { useDispatch } from 'react-redux'
import { setShow as setShowLogin } from '../state/slice/authUserSlice'
import Logo from '../components/Logo'

export default function Nav() {

    const [trans,setTrans] = useState(true);
    const [show,setShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.innerWidth > 772){
                if(
                    (window.scrollY % window.innerHeight > 150 && (4*window.innerHeight) > window.scrollY) || 
                    ((4*window.innerHeight) < window.scrollY)
                    ){
                    setTrans(false)
                }else{
                    setTrans(true)
                }
            }else{
                if(window.scrollY > 150){
                    setTrans(false)
                }else{
                    setTrans(true)
                }
            }
        })
    })

  return (
    <Box className={`fixed w-full z-50 ${trans ? 'bg-trans' : 'bg-[#00000077]'} transition-all`}>
        <nav className='grid grid-cols-3 py-4 items-center'>
            <div className='flex items-center mt-3 lg:hidden relative z-10'>
                <button onClick={()=>setShow(!show)}>
                    <div className='relative w-4 md:w-6'>
                        <Image src={"/asset/icons/hamw.svg"} layout="responsive" width={44.31} height={32}/>
                    </div>
                </button>
            </div>
            <div className={`fixed h-screen lg:h-fit w-full lg:static ${show ? 'top-0' : '-top-full'} transition-all left-0 bg-black lg:bg-trans flex-col pt-36 lg:pt-0 lg:flex-row flex items-center lg:mt-3 space-y-6 lg:space-y-0 lg:space-x-6`}>
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
                <Logo className={'w-5/6 md:w-1/2 lg:w-1/5'}/>
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
                <button onClick={ () => dispatch(setShowLogin()) } className='text-white hidden lg:inline'>
                    SIGN IN
                </button>
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
