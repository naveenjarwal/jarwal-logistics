import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import About from '../components/About'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Hero />
      <main>
        <WhyChoose />
        <Services />
        <Gallery />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
