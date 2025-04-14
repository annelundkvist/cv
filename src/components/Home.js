import profile from '../assets/profile.png'
import '../styles/Home.css'


export function Home(){
    return(
        <div className={"Home scroll-offset"}>
            
            <div className={"info"}>
            <img src={profile} alt="profile" />
            
            
            </div>
            <div className='description'>
            
            <h2> Engageret, målrettet og nysgerrig sundhedsteknologi ingeniør søger arbejde</h2>

            <p> Som nyuddannet diplomingeniør i Sundhedsteknologi har jeg en stærk interesse for både softwareudvikling og user experience, og jeg brænder for at skabe digitale løsninger, hvor teknologi og brugerbehov forenes. 
            <br /> <br />Gennem min uddannelse og praktiske erfaring har jeg opbygget solide kompetencer inden for både frontend- og backendudvikling, samt UX-metoder
            </p>
            <p>Jeg motiveres af at omsætte brugerindsigter til intuitive, effektive og stabile løsninger, der skaber reel værdi. 
            <br /> <br />
            Med mit store drive, positive tilgang og lyst til at lære nyt er jeg klar til at tage næste skridt og udvikle mig yderligere i en rolle, hvor jeg kan arbejde videre med mine interesser for UX eller softwareudvikling eller i en kombination.</p>
            
            

            <span className='line'></span>


            <div className='download'>

                <div className='button-container'>
                    <a href='/pdf/cv.pdf' className='button'
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>CV</p>
                    </a>
                    <a href='/pdf/eksaminspapir.pdf' className='button' target="_blank"
                    rel="noopener noreferrer">
                    <p>Eksaminspapir</p>
                    </a>
                </div>
            </div>

            </div>


           
           
        </div>
    )
    
}

