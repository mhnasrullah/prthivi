import React, { useEffect, useState } from 'react'
import Box from '../../components/Box'
import Image from 'next/image'
import Button from '../../components/Button'
import { InputAuth } from '../../components/Input'
import { Alert } from '../../components/Input'
import Logo from '../../components/Logo'

export default function Login() {

    const [formInput,setInput] = useState({});
    const [error,setError] = useState({});

    const validate = () => {

        let errorVal = null

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
        e.preventDefault();

        const {status,message} = validate();
        if(!status){
            setError(message)
            return false;
        }
    }
  return (
    <div className='h-screen w-full bg-gray flex items-center'>
        <Box className="w-full flex justify-center">
            <div className='rounded-lg py-16 bg-white w-full md:w-2/3 lg:w-2/5 px-4'>
                <Logo className={'w-24 mx-auto mb-12'}/>
                <div>
                    <form onSubmit={handleSubmit}>

                        <InputAuth
                        id="email"
                        type="email"
                        onChange = {(e)=>setInput({
                            ...formInput,
                            email : e.target.value
                        })}
                        value = {formInput.email}
                        placeholder={"email"}
                        label="Email"/>
                        {
                            error.email && (
                                <Alert>{error.email}</Alert>   
                            )
                        }

                        <InputAuth
                        mt={"mt-4"}
                        id="password"
                        type="password"
                        onChange = {(e)=>setInput({
                            ...formInput,
                            password : e.target.value
                        })}
                        value = {formInput.password}
                        placeholder={"password"}
                        label="Password"/>
                        {
                            error.password && (
                                <Alert>{error.password}</Alert>   
                            )
                        }

                        <Button type={"submit"} _for={"buttonBlack"} className="w-full mt-6">LOGIN</Button>
                    </form>
                </div>
            </div>
        </Box>
    </div>
  )
}
