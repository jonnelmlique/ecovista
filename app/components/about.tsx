'use client'

import { LeafIcon, HomeIcon, UsersIcon, HeartIcon, TargetIcon, GlobeIcon, BuildingIcon } from './icons'

export function About() {
  const features = [
    {
      title: 'Sustainable Living',
      description: 'Every property in our portfolio meets strict environmental standards and promotes eco-friendly living.',
      icon: 'leaf'
    },
    {
      title: 'Smart Technology',
      description: 'Integrated smart home systems that optimize energy usage and enhance your living experience.',
      icon: 'home'
    },
    {
      title: 'Expert Guidance',
      description: 'Our team of sustainability experts helps you find the perfect eco-friendly home for your lifestyle.',
      icon: 'users'
    },
    {
      title: 'Green Financing',
      description: 'Access to special financing options and incentives for sustainable property purchases.',
      icon: 'heart'
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-6 border border-emerald-300 dark:border-emerald-700">

              <LeafIcon className="w-4 h-4 mr-2 animate-pulse" />
              About EcoVista
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Leading the Future of </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
                Sustainable Real Estate
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At EcoVista, we believe that luxury and sustainability go hand in hand.
              For over 15 years, we've been pioneering the green real estate movement,
              helping families find homes that are not only beautiful but also environmentally responsible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-xl flex items-center justify-center">
                  <TargetIcon className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make sustainable living accessible and desirable by connecting people with eco-friendly homes that enhance their quality of life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/70 rounded-xl flex items-center justify-center">
                  <GlobeIcon className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where every home contributes to environmental preservation while providing exceptional comfort and modern amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-3xl flex items-center justify-center">
              <BuildingIcon className="w-24 h-24 md:w-32 md:h-32 text-emerald-600/20" />
            </div>

            {/* Floating cards - responsive design */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-background border border-border rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Happy Families</div>
            </div>

            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-background border border-border rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-600/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon === 'leaf' && <LeafIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                {feature.icon === 'home' && <HomeIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                {feature.icon === 'users' && <UsersIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                {feature.icon === 'heart' && <HeartIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}