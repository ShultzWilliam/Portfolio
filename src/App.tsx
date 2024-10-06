import Header from './Header.tsx';
import Hero from './Hero.tsx';
import AboutMe from './AboutMe.tsx';
import Experience from './Experience.tsx';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';


function App() {

  return (
    <>
      <div id="wide-wrapper" className='tracking-wide'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
      </div>
    </>
  )
}

export default App
