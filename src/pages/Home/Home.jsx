import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import '../Home/Home.css'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Blog></Blog>
        </div>
    );
};

export default Home;