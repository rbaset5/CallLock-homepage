import React from 'react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  return (
    <footer className="bg-trust text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CallLock</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Stop losing your best leads to voicemail. Our intelligent text-back system 
              engages every missed call and recovers revenue your competitors are scooping up.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" size="sm">
                Start Free Pilot
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-trust">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 CallLock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
