const cards = [
  {title:'Railway Expertise', desc:'3 decades of specialized parcel & cargo movement by rail across India.', icon:'🚆'},
  {title:'Road Transport', desc:'Reliable door-to-door trucking with modern fleet and GPS tracking.', icon:'🚚'},
  {title:'Air Freight', desc:'Express air logistics for time-critical shipments with customs support.', icon:'✈️'},
  {title:'All India Network', desc:'1000+ partnership agents covering every major city in India.', icon:'🌐'}
]

export default function WhyChoose(){
  return (
    <section id="about" className="section-py bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pattern"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="badge badge-navy mb-3">Why Choose Jarwal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Logistics Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Three decades of trusted operations backed by modern technology and nationwide presence</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i)=> (
            <div key={c.title} className="card-elev group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{c.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-navy to-[#FF6B35] transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
