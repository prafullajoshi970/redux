import React from 'react'
import Navbar from './Navbar'
import './all.css'
import { useSelector } from 'react-redux'

const Contact = () => {
    const isLight=useSelector((state)=>state.isLight)
  return (
    <>
      <div className={isLight?'light':'dark'}>
        <Navbar/>
        <br/>
        <br/>

        <h1>You can call me on prafullajoshi970@gmail.com</h1>
      </div>

    </>

  )
}

export default Contact