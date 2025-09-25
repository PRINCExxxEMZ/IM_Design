import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../assets/mission_8535901.svg'
import img2 from '../assets/reward_17612734.svg'
import img3 from '../assets/vision_18291822.svg'
import { TestTube } from 'lucide-react'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'

function AboutUs() {
  return (
    <>
    <Navbar/>

      <section className=" text-center max-w-7xl mx-auto px-6 md:px-8 py-10">
          <div className='mt-[100px]'>
            <h1 className='text-[70px] font-bold'>Our Story</h1>
            <p className=' px-10'>
                We are a technology-driven cooperative society committed to empowering individuals and communities through innovation, collaboration, and shared growth. Our mission is to harness the power of technology to create opportunities, simplify processes, and provide solutions that improve lives. As a cooperative, we believe in collective progress—where every member contributes to and benefits from our shared success.

                We combine modern tools with human-centered approaches to build a strong foundation for financial inclusion, professional development, and sustainable growth. Through transparency, collaboration, and innovation, we are shaping a future where technology and cooperation work hand in hand to unlock potential for all.
            </p>
          </div>
          <div className='mt-[200px]'>
            <h1 className='text-left font-light text-[30px]'>Values</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
              <div className='p-10 border rounded-[3px] shadow-sm shadow-[#f6a11a]'>
              <img src={img} alt="" className='mx-auto' />
              <h2 className='font-semibold text-center text-[20px]'>Innovation</h2>
              <p className='text-center'> Leveraging technology to create meaningful solutions.</p>
              </div>

              <div className='p-10 border rounded-[3px] shadow-sm shadow-[#f6a11a]'>
              <img src={img2} alt="" className='mx-auto' />
              <h2 className='font-semibold text-center text-[20px]'>Inclusion</h2>
              <p className='text-center'> Ensuring opportunities are accessible to everyone.</p>
              </div>

              <div className='p-10 border rounded-[3px] shadow-sm shadow-[#f6a11a]'>
              <img src={img3} alt="" className='mx-auto' />
              <h2 className='font-semibold text-center text-[20px]'>Growth</h2>
              <p className='text-center'> Empowering members to achieve sustainable development..</p>
              </div>
            </div>
          </div>
      </section>

         <section className="mt-[200px] max-w-7xl mx-auto px-6 md:px-8 py-10">
                 <h1 className='text-left font-light text-[30px]'>Meet the Team</h1>
                <div>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-5 gap-10'>

                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> David Ogunbanjo</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Daniel Iyare</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Odafe Eyoufe</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Farouq Okeowo</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Emmanuel Adeoye</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Christopher Izundu</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Basit Ishola</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Malik Alaka</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                      <div className='p-5 text-center'>
                        <div className='w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-sm font-medium'>
                          JD
                        </div>
                        <h2 className='font-semibold text-[20px] mt-4'> Ayodeji Ibidayo</h2>
                        <p className='text-sm text-gray-500'>CEO & Co-Founder</p>
                      </div>
                  </div>
                </div>
         </section>

        <Testimonial/>
         <Footer/>



    </>
  )
}

export default AboutUs