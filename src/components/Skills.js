import '../styles/Skills.css'
import { motion } from 'framer-motion';

export function Skills(){


    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: 'easeIn' }
        }
    };

    return(
        <motion.div
                className="skills-container scroll-offset"
                id={'skills'}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
        {/* <div className={"skills-container"} id={"skills"}> */}
            <h2> Kompetencer</h2>

            <div className='skills'>

            <div className= 'skill'>
             <h3>Programmering og teknologier</h3>
             <p>  Erfaring med udvikling i programmeringssprog som <strong>C#, Kotlin, TypeScript og JavaScript</strong>. Behersker frameworks som <strong> 
             React, React Native og Node.js</strong> til udvikling af web- og mobilapplikationer.</p>

             <span className='line'></span>
            </div>

            <div className= 'skill'>
             <h3>Produktudvikling</h3>
             <p>  Erfaring med hele udviklingsprocessen fra idé til lancering. <br/>Agilt og iterativt arbejde, <strong>Scrum</strong></p>

                <span className='line'></span>
            </div>

            <div className= 'skill'>
             <h3>UX-research & brugercentreret design</h3>
             <p>  Erfaring med <strong>brugerundersøgelser, interviews og usabilitytests </strong></p>
             <p> Metodisk tilgang via <strong>Design Thinking</strong></p>

             <span className='line'></span>
            </div>

            <div className= 'skill'>
             <h3> Wireframing og prototyping</h3>
             <p>  Arbejder sikkert i <strong> Figma</strong> til design af intuitive grænseflader.</p>
             <p> Derudover erfaring med <strong>Miro og Canva</strong></p>

             <span className='line'></span>
             
            </div>

            <div className= 'skill'>
                <h3> Samarbejde & kommunikation</h3>
                <p> Jeg har fået god erfaring med at arbejde i tværfaglige teams og formidle tekniske løsninger til forskellige interessenter.</p>
            
                <span className='line'></span>

            </div>

            </div>
           
        </motion.div>
    )
};