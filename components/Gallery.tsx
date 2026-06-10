import Image from 'next/image'

export default function Gallery(){
  return (
    <section className="section-py bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-navy/5 to-[#FF6B35]/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="badge badge-navy mb-3">Our Facilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Modern Infrastructure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">State-of-the-art facilities and professional operations supporting 30+ years of service excellence</p>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-200 h-80">
              <Image 
                src="/officeHub.jpg" 
                alt="Jarwal Logistics Office" 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-xl">Corporate Office</h3>
                <p className="text-sm text-gray-100">Trusted Logistics Hub</p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-200 h-80">
              <Image 
                src="/reception.jpg" 
                alt="Jarwal Logistics Reception" 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-xl">Professional Reception</h3>
                <p className="text-sm text-gray-100">Client-centric facilities</p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-200 h-80">
              <Image 
                src="/office.jpg" 
                alt="Jarwal Logistics Office" 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-xl">Parcel Booking Counter</h3>
                <p className="text-sm text-gray-100">Cargo Booking Desk</p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative overflow-hidden bg-gray-200 h-80">
              <Image 
                src="/operations.jpg" 
                alt="Jarwal Logistics Operations" 
                width={1200} 
                height={800} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-xl">Active Operations</h3>
                <p className="text-sm text-gray-100">24/7 logistics management</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-elev text-center">
            <div className="text-4xl mb-3">📦</div>
            <h4 className="font-bold text-gray-900 mb-2">Modern Warehousing</h4>
            <p className="text-gray-600 text-sm">Climate-controlled, secure storage facilities</p>
          </div>
          <div className="card-elev text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h4 className="font-bold text-gray-900 mb-2">Dedicated Fleet</h4>
            <p className="text-gray-600 text-sm">Well-maintained vehicles with GPS tracking</p>
          </div>
          <div className="card-elev text-center">
            <div className="text-4xl mb-3">📡</div>
            <h4 className="font-bold text-gray-900 mb-2">Real-Time Tracking</h4>
            <p className="text-gray-600 text-sm">Live updates on every shipment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
