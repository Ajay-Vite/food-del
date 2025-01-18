

import React, { useState } from 'react'
import './Navbar.css'
import search from '../../assets/search_icon.png'
import cart from '../../assets/bag_icon.png'
import Header from '../../assets/header_img.png'
import Home from '../../pages/Home/Home'
import Cancel from '../../assets/cross_icon.png'


const Navbar = ({setShowLogin}) => {
  

  const [menu,setmenu] = useState('Menu')

  return (
    <>
      <div className='nav'>
        <h1>Tomato.</h1>

        <ul>
          <li onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""} ><a href="#home">Home</a></li>
          <li onClick={()=>{setmenu("menu")}} className={menu==="menu"?"active":""}><a href="#menu">Menu</a></li>
          <li onClick={()=>{setmenu("moble-app")}} className={menu==="mobile-app"?"active":""}><a href="#moblie-app">Moblie-App</a></li>
          <li onClick={()=>{setmenu("contact")}} className={menu==="contact"?"active":""}><a href="#contact">Contact</a></li>
        </ul>
 
        <button className='search'><img src={search} alt="" /></button>
        <button className='cart'><img src={cart} alt="" /></button>
        <button className='sign' onClick={()=>setShowLogin(true)} id='showNav'>Sign In</button>

      </div>

      <div className="header-img" id='home'>
        <img src={Header} alt="" />
        <h2>Order Your Faviroute Food Here</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi qui fuga, assumenda, dolores porro, necessitatibus sapiente pariatur nesciunt repudiandae laudantium ipsam similique modi! Quisquam est natus inventore, quod a ipsa.</p>
        <button>View Menu</button>
      </div>

      <div className="login-popup" id='popup'>

      </div>

      <div className="login"  id='openLogin'>
        <h1>Sign In</h1>
        <img src={Cancel} alt="" className='cancel' id='cancel'/>
        <br />
        <form>
        <input type="text" placeholder='Enter Your Name...' required/>
        <br /><br />
        <input type="email" placeholder='Enter Your Email...' required/>
        <br /><br />
        <input type="password" placeholder='Enter Your Password...' required/>
        <br /><br />
        <button type="submit" id="submit">Login</button>
        </form>
      </div>

      <Home />
    </>

    


  )
}



export default Navbar