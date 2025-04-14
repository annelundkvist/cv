
import {Home} from "./components/Home";
import { Experience } from "./components/Expeirence";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { AboutMe } from "./components/AboutMe";
import Navbar from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useInView } from 'react-intersection-observer';



function App() {

  const { ref: footerRef, inView: isFooterInView } = useInView({
    threshold: 0.8, 
  });
  return (
    <div>
       <Navbar/>
        <Home/>
        <Experience/>
        <Skills/>
        <Education/>
        <AboutMe/>
        {!isFooterInView && <Contact />}
        <div ref={footerRef}>
          <Footer />
        </div>
    </div>
    
   
  );
}

export default App;
