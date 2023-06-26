import about from '../../images/about1.jpg'
import Fade from 'react-reveal/Fade';

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
    return (
        <div id='about' className='col lg:flex justify-center gap-5 mt-40'>
            <Fade left>
                <div className='drop-shadow-lg'>
                    <img className='h-[400px] rounded-full  ' src={about} alt="" />
                </div>
            </Fade>
            <Fade right>
                <div className='pt-12'>
                    <h3 className="text-3xl font-bold">About Me</h3>
                    <p className='text-neutral-500'>I'm an experienced MERN (MongoDB, Express.js, React.js, Node.js) developer with 1 year of expertise. <br /> Proficient in JavaScript, React.js, and Node.js, I excel in building dynamic and responsive web <br />applications. <br /> Skilled in developing RESTful APIs using Express.js and handling databases with MongoDB,  <br /> I ensure seamless client-server communication. I collaborate effectively with cross-functional teams, <br />  delivering high-quality products within deadlines. Updated with the latest trends, <br /> I leverage my strong problem-solving skills to optimize performance and troubleshoot issues.</p>
                    <p className='flex gap-5 text-3xl mt-6'><a href="https://www.linkedin.com/in/pinki-roy-57590317b/" target="blank"><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/pinkir" target="blank"><FaGithub></FaGithub></a>
                        <a href="https://www.facebook.com/pinki.tulip" target="blank"><FaFacebook></FaFacebook></a></p>
                </div>
            </Fade>
        </div>
    );
};

export default About;