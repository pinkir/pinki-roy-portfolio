import { Link } from 'react-scroll';
import '../Header/Header.css'
import Banner from '../Banner/Banner';
import bg from '../../images/bg.jpg'

const Header = () => {
    return (
        <div>
            <nav className='col lg:flex justify-around items-center p-5 text-white bg-black bg-opacity-50 fixed z-10 w-full mx-auto'>
                <Link to='home'><h3 className='text-3xl font-bold'>PINKI ROY</h3></Link>
                <div className='text-sm'>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={500}  className='mr-4'>Home</Link>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500} className='mr-4'>About</Link>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='mr-4'>Skills</Link>
                    <Link to='projects' spy={true} smooth={true} offset={50} duration={500}  className='mr-4'>Projects</Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}  className='mr-4'>Contact</Link>
                    <Link to='blog' spy={true} smooth={true} offset={50} duration={500}  className='mr-4'>Blog</Link>
                    
                </div>

            </nav>
            <div className='bg-gray-700 h-full bg-fixed' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;