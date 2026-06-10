import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-br from-navy via-[#082150] to-[#051836] text-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Jarwal Logistics</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              30+ years of trusted logistics expertise. Rail, Road & Air solutions across India.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21h-2.3V9.25h2.3V7.31c0-2.31 1.39-3.57 3.47-3.57 1.01 0 1.88.08 2.13.11v2.47h-1.46c-1.13 0-1.35.54-1.35 1.32v1.73h2.7l-.35 3.54h-2.35V20h-2.79z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Rail Cargo</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Road Transport</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Tracking</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Support</h5>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><a href="https://wa.me/919729013670" className="text-gray-300 hover:text-white transition-colors">WhatsApp Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jarwal Logistics. All rights reserved. | Moving Business Across India
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
