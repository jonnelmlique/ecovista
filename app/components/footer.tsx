import { HomeIcon, MailIcon, PhoneIcon, MapPinIcon } from './icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/15 via-green-500/15 to-teal-600/15 border border-emerald-500/20">
                <HomeIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
                EcoVista
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading the future of sustainable real estate with eco-friendly properties that combine luxury and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'facebook', icon: 'f' },
                { name: 'twitter', icon: 'x' },
                { name: 'instagram', icon: 'ig' },
                { name: 'linkedin', icon: 'in' }
              ].map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 bg-accent hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm font-semibold text-emerald-600"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Properties</h3>
            <ul className="space-y-3">
              {['Eco Villas', 'Sustainable Condos', 'Green Townhouses', 'Smart Homes', 'Luxury Estates', 'Affordable Housing'].map((item) => (
                <li key={item}>
                  <button className="text-muted-foreground hover:text-emerald-600 transition-colors duration-300">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Property Search', 'Green Financing', 'Sustainability Consulting', 'Property Management', 'Investment Advisory', 'Market Analysis'].map((item) => (
                <li key={item}>
                  <button className="text-muted-foreground hover:text-emerald-600 transition-colors duration-300">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-emerald-600" />
                <span className="text-muted-foreground text-sm">123 Green Street, Eco City, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-emerald-600" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-emerald-600" />
                <span className="text-muted-foreground text-sm">hello@ecovista.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} EcoVista. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <button
                  key={item}
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}