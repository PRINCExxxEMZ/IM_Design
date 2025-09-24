import React, { useState } from "react"; 
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_Dark 1.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-3">
            <div className="">
              <img src={Logo} alt="Logo" className="w-8 h-8 object-contain"/>
            </div>

          </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <Link to="/" className='hover:text-black transition'>Home</Link>
              <Link to="/about" className='hover:text-black transition'>About Us</Link>
              <Link to="/service" className='hover:text-black transition'>Pricing</Link>
              <Link to="/solution" className='hover:text-black transition'>Solution</Link>
              <Link to="/support" className='hover:text-black transition'>Support</Link>
            </nav>

          
          <div className="flex items-center gap-4">
            <button
              className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-[3px] shadow-sm hover:opacity-95 transition"
              aria-label="Join us"
            >
              Join us
            </button>

            {/* mobile menu button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (small screens) */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-3 text-gray-700">
            <a href="#home" onClick={() => setOpen(false)} className="py-2">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About Us</a>
            <a href="#solutions" onClick={() => setOpen(false)} className="py-2">Solutions</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="py-2">Pricing</a>
            <a href="#support" onClick={() => setOpen(false)} className="py-2">Support</a>
            <a href="#join" onClick={() => setOpen(false)} className="mt-2 inline-block bg-black text-white text-center px-4 py-2 rounded-[3px]">Join us</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar