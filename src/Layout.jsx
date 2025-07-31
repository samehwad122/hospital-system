import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

function Layout() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
