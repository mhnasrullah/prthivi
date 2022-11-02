import React from 'react'
import {getDataLandingByNumber} from '../../utils/func'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button'
import { setDataUpdate, setUpdate } from '../../state/slice/adminerSlice'
import Image from 'next/image'

export default function CardJumbo({dataQ,number}) {

    const dsp = useDispatch()

  return (
    <div className='border-[1px] border-gray w-full p-4 rounded-lg'>

        <h1 className='font-medium text-center'>SECTION {number}</h1>

        <div className='relative w-full mt-4'>
        <Image
        src={getDataLandingByNumber(dataQ.data,number).images[0].image_url}
        layout="responsive"
        width={1} 
        height={1} 
        className="rounded-lg"
        objectFit="cover"
        objectPosition="center"/>
        </div>

        <div className="mt-4 space-y-2">
            <div>
                <h2 className='font-medium'>Heading</h2>
                <p className='pl-4'>{getDataLandingByNumber(dataQ.data,number).section_title}</p>
            </div>
            <div>
                <h2 className='font-medium'>Description</h2>
                <p className='pl-4'>{getDataLandingByNumber(dataQ.data,number).section_description}</p>
            </div>
            <div>
                <h2 className='font-medium'>Button Text</h2>
                <p className='pl-4'>{getDataLandingByNumber(dataQ.data,number).button_name}</p>
            </div>
            <div>
                <h2 className='font-medium'>Button Link</h2>
                <p className='pl-4'>{getDataLandingByNumber(dataQ.data,number).button_link}</p>
            </div>
        </div>

        <Button _for={"buttonBlack"} onClick={()=>{
            dsp(setUpdate(number));
            dsp(setDataUpdate(getDataLandingByNumber(dataQ.data,number)))
        }} className="w-full mt-4">EDIT</Button>
    </div>
  )
}
