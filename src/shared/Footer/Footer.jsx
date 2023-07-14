import { Link } from 'react-scroll';
import '../Footer/Footer.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (

        <>
            <div className='bg-black h-full bg-fixed col lg:flex  justify-around items-center text-white p-20'>
                <div className='text-slate-300 pb-5'>
                    <h1 className='font-bold text-2xl '>Pinki Roy</h1>
                    <h5>Dhaka, bangladesh</h5>
                </div>
                <div className='pb-5'>
                    <h3 className='text-slate-300 font-bold text-2xl'>Contact Me</h3>
                    <p className='text-slate-300 font-thin text-sm '>Email: pinki.roy072@gmail.com</p>
                </div>


                <div className="text-slate-300 pb-5">
                    <h3 className='font-bold text-2xl'>Find me</h3>
                    <p className='flex gap-5 text-2xl'><a href="https://www.linkedin.com/in/pinki-roy-57590317b/" target="blank"><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/pinkir" target="blank"><FaGithub></FaGithub></a>
                        <a href="https://www.facebook.com/pinki.tulip" target="blank"><FaFacebook></FaFacebook></a></p>
                </div>
                <div className='text-slate-300 font-thin text-sm'>
                    <h3 className='font-bold text-2xl'>Links</h3>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className='mr-4'>Home</Link> <br />
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500} className='mr-4'>About</Link>
                    <br />
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className='mr-4'>Skills</Link>
                    <br />
                    <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className='mr-4'>Projects</Link>
                    <br />
                    <Link to='blog' spy={true} smooth={true} offset={50} duration={500} className='mr-4'>Blog</Link>
                </div>

            </div>
            <div className=" pt-5 pb-5 bg-black text-xs">
                <p className="text-center text-slate-300 text-sm ">Dhaka, Bangladesh</p>
                <p className="text-center text-slate-300 "> © Copyright 2023 Pinki Roy</p>

            </div>

        </>
    );
};

export default Footer;