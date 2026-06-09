"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <div>
      {/* <div className="top-info-bar">
        <div className="container">
          <div className="top-info-left">
            <div className="text-xs">Since 1994 • 30+ Years of Trust</div>
            <div className="text-xs">All India Network</div>
          </div>
          <div className="top-info-right">
            <div className="text-xs">Rail • Road • Air Cargo Solutions</div>
            <div className="text-xs">+91 98765 43210</div>
          </div>
        </div>
      </div> */}

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm bg-opacity-95">
      <div className="container flex items-center justify-between py-4">
        {/* logo (restored) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white p-3 flex items-center justify-center shadow-md">
            <Image src="/JLlogo.svg" alt="Jarwal" width={56} height={56} />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/JarwalLogisticSvg.svg" alt="Jarwal" width={200} height={120} />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-sm font-semibold text-gray-800 hover:text-navy transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#about" className="text-sm font-semibold text-gray-800 hover:text-navy transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#services" className="text-sm font-semibold text-gray-800 hover:text-navy transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-semibold text-gray-800 hover:text-navy transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#0B3B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
          <div className="container flex flex-col py-4 gap-2">
            <Link href="#" onClick={()=>setOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Home</Link>
            <Link href="#about" onClick={()=>setOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">About</Link>
            <Link href="#services" onClick={()=>setOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Services</Link>
            <Link href="#contact" onClick={()=>setOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </header>
    </div>
  )
}
