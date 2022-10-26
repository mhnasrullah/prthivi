import React, { useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import Nav from '../sections/Nav'
import Image from 'next/image'
import NewArrival from '../sections/NewArrival'
import LandingShop from '../sections/LandingShop'
import NewsLetter from '../sections/NewsLetter'
import Footer from '../sections/Footer'

export default function Home() {

  return (
    <>
        <Nav />

        <Jumbotron
        href={"/"}
        contentPosition={"right"}
        heading={"NEW COLLECTION"}
        subHeading={"Our easiest chuck-on-and-go staples come with a serious style heritage that`s liberating, sexy, comfy and supremely cool."}
        buttonText={"SHOP NEW ARRIVALS"}
        img={"/asset/images/landingA.jpg"}/>

        <Jumbotron
        href={"/"}
        contentPosition={"left"}
        heading={"VINTAGE INSPIRED"}
        subHeading={"Inspired by the '70s and 80's), we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette."}
        buttonText={"SHOP NOW"}
        img={"/asset/images/landingB.jpg"}/>

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
        heading={"SUSTAINABLE MODEL"}
        subHeading={"What started as a true '80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing."}
        buttonText={"SHOP DENIM"}
        img={"/asset/images/landingC.jpg"}/>

        <NewArrival/>

        <Jumbotron
        href={"/"}
        contentPosition={"right"}
        bottomContent
        heading={"PRAY FOR ROCK"}
        subHeading={"Beloved and forever relevant, there's a convenience factor in a well-built pair of all-in-ones."}
        buttonText={"SHOP COLLECTION"}
        img={"/asset/images/landingD.jpg"}/>

        <LandingShop />
        <NewsLetter/>

        <Footer/>

    </>
  )
}
