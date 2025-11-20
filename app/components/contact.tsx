'use client'

import { PhoneIcon, MailIcon, MapPinIcon, LeafIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-6 border border-emerald-300 dark:border-emerald-700">
            <LeafIcon className="w-4 h-4 mr-2 animate-pulse" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's Find Your </span>
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
              Perfect Home
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discover sustainable living? Our team of experts is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Property Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none">
                    <option>Select Property Type</option>
                    <option>Eco Villa</option>
                    <option>Sustainable Townhouse</option>
                    <option>Green Condo</option>
                    <option>Smart Home</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your dream eco-home..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-xl flex items-center justify-center">
                  <MailIcon className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@ecovista.com</p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-muted-foreground">123 Green Street<br />Eco City, CA 90210</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}