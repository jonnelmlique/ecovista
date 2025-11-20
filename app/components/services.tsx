'use client'

import { SearchPropertyIcon, DollarIcon, BuildingIcon, CogIcon, LeafIcon } from './icons'

export function Services() {
  const services = [
    {
      title: 'Property Search & Consultation',
      description: 'Personalized property search with expert guidance on sustainable features and green certifications.',
      features: ['Custom Property Matching', 'Sustainability Assessment', 'Market Analysis', 'Virtual Tours'],
      icon: 'search'
    },
    {
      title: 'Green Home Financing',
      description: 'Access to eco-friendly financing options, green mortgages, and sustainability incentives.',
      features: ['Green Mortgage Programs', 'Energy Efficiency Loans', 'Tax Credit Assistance', 'Rebate Navigation'],
      icon: 'dollar'
    },
    {
      title: 'Sustainable Property Management',
      description: 'Comprehensive property management services focused on maintaining eco-friendly standards.',
      features: ['Eco-Maintenance Programs', 'Energy Monitoring', 'Tenant Screening', 'Sustainability Reporting'],
      icon: 'building'
    },
    {
      title: 'Green Building Consultation',
      description: 'Expert advice on sustainable renovations, energy upgrades, and green building certifications.',
      features: ['LEED Certification', 'Energy Audits', 'Renovation Planning', 'Sustainable Materials'],
      icon: 'cog'
    }
  ]

  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-6 border border-emerald-300 dark:border-emerald-700">
            <LeafIcon className="w-4 h-4 mr-2 animate-pulse" />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <span className="text-foreground"> Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From finding your perfect eco-home to managing sustainable properties, we provide end-to-end services for all your green real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-emerald-200 dark:hover:border-emerald-800 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon === 'search' && <SearchPropertyIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                    {service.icon === 'dollar' && <DollarIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                    {service.icon === 'building' && <BuildingIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                    {service.icon === 'cog' && <CogIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/25">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Sustainable Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts help you find the perfect eco-friendly property that matches your lifestyle and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}