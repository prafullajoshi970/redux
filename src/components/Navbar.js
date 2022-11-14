import React from 'react'
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import {setIsLight} from '../slice'


const Navbar = () => {
    const isLight=useSelector((state)=>state.isLight)
    const dispatch = useDispatch()
  return (
    <div>
        
        <div onClick={()=>{dispatch(setIsLight())}}>I Change Theme to {isLight?"Light":"Dark"}</div>
        <br/>
        <button><Link to="/">Home</Link></button>&nbsp;&nbsp;
        <button><Link to="/contact">contact</Link></button>&nbsp;&nbsp;
        <button><Link to="/Service">Service</Link></button>&nbsp;&nbsp;
        <br/>
        <br/>
        <button onClick={()=>{dispatch(setIsLight())}}>Toggle Theme to {isLight?"Dark":"Light"}</button> 
    </div>
  )
}

export default Navbar