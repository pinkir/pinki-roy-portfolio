import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import contact from '../../images/contact.jpg'
const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mt-40 ">CONTACT INFORMATION</h1>
                <p className="text-center text-neutral-500 mb-10 "> For any query feel free to contact</p>
            </div>
            
            <div className='col lg:flex justify-center gap-10 '>
                <div className='drop-shadow-lg'>
                    <img className='h-[300px]   ' src={contact} alt="" />
                </div>
                <div className='pt-12'>
                    <h3 className="text-3xl font-bold">Find Me On</h3>
                    <p className='text-neutral-500'></p>
                    <p className='flex gap-5 text-3xl mt-6 text-center'><a href="https://www.linkedin.com/in/pinki-roy-57590317b/" target="blank"><FaLinkedin></FaLinkedin><span className='text-xs'>LinkedIn</span></a>
                        <a href="https://github.com/pinkir" target="blank"><FaGithub></FaGithub><span className='text-xs'>GitHub</span></a>
                        <a href="https://www.facebook.com/pinki.tulip" target="blank"><FaFacebook></FaFacebook><span className='text-xs'>Facebook</span></a>
                        <a href="" target="blank"><FaMailBulk></FaMailBulk><span className='text-xs'>pinki.roy072@gmail.com</span></a>
                        <a href="" target="blank"><FaPhone></FaPhone><span className='text-xs'>+8801944738318</span></a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;