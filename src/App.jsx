

import './App.css'
import Navber from './components/Navber'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Priseing from './components/Priseing'
import Testimonial from './components/Testimonial'
import Workingstep from './components/Workingstep'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='font-poppins  overflow-x-hidden '>
      <Navber/>
      <Hero/>
      <Services/>
      <About/>
      <Workingstep/>
      <Priseing/>
      <Testimonial/>
      <Contact/>
      {/* <Footer/> */}
      <Footer/>
      </div>
    </>
  )
}

export default App
