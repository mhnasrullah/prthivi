import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Box from '../components/Box'
import { InputAuth,CheckBox, Alert } from '../components/Input';
import { setShow } from '../state/slice/authUserSlice'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';

export default function Register() {

    const show = useSelector((state)=>state.authUser.isShow);
    const dsp = useDispatch();

    const [formInput,setInput] = useState({})
    const [error,setError] = useState({})

    const validate = () => {

        let errorVal = null
        if(!formInput.firstname){
            errorVal = {
                ...errorVal,
                firstname : 'Firstname must be filled'
            }
        }

        if(!formInput.lastname){
            errorVal = {
                ...errorVal,
                lastname : 'Lastname must be filled'
            }
        }
        
        if(!formInput.email){
            errorVal = {
                ...errorVal,
                email : 'Email must be filled'
            }
        }else if(!(formInput.email.includes("@")) || !(formInput.email.includes("."))){
            errorVal = {
                ...errorVal,
                email : 'Email format is incorrect'
            }
        }

        if(!formInput.password){
            errorVal = {
                ...errorVal,
                password : 'Password must be filled'
            }
        }else if(formInput.password.length < 8){
            errorVal = {
                ...errorVal,
                password : 'Password must have minimum 8 character'
            }
        }

        if(errorVal){
            return {
                status : false,
                message : errorVal
            }
        }else{
            return {
                status : true
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {status,message} = validate();

        if(!status){
            setError(message)
            return false;
        }

        console.log("success")
        // DO REGISTER BELLOW
        
    }

  return (
    <section className={show ? 'fixed z-[5000] h-screen bg-black bg-opacity-70 w-full flex justify-center items-center' : 'hidden'}>
        <Box className={"w-full flex justify-center"}>
            <div className='bg-white w-full md:w-2/3 lg:w-2/5 py-14 px-4 md:px-6 rounded-lg max-h-[90vh] overflow-y-auto  '>
                <div className='flex justify-between'>
                    <p className='text-center text-lg md:text-xl'>CREATE ACCOUNT</p>
                    <button onClick={()=>dsp(setShow())} className="relative w-4 md:6">
                        <Image src={'/asset/icons/closeicon.svg'} layout={'responsive'} width={1} height={1}/>
                    </button>
                </div>
                <div>
                    <form className="mt-10" onSubmit={handleSubmit}>
                        <InputAuth
                        type="text"
                        mt={'mt-6'}
                        onChange={(e)=>{
                            setInput({
                                ...formInput,
                                firstname : e.target.value
                            })
                        }}
                        label={"First Name"}
                        placeholder="First Name"
                        id={"firstname"}
                        />
                        {
                            error.firstname && (
                                <Alert>{error.firstname}</Alert>   
                            )
                        }

                        <InputAuth
                        type="text"
                        value={formInput.lastname}
                        onChange={(e)=>{
                            setInput({
                                ...formInput,
                                lastname : e.target.value
                            })
                        }}
                        mt={'mt-6'}
                        label={"Last Name"}
                        placeholder="Last Name"
                        id={"lastname"}/>
                        {
                            error.lastname && (
                                <Alert>{error.lastname}</Alert>   
                            )
                        }

                        <InputAuth
                        type="email"
                        value={formInput.email}
                        onChange={(e)=>{
                            setInput({
                                ...formInput,
                                email : e.target.value
                            })
                        }}
                        mt={'mt-6'}
                        label={"Email"}
                        placeholder="Email"
                        id={"email"}/>
                        {
                            error.email && (
                                <Alert>{error.email}</Alert>   
                            )
                        }

                        <InputAuth
                        type="password"
                        value={formInput.password}
                        onChange={(e)=>{
                            setInput({
                                ...formInput,
                                password : e.target.value
                            })
                        }}
                        mt={'mt-6'}
                        label={"Password"}
                        placeholder="Password"
                        id={"password"}/>
                        {
                            error.password && (
                                <Alert>{error.password}</Alert>   
                            )
                        }

                        <CheckBox
                        checked={formInput.promotion}
                        mt={'mt-6'}
                        onChange={(e)=>setInput({
                            ...formInput,
                            promotion : e.target.checked
                        })}
                        id="checkbox">
                        Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties.
                        </CheckBox>

                        <p className='font-merry text-sm text-center mt-6 text-gray'>By signing up you agree to <Link href="/"><a className='text-black underline'>Terms of Service</a></Link> and <Link href="/"><a className='text-black underline'>Privacy Policy</a></Link></p>

                        <div className="flex justify-center mt-6">
                            <Button _for="buttonBlack">SIGN UP</Button>
                        </div>

                        <button className='font-merry underline mt-6'>
                            I HAVE AN ACCOUNT
                        </button>

                    </form>
                </div>
            </div>
        </Box>
    </section>
  )
}
