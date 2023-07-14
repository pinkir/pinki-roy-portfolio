import { ScrollRestoration } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import '../Home/Home.css'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import bghome from '../../images/bghome.jpg'
const Home = () => {
    return (
        <div className='bg'>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Blog></Blog>
            <ScrollRestoration />
        </div>
    );
};

export default Home;