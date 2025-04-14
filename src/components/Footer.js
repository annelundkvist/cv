import '../styles/Footer.css';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin-svgrepo-com (2).svg';


export function Footer(){
    return(
        <div className='footer' id='footer'>

            <div className='download'>
                <h3>Download CV og eksaminspapir</h3>

                <div className='button-container'>
                    <a href={`${process.env.PUBLIC_URL}/pdf/cv.pdf`} download className='button'>
                    
                    <p>CV</p>
                    </a>
                    <a href={`${process.env.PUBLIC_URL}/pdf/eksaminspapir.pdf`} download className='button' >
                    <p>Eksaminspapir</p>
                    </a>
                </div>
            </div>

            <div className='info'>

            <p> Anne Lundkvist</p>
            <p> Aarhus 8000</p>

            <div className='contact-item'>
                    <a href="mailto:anneyalundkvist@gmail.com">
                    <p> anneyalundkvist@gmail.com</p>
                    </a>
                    
                </div>



            <div className='contact-item'>
                    <a href="tel:+4542227155">
                        <p> tlf: +45 42 22 71 55</p>
                    </a>
                </div>

                
               
                <div className='contact-item'>
                    <a 
                    href="https://www.linkedin.com/in/annelundkvist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                   
                    <LinkedInIcon className="icon" />
                    </a>
                
                </div>
            </div>

        </div>
    )
};