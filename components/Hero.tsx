import Image from 'next/image'

interface HeroProps {
  /** no props for now */
}

export default function Hero(_:HeroProps){
  return (
    // <section className="hero-bg pattern relative py-12 md:py-16 overflow-hidden"
    // style={{backgroundImage: 'url(/image12.png)',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat' 
    // }}
    // >
    <section className="hero-bg pattern relative md:min-h-0 py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full md:hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/PortraitImage2.png)',
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

        <div className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{backgroundImage: 'url(/Image12.png)', backgroundPosition: 'center right', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
        />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start relative z-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="hero-kicker">SINCE 1994 • 30+ YEARS</span>
            <h1 className="hero-headline">
              30+ Years of <span className="hero-highlight">Railway Cargo</span> Expertise
            </h1>
            <p className="hero-sub">Now Delivering Complete Logistics Solutions Across India</p>

            <p className="text-white/90 mt-4 leading-relaxed">
              From railway parcels to road transport and air freight, Jarwal Logistics brings trusted expertise and modern solutions to move your business across India with reliability you can count on.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://wa.me/919729013670" 
              target="_blank"
                rel="noopener noreferrer"
              className="btn-ghost-outline flex items-center gap-3">
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-nowrap gap-4 md:gap-6 pt-6 text-white/80 items-center text-xs md:text-sm lg:text-base">
              <div className="flex items-center gap-2"><span className="text-gold"></span><span className="whitespace-nowrap">Rail Cargo</span></div>
              <div className="border-l border-white/20 h-6" />
              <div className="flex items-center gap-2"><span className="text-gold"></span><span className="whitespace-nowrap">Road Transport</span></div>
              <div className="border-l border-white/20 h-6" />
              <div className="flex items-center gap-2"><span className="text-gold"></span><span className="whitespace-nowrap">Air Freight</span></div>
            </div>
          </div>
        </div>

        {/* Right Column - three-slice image block (decorative) */}
        <div className="hidden md:block relative">
          <div className="hero-slices" aria-hidden>
            <div className="hero-slice hero-slice--one" />
            <div className="hero-slice hero-slice--two" />
            <div className="hero-slice hero-slice--three" />
          </div>
        </div>
      </div>

      {/* overlapping stats strip */}
      {/* <div className="container relative z-20">
        <div className="hero-stats-strip">
          <div className="hero-stat-card">
            <div className="hero-stat-icon">🏆</div>
            <div>
              <div className="hero-stat-value">30+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">👥</div>
            <div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">📦</div>
            <div>
              <div className="hero-stat-value">5000+</div>
              <div className="hero-stat-label">Pin Codes Covered</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">🚚</div>
            <div>
              <div className="hero-stat-value">1M+</div>
              <div className="hero-stat-label">Tons Delivered</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">🔒</div>
            <div>
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Safe & Secure</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Mobile Image */}
      {/* <div className="md:hidden relative mt-8">
        <Image 
          src="/office.jpg" 
          alt="Jarwal Logistics Office" 
          width={1200} 
          height={800} 
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div> */}
    </section>
  )
}
