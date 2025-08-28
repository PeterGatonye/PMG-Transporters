import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 font-oswald leading-tight">
              Get in
              <span className="block bg-gradient-to-r from-pmgBlue to-pmgBlueLight bg-clip-text text-transparent"> Touch</span>
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-neutral-600 font-poppins leading-relaxed">
              Have questions or need a custom quote? Contact us today for professional transport solutions!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-oswald text-neutral-900">Contact Information</h3>
              <div className="space-y-6 font-poppins">
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Phone</p>
                    <p className="text-neutral-600">0768067480</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Email</p>
                    <p className="text-neutral-600">petegatonye@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Service Area</p>
                    <p className="text-neutral-600">Nairobi & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pmgBlue/20 to-pmgBlueLight/20 rounded-2xl blur-xl"></div>
              <img
                src="/placeholder.svg?height=300&width=500"
                width="500"
                height="300"
                alt="Office Location"
                className="relative mx-auto aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl border-4 border-white/50"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-oswald text-neutral-900">Send Us a Message</h3>
              <p className="text-neutral-600 font-poppins leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form className="grid gap-6 font-poppins">
              <div className="grid gap-3">
                <Label htmlFor="name" className="text-neutral-700 font-semibold">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                  className="border-2 border-neutral-200 focus:border-pmgBlue rounded-xl p-4 text-lg"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-neutral-700 font-semibold">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="border-2 border-neutral-200 focus:border-pmgBlue rounded-xl p-4 text-lg"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="subject" className="text-neutral-700 font-semibold">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Subject of your inquiry" 
                  required 
                  className="border-2 border-neutral-200 focus:border-pmgBlue rounded-xl p-4 text-lg"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="message" className="text-neutral-700 font-semibold">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[120px] border-2 border-neutral-200 focus:border-pmgBlue rounded-xl p-4 text-lg resize-none" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
