'use client'

import { useState, useEffect } from 'react'
import { SearchIcon, MapPinIcon, LeafIcon, StarIcon, HomeIcon, ArrowRightIcon } from './icons'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const backgroundImages = [
    'from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/20 dark:to-teal-950/20',
    'from-blue-50 via-cyan-50 to-emerald-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-emerald-950/20',
    'from-teal-50 via-emerald-50 to-green-50 dark:from-teal-950/20 dark:via-emerald-950/20 dark:to-green-950/20'
  ]

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${backgroundImages[currentImageIndex]}`} />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200/20 dark:bg-green-800/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-teal-200/20 dark:bg-teal-800/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-emerald-100/30 to-green-100/30 dark:from-emerald-900/10 dark:to-green-900/10 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(16, 185, 129, 0.15) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'float 6s ease-in-out infinite'
          }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            {/* Animated Badge */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/70 dark:to-green-900/70 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-8 border border-emerald-300 dark:border-emerald-700 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <LeafIcon className="w-5 h-5 mr-2 animate-spin" />
              <span className="relative">
                Sustainable Living Solutions
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              </span>
            </div>

            {/* Main Heading with Typewriter Effect */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
                Discover Your
              </span>
              <br />
              <span className="text-foreground relative">
                Dream Home
                <div className="absolute -top-4 -right-4 text-2xl animate-bounce">🏡</div>
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Find eco-friendly properties that combine luxury with sustainability.
              <br />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Your perfect home awaits</span> in our curated collection of green living spaces.
            </p>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center items-center gap-6 mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 animate-pulse" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <HomeIcon className="w-4 h-4 text-emerald-500" />
                <span>Trusted by 10,000+ families</span>
              </div>
            </div>
          </div>

          {/* Enhanced Search Card */}
          <div className={`bg-background/90 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-emerald-600/10 max-w-5xl mx-auto transform transition-all duration-1000 delay-1000 hover:shadow-emerald-600/20 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="sm:col-span-2 md:col-span-2">
                <div className="relative group">
                  <SearchIcon className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    className="w-full pl-12 md:pl-14 pr-4 md:pr-5 py-4 md:py-5 text-sm md:text-base rounded-2xl border border-border/50 bg-background/50 focus:bg-background focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 outline-none placeholder:text-muted-foreground/70"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-focus-within:from-emerald-500/5 group-focus-within:via-emerald-500/10 group-focus-within:to-emerald-500/5 transition-all duration-300 pointer-events-none" />
                </div>
              </div>

              <div className="relative group">
                <MapPinIcon className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-focus-within:text-emerald-500 transition-colors duration-300" />
                <select className="w-full pl-12 md:pl-14 pr-4 md:pr-5 py-4 md:py-5 text-sm md:text-base rounded-2xl border border-border/50 bg-background/50 focus:bg-background focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 outline-none appearance-none cursor-pointer">
                  <option>All Locations</option>
                  <option>Downtown</option>
                  <option>Suburbs</option>
                  <option>Waterfront</option>
                  <option>Mountain View</option>
                </select>
              </div>

              <button className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 md:py-5 px-6 md:px-8 text-sm md:text-base rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-emerald-600/25 sm:col-span-2 md:col-span-1 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Search
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/30">
              <span className="text-sm md:text-base text-muted-foreground w-full text-center mb-3 md:w-auto md:mb-0 font-medium">Popular searches:</span>
              {['🌱 Eco Homes', '☀️ Solar Powered', '🏗️ Green Building', '♻️ Sustainable'].map((tag, index) => (
                <button
                  key={tag}
                  className="px-4 md:px-5 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-accent/50 to-accent/30 hover:from-emerald-100 hover:to-green-100 dark:hover:from-emerald-900/40 dark:hover:to-green-900/40 text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-300 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-border/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20 max-w-4xl mx-auto transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
{ number: '500+', label: 'Eco Properties', color: 'emerald' },
              { number: '98%', label: 'Client Satisfaction', color: 'green' },
              { number: '15+', label: 'Years Experience', color: 'teal' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                </div>
                <div className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-16 transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/25 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>

            <button className="group bg-background/80 backdrop-blur-sm border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 text-emerald-700 dark:text-emerald-300 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="flex items-center justify-center gap-2">
                Schedule a Call
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>
    </section>
  )
}