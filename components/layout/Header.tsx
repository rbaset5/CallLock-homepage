'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-1 md:py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="CallLock" 
              className="w-20 sm:w-24 md:w-28 h-auto -my-3 md:-my-4"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-text hover:text-action transition-colors duration-200"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-text hover:text-action transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-text hover:text-action transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
            >
              Book Demo
            </Button>
            <Button 
              variant="primary" 
              size="sm"
            >
              Start Free Pilot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-text hover:text-action transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-text hover:text-action transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-text hover:text-action transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Book Demo
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                className="w-full"
              >
                Start Free Pilot
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
