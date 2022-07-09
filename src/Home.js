import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <img className='home__image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt='prime-banner'/>

        <div className='home__row'>
            <Product
            id="12321341"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition (NEW)"
            price={24.49}
            rating={5}
            image="https://m.media-amazon.com/images/P/0984782850.01._SCLZZZZZZZ_SX500_.jpg"/>
            <Product             
            id="49538094"
            title="HIWUP KN95 Face Masks 50 Pack, Breathable Disposable 5-Ply KN95 Protection Mask, Black"
            price={7.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71zYkvoXboL._SL1280_.jpg"/>
        </div>

        <div className='home__row'>
            <Product
            id="4903850"
            title="Apple Watch Series 7 Smart Watch, Fitness Tracker, Blood Oxygen App, Water Resistant"
            price={359.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71fxj9HPLPL._AC_SL1500_.jpg"/>
            <Product
            id="23445930"
            title="Fire TV Cube, 4K HD Hands Free Streaming & Alexa Voice Remote included"
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/517S3hcoI0L._AC_SL1000_.jpg"/>
            <Product
            id="3254354345"
            title="2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Blue"
            price={1294.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61p-ADlugUS._AC_SL1500_.jpg"/>
        </div>

        <div className='home__row'>
            <Product
            id="90829332"
            title="SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR,Black"
            price={799.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81Butfqtj5L._AC_SL1500_.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Home