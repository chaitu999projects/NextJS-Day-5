import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition"
        >
          Chaitu
        </Link>

        {/* Menu Links */}
        <div className="space-x-6">
          <Link 
            className="hover:text-indigo-300 transition font-medium" 
            href="/products/laptops"
          >
            Add Laptops
          </Link>
          <Link 
            className="hover:text-indigo-300 transition font-medium" 
            href="/products/laptops/getlaptop"
          >
            Added Laptops
          </Link>
          <Link 
            className="hover:text-indigo-300 transition font-medium" 
            href="/products/mobiles"
          >
            Add Mobiles
          </Link>
          <Link 
            className="hover:text-indigo-300 transition font-medium" 
            href="/products/mobiles/getmobile"
          >
            Added Mobiles
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
