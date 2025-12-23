'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-primary-600 rounded-lg p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                SnapCoat CRM
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#features" 
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-lg hover:bg-primary-50"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-lg hover:bg-primary-50"
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-lg hover:bg-primary-50"
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-lg hover:bg-primary-50"
            >
              Contact
            </Link>
            <Link 
              href="#login" 
              className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-lg hover:bg-primary-50"
            >
              Login
            </Link>
            <Link 
              href="#signup" 
              className="ml-4 bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none p-2 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200">
            <Link 
              href="#features" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#login" 
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="#signup" 
              className="block px-4 py-3 bg-primary-600 text-white rounded-lg text-center font-semibold mt-2 hover:bg-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

