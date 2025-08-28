import Link from "next/link"
import { Truck, Package, Home, Box, CheckCircle, Phone, Mail, ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-pmgBlue/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pmgBlueLight/10 rounded-full blur-xl"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-16 lg:gap-32 xl:gap-40">
              {/* Hero Text Left */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 order-2 lg:order-1 animate-fade-in max-w-2xl lg:max-w-xl xl:max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pmgBlue to-pmgBlueLight text-white px-8 py-4 rounded-full font-poppins font-semibold text-base shadow-lg">
                  <Star className="h-5 w-5" />
                  <span>PREMIUM TRANSPORT SERVICES</span>
                </div>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 font-oswald leading-tight">
                    <span className="bg-gradient-to-r from-pmgBlue via-pmgBlueLight to-pmgBlue bg-clip-text text-transparent">
                      PICKUP
                    </span>
                    <br />
                    <span className="text-neutral-800">TRANSPORT</span>
                  </h1>
                  <p className="text-2xl md:text-3xl font-bold text-neutral-700 font-poppins">
                    PMG TRANSPORTERS
                  </p>
                  <p className="text-lg md:text-xl text-neutral-600 font-poppins max-w-xl lg:mx-0 leading-relaxed">
                    Professional, reliable, and efficient transport solutions for all your moving needs
                  </p>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 animate-slide-up w-full lg:w-auto mt-2">
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    <Link href="#services" className="flex items-center space-x-2">
                      <span>Explore Services</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-pmgBlue text-pmgBlue hover:bg-pmgBlue hover:text-white font-poppins font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl"
                  >
                    <Link href="#contact">Get a Quote</Link>
                  </Button>
                </div>
                {/* Contact Information */}
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-10 animate-slide-up w-full lg:w-auto mt-2">
                  <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-8 py-5 shadow-lg border border-white/50">
                    <Phone className="h-6 w-6 text-pmgBlue" />
                    <span className="font-poppins font-bold text-neutral-800 text-lg">0768067480</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-8 py-5 shadow-lg border border-white/50">
                    <Mail className="h-6 w-6 text-pmgBlue" />
                    <span className="font-poppins font-bold text-neutral-800 text-lg">petegatonye@gmail.com</span>
                  </div>
                </div>
              </div>
              {/* Hero Image Right - moved up and vertically centered */}
              <div className="relative w-full max-w-lg lg:max-w-xl flex-shrink-0 animate-slide-right order-1 lg:order-2 flex items-center justify-center lg:items-center lg:justify-center" style={{alignSelf: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-pmgBlue/20 to-pmgBlueLight/20 rounded-3xl blur-2xl"></div>
                <img
                  src="/images/pmg-transport-pickup.png"
                  width="800"
                  height="450"
                  alt="Blue Pickup Truck"
                  className="relative mx-auto object-cover rounded-3xl shadow-2xl border-4 border-white/50 w-full h-auto"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Services List Centered Below Hero */}
        <section className="w-full flex justify-center py-8 md:py-12 lg:py-16 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full animate-slide-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">House Moving</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">Deliveries</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">Furniture Moving</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Box className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">Market Goods</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">& More</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 font-oswald leading-tight">
                  Our Comprehensive
                  <span className="block bg-gradient-to-r from-pmgBlue to-pmgBlueLight bg-clip-text text-transparent"> Services</span>
                </h2>
                <p className="max-w-3xl text-lg md:text-xl text-neutral-600 font-poppins leading-relaxed">
                  PMG offers a wide range of transport solutions tailored to your needs, ensuring safe and reliable delivery every time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center justify-center gap-8 py-12 lg:grid-cols-3 lg:gap-12 place-items-center">
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Goods Transport</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Reliable and secure transportation of various goods, from small parcels to large cargo with professional handling.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Furniture Moving</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Careful handling and transport of your valuable furniture, ensuring safe delivery with specialized equipment.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">House Moving</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Stress-free residential moving services, from packing to unpacking with comprehensive support.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Box className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Commercial Relocation</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Efficient and organized moving solutions for businesses of all sizes with minimal disruption.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Specialized Transport</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Handling unique or oversized items with specialized equipment and expert knowledge.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Custom Solutions</CardTitle>
                <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                  Tailored transport plans to meet your specific requirements and budget constraints.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-white to-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12">
              <div className="space-y-8">
                <div className="space-y-6 text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 font-oswald leading-tight">
                    Why Choose
                    <span className="block bg-gradient-to-r from-pmgBlue to-pmgBlueLight bg-clip-text text-transparent"> PMG?</span>
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-600 font-poppins leading-relaxed">
                    At PMG, we are committed to providing exceptional service and peace of mind with every delivery.
                  </p>
                </div>
                <ul className="grid gap-6 py-8 font-poppins max-w-2xl mx-auto">
                  <li className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-neutral-800">Experienced and professional team</span>
                  </li>
                  <li className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-neutral-800">Reliable and timely deliveries</span>
                  </li>
                  <li className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-neutral-800">Competitive pricing</span>
                  </li>
                  <li className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-neutral-800">Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-neutral-800">Customer satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>

        <FAQSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-oswald">PMG TRANSPORT</h3>
                  <p className="text-sm text-neutral-400 font-poppins">Fast & Reliable</p>
                </div>
              </div>
              <p className="text-neutral-400 font-poppins leading-relaxed">
                Professional transport services for all your moving and delivery needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-oswald">Quick Links</h4>
              <ul className="space-y-2 font-poppins">
                <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#faq" className="text-neutral-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-oswald">Services</h4>
              <ul className="space-y-2 font-poppins">
                <li className="text-neutral-400">House Moving</li>
                <li className="text-neutral-400">Furniture Transport</li>
                <li className="text-neutral-400">Goods Delivery</li>
                <li className="text-neutral-400">Commercial Relocation</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-oswald">Contact Info</h4>
              <div className="space-y-3 font-poppins">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pmgBlue" />
                  <span className="text-neutral-400">0768067480</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-pmgBlue" />
                  <span className="text-neutral-400">petegatonye@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400 font-poppins">
              &copy; {new Date().getFullYear()} PMG Transport. All rights reserved.
            </p>
            <nav className="flex gap-6 mt-4 sm:mt-0">
              <Link className="text-sm text-neutral-400 hover:text-white transition-colors font-poppins" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-neutral-400 hover:text-white transition-colors font-poppins" href="#">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
