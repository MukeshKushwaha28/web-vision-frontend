'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-800 p-4 text-white shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center md:pr-60">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/about-us" className="hover:text-gray-300">About Us</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-blue-900 p-4 rounded-lg">
          <li><Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/about-us" className="hover:text-gray-300">About Us</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link href="/contact-us" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}
