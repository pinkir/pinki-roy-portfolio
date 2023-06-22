import { Link } from 'react-router-dom';
import '../Header/Header.css'
import Banner from '../Banner/Banner';
import bg from '../../images/bg.jpg'

const Header = () => {
    return (
        <div>
            <nav className='col lg:flex justify-around items-center p-5 text-white bg-black bg-opacity-50 fixed z-10 w-full mx-auto'>
                <h3 className='text-3xl font-bold'>PINKI ROY</h3>
                <div className='text-base'>
                    <Link to='/' className='mr-4'>Home</Link>
                    <Link to='/' className='mr-4'>About</Link>
                    <Link to='/' className='mr-4'>Skills</Link>
                    <Link to='/' className='mr-4'>Projects</Link>
                    <Link to='/' className='mr-4'>Blog</Link>
                </div>

            </nav>
            <div className='bg-gray-700 h-full bg-fixed' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;