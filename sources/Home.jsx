import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
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
        subHeading={"Inspired by the ‘70s and 80’s), we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette."}
        buttonText={"SHOP NOW"}
        img={"/asset/images/landingB.jpg"}/>
    </div>
  )
}
