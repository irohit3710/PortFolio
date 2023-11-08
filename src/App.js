import './App.css';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import Navbar from './components/Navbar/Navbar.js';
import Contact from './components/contact/Contact.js';
import Project from './components/projects/Project';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText ">
      <div className=' max-w-screen-2xl mx-auto'>
        <Navbar/>
        <Banner/>
        <Features/> 
        <Project/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App; 
 