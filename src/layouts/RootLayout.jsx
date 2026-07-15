import React from 'react'
import Naveber from '../Components/Naveber'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Naveber />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default RootLayout
