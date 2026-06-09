export default function About(){
  return (
    <section className="section-py bg-gradient-to-r from-navy to-[#1a5fa0] text-black relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge mb-3">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Building Trust Through Excellence</h2>
            <p className="text-black text-lg leading-relaxed mb-6">
              Since 1994, Jarwal Logistics has been a trusted name in Indian logistics. What started as a railway cargo specialist has evolved into a comprehensive logistics provider serving businesses across the country.
            </p>
            <p className="text-black text-lg leading-relaxed mb-8">
              With a strong foundation in railway parcel transportation, we've expanded to include road transport and air freight services—all while maintaining our commitment to reliability, transparency, and customer success.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#FFB347]">30+</div>
                <div className="text-sm text-black mt-1">Years in Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#10B981]">1000+</div>
                <div className="text-sm text-black mt-1">Agent Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#FF6B35]">3</div>
                <div className="text-sm text-black mt-1">Logistics Modes</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">100K+</div>
                <div className="text-sm text-black mt-1">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-2xl transform translate-x-6 translate-y-6 opacity-50 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur border border-white/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Why Trust Jarwal?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] text-xl mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-black">Proven Track Record</div>
                      <div className="text-black text-sm">30+ years of reliable service</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] text-xl mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-black">Nationwide Coverage</div>
                      <div className="text-black text-sm">1000+ agents across India</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] text-xl mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-black">Multi-Modal Solutions</div>
                      <div className="text-black text-sm">Rail, Road & Air all in one</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#10B981] text-xl mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-black">Transparent Pricing</div>
                      <div className="text-black text-sm">No hidden charges, fair rates</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
