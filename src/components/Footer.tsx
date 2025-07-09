import {
  Twitter,
  Linkedin,
  Pin,
} from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {/* Brand Info */}
        <div>
          <h4 className="text-lg font-bold mb-2 text-gray-100">Resilient IT</h4>
          <p className="text-gray-400 text-sm">
            Transforming businesses through innovative low-code solutions.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-300">
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Pinterest">
              <Pin size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-md font-semibold text-gray-100 mb-3">Services</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">App Development</a></li>
            <li><a href="#" className="hover:text-white">Digital Transformation</a></li>
            <li><a href="#" className="hover:text-white">Integration Services</a></li>
            <li><a href="#" className="hover:text-white">Consulting</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-md font-semibold text-gray-100 mb-3">Technologies</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Mendix</a></li>
            <li><a href="#" className="hover:text-white">Caspio</a></li>
            <li><a href="#" className="hover:text-white">OutSystems</a></li>
            <li><a href="#" className="hover:text-white">React & Next.js</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-md font-semibold text-gray-100 mb-3">Company</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm border-t border-blue-500/30 pt-6">
        © {year} Resilient IT Services. All rights reserved.
      </div>
    </footer>
  )
}