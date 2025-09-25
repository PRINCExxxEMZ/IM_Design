import React from 'react'
import Logo from "../assets/Logo_Light.png";


function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Logo" className="w-6 mb-4"/>
          <p className="mt-3 text-sm text-gray-400">
            Top learning experiences<br/> that create more talent in the world.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Product</h4>
          <ul className="text-sm space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="text-sm space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="text-sm space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()}. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com/PRINCExxxEMZ/IM_Design" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer