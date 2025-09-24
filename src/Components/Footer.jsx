import React from 'react'
import Logo from "../assets/Logo_Dark 1.svg";


function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10 md:pb-[200px]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img src={Logo} alt="Logo" className="w-8 h-8 object-contain"/>
          <p className="text-sm text-gray-300 mt-2">Top learning experiences<br/> that create more talent in the world.</p>
        </div>



        <div>
          <h5 className="font-semibold mb-2">Product</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Legal</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer