import '../styles/Education.css';
import Skema from '../assets/trivselsskema.png'
import App from '../assets/trivselsskema_app.png'
import { motion } from 'framer-motion';

export function Education(){


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
                className="Education scroll-offset"
                id={"education"}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
       
            <h2> Uddanelse</h2>
            <div className ='education-row'>
            <div className = 'educationitem'>
                <h3> Aarhus Universitet – Diplomingeniør Sundhedsteknolgi </h3>
                 <p>Sep, 2021 – Jan 2025</p>
                 <p>
                 Gennem uddannelsen har jeg haft fokus på at udvikle færdigheder inden for softwareudvikling, projektstyring og brugeroplevelse (UX). 
                 Som afsluttende projekt samarbejdede jeg med en medstuderende om at digitalisere Trivselsteamets løsning til støtte for nye forældre. 
                 Vi gennemgik hele processen fra idé og prototype til en fungerende app, hvilket gav praktisk erfaring med både udvikling og brugercentreret design.
                 </p>

                 <p> Prototypen er dannet i <strong>Figma</strong> og appen er udvilket med en frontend i <strong>React Native</strong> og en backend i <strong>Node.js</strong> begge i <strong>Typescript</strong></p>

                <div className='trivselsskema'>
                <img src={Skema} alt="skema" />
                <img src={App} alt="app" />

                </div>

            </div>
            
            <div className = 'educationitem'>
                <h3> Aarhus Universitet – Matematik Økonomi</h3>
                <p>Sep, 2019 – Jan 2020</p>
            
                <h3> Århus Katedralskole - Gymnaise STX, </h3>
                <p>Sep, 2015 – Jun 2018</p>
            </div>
            </div>

            
    
        </motion.div>
    )
};