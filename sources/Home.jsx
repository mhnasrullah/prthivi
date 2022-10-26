import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
        <Nav />
        <Jumbotron img={"/asset/images/landingA.jpg"}/>
    </div>
  )
}
