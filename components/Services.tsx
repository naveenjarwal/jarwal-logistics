export default function Services(){
  const items = [
    {
      title:'Rail Cargo',
      icon:'🚆',
      desc:'Station-to-station parcel and bulk cargo with competitive rates.',
      features:['Full & LTL loads', 'Hazmat capable', 'Real-time tracking']
    },
    {
      title:'Road Transport',
      icon:'🚚',
      desc:'Door-to-door trucking across India with dedicated fleet and partners.',
      features:['24/7 availability', 'GPS tracking', 'Insured shipments']
    },
    {
      title:'Air Freight',
      icon:'✈️',
      desc:'Express air shipments for urgent deliveries and international cargo.',
      features:['Quick turnaround', 'Customs support', 'Worldwide network']
    }
  ]
  
  return (
    <section id="services" className="section-py bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-navy/5 to-[#FF6B35]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#10B981]/5 to-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="badge mb-3">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Logistics Solutions for Every Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From railway parcels to air freight, we provide comprehensive logistics solutions tailored to your business requirements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(i=> (
            <div key={i.title} className="card-elev">
              <div className="text-5xl mb-5">{i.icon}</div>
              <h3 className="font-bold text-2xl text-gray-900 mb-3">{i.title}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{i.desc}</p>
              
              <div className="space-y-2 pt-5 border-t border-gray-100">
                {i.features.map(f=> (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-[#10B981]">✓</span>
                    <span className="text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
