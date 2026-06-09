export default function Contact(){
  return (
    <section id="contact" className="section-py bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FF6B35]/5 to-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="badge badge-navy mb-3">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Jarwal Logistics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Reach out to our team for quotes, partnerships, or any logistics inquiry. We're here to help 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-elev">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-navy to-[#1a5fa0] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Headquarters</h4>
                <p className="text-gray-600 text-sm mt-1">Jaipur, Rajasthan, India</p>
                <p className="text-gray-500 text-xs mt-2">All India Network Available</p>
              </div>
            </div>
          </div>

          <div className="card-elev">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FFB347] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-gray-600 text-sm mt-1">+91 9314656743</p>
                <p className="text-gray-600 text-sm">+91 9660969602</p>
                <p className="text-gray-500 text-xs mt-2">24/7 Available</p>
              </div>
            </div>
          </div>

          <div className="card-elev">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#10B981] to-emerald-400 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm mt-1">info@jarwallogistics.in</p>
                <p className="text-gray-500 text-xs mt-2">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Prefer quick communication?</p>
          <a 
            href="https://wa.me/" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
