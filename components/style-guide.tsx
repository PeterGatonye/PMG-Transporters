import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Truck, Package, Home, Box, CheckCircle, Phone, Mail, ArrowRight, Star } from "lucide-react"

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 font-oswald mb-6">
            <span className="bg-gradient-to-r from-pmgBlue via-pmgBlueLight to-pmgBlue bg-clip-text text-transparent">
              PMG TRANSPORT
            </span>
            <br />
            <span className="text-neutral-800">Style Guide</span>
          </h1>
          <p className="text-xl text-neutral-600 font-poppins max-w-3xl mx-auto">
            Complete design system and component library for PMG Transport Services
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Color Palette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Colors */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Brand Colors</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-pmgBlue rounded-lg shadow-md"></div>
                    <div>
                      <p className="font-poppins font-semibold text-neutral-800">PMG Blue</p>
                      <p className="text-sm text-neutral-600 font-poppins">#2C5B90</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-pmgBlueLight rounded-lg shadow-md"></div>
                    <div>
                      <p className="font-poppins font-semibold text-neutral-800">PMG Blue Light</p>
                      <p className="text-sm text-neutral-600 font-poppins">#3A6BA8</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-pmgBlueDark rounded-lg shadow-md"></div>
                    <div>
                      <p className="font-poppins font-semibold text-neutral-800">PMG Blue Dark</p>
                      <p className="text-sm text-neutral-600 font-poppins">#1E4A7A</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Neutral Colors */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Neutral Scale</h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 bg-neutral-${shade} rounded border border-neutral-200`}></div>
                      <span className="font-poppins text-sm text-neutral-600">neutral-{shade}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gradients */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Gradients</h3>
                <div className="space-y-4">
                  <div className="h-16 bg-gradient-to-r from-pmgBlue to-pmgBlueLight rounded-lg shadow-md"></div>
                  <div className="h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg shadow-md"></div>
                  <div className="h-16 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 rounded-lg shadow-md"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Typography</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Font Families */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Font Families</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-oswald text-neutral-900">Oswald - Headings</p>
                    <p className="text-sm text-neutral-600 font-poppins">Used for all headings and display text</p>
                  </div>
                  <div>
                    <p className="text-lg font-poppins text-neutral-800">Poppins - Body Text</p>
                    <p className="text-sm text-neutral-600 font-poppins">Used for paragraphs and UI elements</p>
                  </div>
                  <div>
                    <p className="text-base font-sans text-neutral-800">Inter - System UI</p>
                    <p className="text-sm text-neutral-600 font-poppins">Fallback system font</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Type Scale */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Type Scale</h3>
                <div className="space-y-2">
                  <p className="text-8xl font-oswald text-neutral-900">8xl - Hero</p>
                  <p className="text-6xl font-oswald text-neutral-900">6xl - Section</p>
                  <p className="text-4xl font-oswald text-neutral-900">4xl - Subsection</p>
                  <p className="text-2xl font-oswald text-neutral-900">2xl - Card</p>
                  <p className="text-lg font-poppins text-neutral-800">lg - Body</p>
                  <p className="text-base font-poppins text-neutral-800">base - Default</p>
                  <p className="text-sm font-poppins text-neutral-600">sm - Small</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Primary Buttons</h3>
                <div className="space-y-4">
                  <Button className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                    Primary Action
                  </Button>
                  <Button className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Standard Button
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 font-oswald mb-4">Secondary Buttons</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="border-2 border-pmgBlue text-pmgBlue hover:bg-pmgBlue hover:text-white font-poppins font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl">
                    Secondary Action
                  </Button>
                  <Button variant="outline" className="border-2 border-pmgBlue text-pmgBlue hover:bg-pmgBlue hover:text-white font-poppins font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    Outline Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">Service Card</CardTitle>
              <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
                Used for displaying service information with icons and descriptions
              </CardDescription>
            </Card>

            {/* Feature Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <span className="font-poppins font-semibold text-neutral-800 text-lg">Feature Card</span>
              </div>
              <p className="mt-4 text-sm text-neutral-600 font-poppins">
                Used for highlighting key features with horizontal layout
              </p>
            </div>

            {/* Info Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 font-oswald mb-2">Info Card</h3>
                <p className="text-sm text-neutral-600 font-poppins mb-4">
                  Used for displaying information in a structured format
                </p>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pmgBlue" />
                  <span className="font-poppins text-neutral-800">Contact Info</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Icons</h2>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Truck</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Package</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Home</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <Box className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Box</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Check</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-poppins text-neutral-600">Phone</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Animations */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Animations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 font-oswald mb-2">Fade In</h3>
                <p className="text-sm text-neutral-600 font-poppins">Smooth opacity transition</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 font-oswald mb-2">Slide Up</h3>
                <p className="text-sm text-neutral-600 font-poppins">Vertical slide animation</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-float">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 font-oswald mb-2">Float</h3>
                <p className="text-sm text-neutral-600 font-poppins">Gentle floating motion</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">Spacing</h2>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-pmgBlue rounded"></div>
                  <span className="font-poppins text-neutral-800">4px - Extra Small</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pmgBlue rounded"></div>
                  <span className="font-poppins text-neutral-800">8px - Small</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pmgBlue rounded"></div>
                  <span className="font-poppins text-neutral-800">12px - Medium</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-pmgBlue rounded"></div>
                  <span className="font-poppins text-neutral-800">16px - Large</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-pmgBlue rounded"></div>
                  <span className="font-poppins text-neutral-800">20px - Extra Large</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-neutral-600 font-poppins">
            PMG Transport Services - Complete Design System
          </p>
        </div>

      </div>
    </div>
  )
}

