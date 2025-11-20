'use client'

import { BedIcon, BathIcon, AreaIcon, MapPinIcon, StarIcon, HomeIcon, LeafIcon } from './icons'

const properties = [
  {
    id: 1,
    title: 'Modern Eco Villa',
    location: 'Green Valley, CA',
    price: '$850,000',
    image: '/api/placeholder/400/300',
    beds: 4,
    baths: 3,
    area: '2,400 sq ft',
    rating: 4.9,
    features: ['Solar Panels', 'Smart Home', 'Garden'],
    type: 'Villa'
  },
  {
    id: 2,
    title: 'Sustainable Townhouse',
    location: 'Eco District, NY',
    price: '$650,000',
    image: '/api/placeholder/400/300',
    beds: 3,
    baths: 2,
    area: '1,800 sq ft',
    rating: 4.8,
    features: ['Energy Efficient', 'Rooftop Garden', 'EV Charging'],
    type: 'Townhouse'
  },
  {
    id: 3,
    title: 'Green Luxury Condo',
    location: 'Sustainable Heights, FL',
    price: '$420,000',
    image: '/api/placeholder/400/300',
    beds: 2,
    baths: 2,
    area: '1,200 sq ft',
    rating: 4.7,
    features: ['LEED Certified', 'Ocean View', 'Gym Access'],
    type: 'Condo'
  },
  {
    id: 4,
    title: 'Eco-Friendly Ranch',
    location: 'Nature Reserve, TX',
    price: '$720,000',
    image: '/api/placeholder/400/300',
    beds: 3,
    baths: 2,
    area: '2,000 sq ft',
    rating: 4.9,
    features: ['Geothermal Heating', 'Rainwater System', 'Organic Farm'],
    type: 'Ranch'
  },
  {
    id: 5,
    title: 'Smart Green Home',
    location: 'Tech Valley, WA',
    price: '$950,000',
    image: '/api/placeholder/400/300',
    beds: 4,
    baths: 3,
    area: '2,600 sq ft',
    rating: 5.0,
    features: ['AI Integration', 'Zero Waste', 'Wind Power'],
    type: 'Modern'
  },
  {
    id: 6,
    title: 'Sustainable Cottage',
    location: 'Eco Village, OR',
    price: '$380,000',
    image: '/api/placeholder/400/300',
    beds: 2,
    baths: 1,
    area: '900 sq ft',
    rating: 4.6,
    features: ['Tiny Living', 'Off-Grid', 'Composting'],
    type: 'Cottage'
  }
]

export function Properties() {
  return (
    <section id="properties" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-6 border border-emerald-300 dark:border-emerald-700">
            <LeafIcon className="w-4 h-4 mr-2 animate-pulse" />
            Featured Properties
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
              Eco-Friendly
            </span>
            <span className="text-foreground"> Homes</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of sustainable properties that combine modern luxury with environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-emerald-200 dark:hover:border-emerald-800 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 flex items-center justify-center">
                  <HomeIcon className="w-24 h-24 text-emerald-600/20" />
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                    {property.type}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <div className="text-2xl font-bold text-emerald-600">
                    {property.price}
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 py-3 px-4 bg-accent/50 rounded-xl">
                  <div className="flex items-center space-x-1">
                    <BedIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.beds}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BathIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.baths}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AreaIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.area}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/25">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-background hover:bg-accent border border-border hover:border-emerald-200 dark:hover:border-emerald-800 text-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}