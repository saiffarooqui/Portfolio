import React from 'react'
import Home from './components/Home/Home'
import Languages from './components/Languages/Languages'
import Navigation from './components/Navigation/Navigation'
import Summery from './components/Summery/Summery'
import Projects from './components/Projects/Projects'
import Career from './components/Career/Career'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Progress from './components/Progress/Progress'
import Theme from './components/Theme/Theme'

const App = () => {
  return (
    <>
      <Theme />
      <Progress />
      <div className="container">
        <Navigation />
        <Home />
        <Summery />
        <Languages />
        <Projects />
        <Career />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App