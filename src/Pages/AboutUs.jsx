import React from 'react'
import { motion } from "framer-motion";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AboutUs() {
  return (
    <>
    <Navbar/>
    <section className=' justify-center text-center mt-10'>
        <h1 className=' text-[100px] font-semibold underline '>About Us</h1>
        <p className='w-[600px] m-auto'>
            We build solutions that safeguard children online and create 
            opportunities for developers to earn sustainably. Our products 
            bridge safety, trust, and growth.
        </p>
    </section>

    <section>
    </section>


    <Footer/>

    </>
  )
}

export default AboutUs