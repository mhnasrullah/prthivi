import React, { useEffect, useState } from 'react'
import Box from '../../components/Box'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setUpdate} from '../../state/slice/adminerSlice'
import Button from '../../components/Button'
import { useUpdateJumbotronMutation } from '../../state/slice/landingApiSlice'
import { getBase64 } from '../../utils/func'
import Image from 'next/image'

export function UpdateFormJumbo() {

    const {id,button_name,button_link,section_description,section_title} = useSelector((state)=>state.adminerPage.dataUpdate)
    const [data,setData] = useState({id,button_name,button_link,section_description,section_title});
    const [updateJumbo,{isLoading,isSuccess}] = useUpdateJumbotronMutation();
    const dsp = useDispatch();

    const [selectedFile, setSelectedFile] = useState(null);
    const [loadingShowFile,setLoadingFile] = useState(false);

    const changeHandler = async (e) => {
        const file = e.target.files[0];
        if(file.type === "image/jpeg" || "image/png"){
            setLoadingFile(true)
            await getBase64(file).then( r => setSelectedFile(r))
            setLoadingFile(false)
        }
	};

    const validation = () => {
        return {
            status : true
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validation().status){

            const formData = {};
    
            if(selectedFile){
                formData = {
                    ...formData,
                    section_images_64base : [selectedFile]
                }
            }
            formData = {
                ...formData,
                ...data
            }

            updateJumbo(formData)
        }

    }


    useEffect(()=>{
        if(isSuccess){
            dsp(setUpdate(null))
        }
    },[isSuccess])

  return (
    <div className='fixed h-screen w-full bg-white bg-opacity-75 z-50 flex justify-center items-center'>
        {isLoading ? (
            <div>UPDATE ON PROCESS</div>
        ) : (
            <Box className={"w-full"}>
                <div className="p-4 bg-white border-[1px] border-gray rounded-lg shadow-lg w-full max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between">
                        <h1>UPDATE</h1>
                        <button
                        onClick={()=>{
                            dsp(setUpdate(null))
                        }}
                        >x</button>
                    </div>
                    <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
                        <div className='flex flex-col space-y-6 mt-6'>
    
                            <div className='flex flex-col space-y-1'>
                                <label className='font-medium' htmlFor="title">Heading</label>
                                <input
                                className='border-b-[1px] border-b-gray'
                                id='title'
                                type="text"
                                value={data.section_title}
                                onChange={(e)=>(
                                    setData({
                                        ...data,
                                        section_title : e.target.value
                                    })
                                )}/>
                            </div>
    
                            <div className='flex flex-col space-y-3'>
                                <label className='font-medium' htmlFor="description">Description</label>
                                <input
                                className='border-b-[1px] border-b-gray'
                                id='description'
                                type="text"
                                value={data.section_description}
                                onChange={(e)=>(
                                    setData({
                                        ...data,
                                        section_description : e.target.value
                                    })
                                )}/>
                            </div>
    
                            <div className='flex flex-col space-y-3'>
                                <label className='font-medium' htmlFor="buttonName">Button Name</label>
                                <input
                                className='border-b-[1px] border-b-gray'
                                id='buttonName'
                                type="text"
                                value={data.button_name}
                                onChange={(e)=>(
                                    setData({
                                        ...data,
                                        button_name : e.target.value
                                    })
                                )}/>
                            </div>
    
                            <div className='flex flex-col space-y-3'>
                                <label className='font-medium' htmlFor="buttonLink">Button Link</label>
                                <input
                                className='border-b-[1px] border-b-gray'
                                id='buttonLink'
                                type="text"
                                value={data.button_link}
                                onChange={(e)=>(
                                    setData({
                                        ...data,
                                        button_link : e.target.value
                                    })
                                )}/>
                            </div>
    
                            <div className='flex flex-col space-y-3'>
                                <label className='font-medium' htmlFor="img">Image</label>
                                {selectedFile && (
                                    loadingShowFile ? (<div className='py-10 ml-10'>Loading...</div>) : (
                                        <div className='w-1/3 relative'>
                                            <Image src={selectedFile} layout="responsive" width={1} height={1} objectFit={'cover'} objectPosition="center"/>
                                        </div>
                                        )
                                    )
                                }
                                <input
                                className='border-b-[1px] border-b-gray'
                                id='img'
                                type="file"
                                onChange={changeHandler}/>
                            </div>
    
                            <Button _for={"buttonBlack"} type={"submit"}>UPDATE</Button>
                        </div>
                    </form>
    
    
                </div>
            </Box>
            
        )}
    </div>
  )
}
