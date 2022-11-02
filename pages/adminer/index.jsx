import React, { useEffect, useState } from 'react'
import Box from '../../components/Box'
import Layout from './layout'
import { useGetAllJumbotronQuery } from '../../state/slice/landingApiSlice'
import { useSelector } from 'react-redux'
import { UpdateFormJumbo } from '../../sections/adminer/UpdateForm'
import CardJumbo from '../../sections/adminer/CardJumbo'

export default function Home() {

  const {data : dataQ, error,isError, isLoading} = useGetAllJumbotronQuery();

  const {updateJumbo} = useSelector((state)=>state.adminerPage);

  if(isLoading){
    return <>LOADING...</>
  }else if(isError){
    console.log(error)
    return <>ERROR...</>
  }else{
    return (
      <>
      {updateJumbo && (
        <UpdateFormJumbo/>
      )}
      <Layout>
          <Box className={"pt-24 space-y-5 md:grid lg:grid-cols-2 lg:space-y-0 lg:gap-5"}>

            <CardJumbo
            dataQ={dataQ}
            number={1}
            />
            <CardJumbo
            dataQ={dataQ}
            number={2}
            />
            <CardJumbo
            dataQ={dataQ}
            number={3}
            />
            <CardJumbo
            dataQ={dataQ}
            number={4}
            />
            
          </Box>
      </Layout>
      </>
    )
  }

}