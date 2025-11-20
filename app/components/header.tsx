'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './theme-toggle'
import { HomeIcon, MenuIcon, CloseIcon } from './icons'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['hero', 'properties', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    { name: 'Properties', id: 'properties' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-700">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <div className="flex items-center justify-center h-16 lg:h-18">
            <div className="flex items-center">
              <div className={`flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-xl border shadow-lg transition-all duration-500 ${
                isScrolled
                  ? 'bg-background/90 border-border/50 shadow-primary/10'
                  : 'bg-background/60 border-border/40 shadow-primary/5'
              }`}>
                
                <button
                  className="flex items-center space-x-2 px-4 py-2 rounded-full group cursor-pointer hover:bg-accent/50 transition-all duration-300"
                  onClick={() => scrollToSection('hero')}
                >
                  <div className="relative">
                    <div className="p-1.5 rounded-xl bg-gradient-to-br from-emerald-500/15 via-green-500/15 to-teal-600/15 group-hover:from-emerald-500/25 group-hover:via-green-500/25 group-hover:to-teal-600/25 transition-all duration-300 group-hover:scale-105 border border-emerald-500/20">
                      <HomeIcon className="h-4 w-4 text-emerald-600 group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-teal-600/20 rounded-xl blur opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10" />
                  </div>
                  <div className="text-lg font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent bg-300 animate-gradient">
                    EcoVista
                  </div>
                </button>

                <div className="w-px h-6 bg-border/50 mx-2" />

                <button
                  onClick={() => scrollToSection('hero')}
                  className={`hidden md:block relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeSection === 'hero'
                      ? 'text-white bg-emerald-600 shadow-lg shadow-emerald-600/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  Home
                </button>

                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`hidden md:block relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-emerald-600 shadow-lg shadow-emerald-600/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

                <div className="hidden md:block w-px h-6 bg-border/50 mx-2" />

                <div className="hidden md:block px-2">
                  <ThemeToggle />
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative p-2.5 rounded-xl hover:bg-emerald-600/5 hover:scale-105 transition-all duration-300 group ml-2"
                  aria-label="Toggle mobile menu"
                >
                  <div className="relative w-5 h-5">
                    <MenuIcon
                      className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                      }`}
                    />
                    <CloseIcon
                      className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                        isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-20 left-2 right-2 sm:left-4 sm:right-4 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl shadow-emerald-600/10 overflow-hidden">
            <div className="p-6 space-y-1">
              
              <button
                onClick={() => scrollToSection('hero')}
                className={`w-full text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden ${
                  activeSection === 'hero'
                    ? 'text-emerald-600 bg-emerald-600/10 shadow-lg shadow-emerald-600/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-green-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {activeSection === 'hero' && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-600 to-green-500 rounded-full" />
                )}
              </button>

              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-600/10 shadow-lg shadow-emerald-600/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-green-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-600 to-green-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="p-4 flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}