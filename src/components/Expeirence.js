import '../styles/Experience.css'
 import { ReactComponent as Up } from '../assets/arrow-circle-up-svgrepo-com (3).svg';
 import { ReactComponent as Down } from '../assets/arrow-down-circle-svgrepo-com (1).svg';
 import { useState } from 'react';
 import { motion } from 'framer-motion';


export function Experience(){

    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const toggleOpen2 = () => {
        setIsOpen2(!isOpen2);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: 'easeIn' }
        }
    };



    return(
        <div className={"experience scroll-offset"} id={"experience"}>
            <h2> Relevant Erfaring</h2>
            <motion.div
                className="job"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='jobTitle'>
                    <h3> Studentermedhjælper (Programmør) - Big Web </h3>
                    {isOpen ? (
                                <Up className="Up" onClick={toggleOpen} />
                            ) : (
                                <Down className="Down" onClick={toggleOpen} />
                            )}
                    </div>
                    <p> Jan 2024 – Okt 2024 </p>
                
                    {isOpen && (
                            <div className="jobDescription">
                                <p>Som studentermedhjælper har jeg deltaget i udviklingen af tre forskellige projekter for forskellige kunder med varierende mål og krav.</p>
                                <p>Arbejdet har været remote, hvilket har styrket mine selvstændige arbejdsevner og ansvarlighed.</p>
                                <p>Gennem denne rolle har jeg fået erfaring med følgende teknologier:</p>
                                
                                    <li>React</li>
                                    <li>Node.Js</li>
                                    <li>Typescript</li>
                                    <li>Firebase</li>
                                    <li>Umbraco</li>
                            
                            </div>
                        )}
            </motion.div>

            <span className='line'/>

            <motion.div
                className="job"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                
                
                <div className='jobTitle'>
                <h3> Praktik - Region Midt SterilFlow </h3>
                
                {isOpen2 ? (
                        <Up className="Up" onClick={toggleOpen2} />
                    ) : (
                        <Down className="Down" onClick={toggleOpen2} />
                    )}
                </div>

                <p> Sep 2023 – Jan 2024 </p>


                {isOpen2 && (
                    <div className="jobDescription">

                <p> På 5. semester var jeg i praktik hos Sterilflow hvor jeg var tilknyttet Product Owneren. </p>
                <p>Her har jeg arbejdet nært med Scrum som arbejdsmetode og formulering af krav og behov gennem kommunikation med interessenter </p>
                <p> ved besøg på regions hospitalerne og med diveres stakeholders. </p>
                <p>Under praktikforløbet deltog jeg i kurset: Begrebs- og informationmodellering </p>
                
                <p>Praktikforløbet har bidraget til følgende kompetencer:</p>
                    
                    <li> Scrum </li>
                    <li> Kommunikation på tværs af faggrupper </li>
                    <li> Arbejde med Design Thinking </li>
                    <li> Behovsafklaing </li>
                    <li> Forståelse af at arbejde i en større organisation </li>
                
                    </div>
                )}
            </motion.div>

            <h2> Øvrig Erfaring</h2>
            <motion.div
                className="job2-container"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="job2">
                    <h3> Barnepige, Tilkalder Vikar </h3>
                    <p> Jun 2021 – Sep 2023 </p>
                </div>

                <span className='line2'/>

                <div className="job2">
                    <h3> Service Assistenet - Kvickly </h3>
                    <p> Okt 2018 – Jul 2021 </p>
                </div>
            </motion.div>
            
        </div>
    )
};