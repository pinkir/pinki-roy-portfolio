import { Link } from 'react-scroll';
import '../Footer/Footer.css'
const Footer = () => {
    return (

        <div className='bg-black h-full bg-fixed mt-40 flex'>
            <div className=" pt-10 pb-10">
                <p className="text-center text-slate-300 text-sm ">Dhaka, Bangladesh</p>
                <p className="text-center text-slate-300 "> © Copyright 2023 Pinki Roy</p>

            </div>
            <div className='text-white'>
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
    );
};

export default Footer;