import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Nav from '../sections/Nav'
import Image from 'next/image'
import NewArrival from '../sections/NewArrival'
import LandingShop from '../sections/LandingShop'
import NewsLetter from '../sections/NewsLetter'
import Footer from '../sections/Footer'
import Auth from '../sections/Register'
import { useSelector } from 'react-redux'
import { getDataLandingByNumber } from '../utils/func'

export default function Home() {

  const {meta,data} = useSelector((state)=>state.landingPage.data)

  return (
    <>
        <Auth/>
        <Nav />

        <Jumbotron
        href={"/"}
        contentPosition={"right"}
        heading={getDataLandingByNumber(data,1).section_title}
        subHeading={getDataLandingByNumber(data,1).section_description}
        buttonText={getDataLandingByNumber(data,1).button_name}
        img={getDataLandingByNumber(data,1).images[0].image_url}/>

        <Jumbotron
        href={"/"}
        contentPosition={"left"}
        heading={getDataLandingByNumber(data,2).section_title}
        subHeading={getDataLandingByNumber(data,2).section_description}
        buttonText={getDataLandingByNumber(data,2).button_name}
        img={getDataLandingByNumber(data,2).images[0].image_url}/>

        <div className='grid h-screen grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1'>
          <div className='relative'>
            <Image src={"/asset/images/productA.jpg"} layout="fill" objectFit='cover' objectPosition={"center"}/>
          </div>
          <div className='relative'>
            <Image src={"/asset/images/productB.jpg"} layout="fill" objectFit='cover' objectPosition={"center"}/>
          </div>
          <div className='relative'>
            <Image src={"/asset/images/productC.jpg"} layout="fill" objectFit='cover' objectPosition={"center"}/>
          </div>
        </div>

        <Jumbotron
        href={"/"}
        contentPosition={"left"}
        heading={getDataLandingByNumber(data,3).section_title}
        subHeading={getDataLandingByNumber(data,3).section_description}
        buttonText={getDataLandingByNumber(data,3).button_name}
        img={getDataLandingByNumber(data,3).images[0].image_url}/>

        <NewArrival/>

        <Jumbotron
        href={"/"}
        contentPosition={"right"}
        bottomContent
        heading={getDataLandingByNumber(data,4).section_title}
        subHeading={getDataLandingByNumber(data,4).section_description}
        buttonText={getDataLandingByNumber(data,4).button_name}
        img={getDataLandingByNumber(data,4).images[0].image_url}/>

        <LandingShop />
        <NewsLetter/>

        <Footer/>

    </>
  )
}
