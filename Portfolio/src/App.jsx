import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
        <Navbar />
        <main>  
          <Banner />
            <div class="container">
              <About />
              <Projects />
              <Education />
              {/* <Experience /> */}
              <Certificates />
              <ContactForm />
            </div>
        </main>
        <Footer />
    </>
  )
}

export default App
