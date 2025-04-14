 import { ReactComponent as LinkedInIcon } from '../assets/linkedin-svgrepo-com (2).svg';
 import '../styles/Contact.css'
 import { useState } from 'react';

 export function Contact() {
    const [flipped, setFlipped] = useState(false);


  return (
    <div className='contact scroll-offset' id='contact' onClick={() => setFlipped(prev => !prev)}>
        
        <div className={`flipper ${flipped ? 'flipped' : ''}`}>
            
            <div className="front">
                <h2>Kontakt</h2>
            </div>
    
    
            <div className="back">


                <div className='contact-item'>
                    <a href="tel:+4542227155">
                        <p> tlf: +45 42 22 71 55</p>
                    </a>
                </div>

                
                <div className='contact-item'>
                    <a href="mailto:anneyalundkvist@gmail.com">
                    <p> anneyalundkvist@gmail.com</p>
                    </a>
                    
                </div>

                <div className='contact-item'>
                    <a 
                    href="https://www.linkedin.com/in/annelundkvist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <span>LinkedIn:</span>
                    <LinkedInIcon className="icon" />
                    </a>
                
                </div>
            </div>
        </div>
    </div>
  );
}