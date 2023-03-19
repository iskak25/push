import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ActivRoot from '../Models/Home/Activ/ActivRoot'
import IsActiv from '../Models/Home/IsActiv/IsActiv'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <IsActiv /> */}
      <ActivRoot />
      <Footer />
    </div>
  )
}

export default Home
