import { Link } from 'react-router-dom';
import '../Header/Header.css'
import Banner from '../Banner/Banner';
import bg from '../../images/bg.jpg'

const Header = () => {
    return (
        <div className='bg-gray-700 h-full bg-fixed' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
            <nav className='col lg:flex justify-around items-center p-5 text-white '>
                <h3 className='text-3xl font-bold'>PINKI ROY</h3>
                <div className='text-lg'>
                    <Link to='/' className='mr-4'>Home</Link>
                    <Link to='/projects' className='mr-4'>Projects</Link>
                    <Link to='/about' className='mr-4'>About</Link>
                    <Link to='/blog' className='mr-4'>Blog</Link>
                </div>

            </nav>
            <Banner></Banner>
        </div>
    );
};

export default Header;