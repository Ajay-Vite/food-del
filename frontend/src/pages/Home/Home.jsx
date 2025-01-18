import React, { useState } from 'react'
import './Home.css'
import img1 from '../../assets/menu_1.png'
import img2 from '../../assets/menu_2.png'
import img3 from '../../assets/menu_3.png'
import img4 from '../../assets/menu_4.png'
import img5 from '../../assets/menu_5.png'
import img6 from '../../assets/menu_6.png'
import img7 from '../../assets/menu_7.png'
import img8 from '../../assets/menu_8.png'

// Card Images Importing

import card1 from '../../assets/food_1.png'
import card2 from '../../assets/food_2.png'
import card3 from '../../assets/food_3.png'
import card4 from '../../assets/food_4.png'
import card5 from '../../assets/food_5.png'
import card6 from '../../assets/food_6.png'
import card7 from '../../assets/food_7.png'
import card8 from '../../assets/food_8.png'
import card9 from '../../assets/food_9.png'
import card10 from '../../assets/food_10.png'
import card11 from '../../assets/food_11.png'
import card12 from '../../assets/food_12.png'
import card13 from '../../assets/food_13.png'
import card14 from '../../assets/food_14.png'
import card15 from '../../assets/food_15.png'
import card16 from '../../assets/food_16.png'
import card17 from '../../assets/food_17.png'
import card18 from '../../assets/food_18.png'
import card19 from '../../assets/food_19.png'
import card20 from '../../assets/food_20.png'

// Fotter Images

import playstore from '../../assets/play_store.png'
import appstore from '../../assets/app_store.png'
import logo from '../../assets/logo.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Home = () => {

  const [counter, setCounter] = useState(0)

  const increaseHandeler = () => {
    setCounter((val) => val + 1);
  }
  const decreaseHandeler = () => {
    setCounter((val) => val - 1);
  }

  return (
    <>
      <div className="category" id='menu'>
        <h1>Top Category</h1>

        <img src={img1} alt="" className='img1' />
        <p className='p-1'>Noddles</p>

        <img src={img2} alt="" className='img2' />
        <p className='p-2'>Shawarma</p>


        <img src={img3} alt="" className='img3' />
        <p className='p-3'>Waffers</p>


        <img src={img4} alt="" className='img4' />
        <p className='p-4'>SandWidtch</p>


        <img src={img5} alt="" className='img5' />
        <p className='p-5'>Cakes</p>


        <img src={img6} alt="" className='img6' />
        <p className='p-6'>Curry Rice</p>


        <img src={img7} alt="" className='img7' />
        <p className='p-7'>French Fries</p>


        <img src={img8} alt="" className='img8' />
        <p className='p-8'>Egg Rice</p>


      </div>
      {/* Card section */}

      <div className="card-1">
        <img src={card1} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-2">
        <img src={card2} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-3">
        <img src={card3} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-4">
        <img src={card4} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-5">
        <img src={card5} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-6">
        <img src={card6} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-7">
        <img src={card7} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-8">
        <img src={card8} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>

      </div><div className="card-9">
        <img src={card9} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-10">
        <img src={card10} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-11">
        <img src={card11} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-12">
        <img src={card12} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-13">
        <img src={card13} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-14">
        <img src={card14} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>


      <div className="card-15">
        <img src={card15} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-16">
        <img src={card16} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-17">
        <img src={card17} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-18">
        <img src={card18} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-19">
        <img src={card19} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <button id='decrease' onClick={decreaseHandeler}>-</button>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>

      <div className="card-20">
        <img src={card20} alt="" />
        <button id='increase' onClick={increaseHandeler}>+</button>
        <h3>{counter}</h3>
        <p>Food Provides Essential Nutrition and Health</p>
        <button>Add to Cart</button>
      </div>


      <div className="better">
        <center>
          <h1 className='hh1' id='moblie-app'>For Better Experience Download</h1>
          <h1 className='hh2'><span>Tomato.</span> App</h1>

          <img src={playstore} alt="" className='playstore' />
          <img src={appstore} alt="" className='appstore' />
        </center>
      </div>

      {/* Fotter Section */}

      <div className="fotter">
        <div className="f-container" id='contact'>
          <img src={logo} alt="" />
          <br />
          <br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src={twitter} alt="" className='twitter' />
          <img src={facebook} alt="" className='facebook' />
          <img src={linkedin} alt="" className='linkedin' />
          <hr />
          <h2 className='f-2'>COMPANY</h2>
          <p className="home">Home</p>
          <p className="about">About</p>
          <p className="delivery">Delivery</p>
          <p className="p-p">Privacy policy</p>
          <h2 className="f-3">GET IN TOUCH</h2>
          <p className='ph'>+91 9566318052</p>
          <p className='email'>contactomato@gmail.com</p>
          <center>
            <p className="f-en">Copyright 2025 © Tomato.com - All Rights Reserved.</p>
          </center>
        </div>
      </div>

    </>
  )
}

export default Home