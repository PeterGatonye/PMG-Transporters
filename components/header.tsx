import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo Section */}
          <Link className="flex items-center space-x-5 group" href="#">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-pmgBlue font-oswald tracking-wide">PMG TRANSPORT</span>
              <span className="text-base text-neutral-500 font-poppins font-medium">Fast & Reliable</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group"
              href="#services"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group" 
              href="#faq"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group"
              href="#contact"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-3 text-lg text-neutral-600 font-poppins">
              <Phone className="h-6 w-6 text-pmgBlue" />
              <span className="font-medium">0768067480</span>
            </div>

            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
