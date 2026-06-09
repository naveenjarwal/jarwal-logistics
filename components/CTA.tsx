export default function CTA(){
  return (
    <section className="section-py relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1a5fa0] to-[#082150]"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center">
          <span className="inline-block badge mb-4">Ready to Grow?</span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Move Your Business Forward with Expert Logistics
          </h2>
          
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Get a free logistics consultation from our experts. We'll analyze your shipping needs and provide the best solution for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919314656743" className="btn btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: 9314656743
            </a>
            <a href="tel:+919660969602" className="btn btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: 9660969602
            </a>
            <a href="https://wa.me/" className="btn bg-[#10B981] text-white hover:bg-[#059669] px-8 py-3 text-lg flex items-center justify-center gap-2">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
