'use client'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's Build Something Amazing</h2>
          <p className="text-gray-300 text-lg">
            Ready to accelerate your digital transformation? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <a href='tel:+15551234567'>+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <a href='mailto:info@resilientitservices.com'>info@resilientitservices.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 rounded-full p-3">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Address</h4>
                <a href='https://maps.app.goo.gl/Eq1cCRDMDHBFG9Qf9' target='_blank'>SR NO.60, 3 FL NO.1102, AUSTIN PARK, PUNE CITY, Pune, Maharashtra, India</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-700 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-700 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-700 rounded-md text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-3 text-white font-semibold rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
