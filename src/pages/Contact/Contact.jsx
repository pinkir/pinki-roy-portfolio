
import contact from '../../images/contact.jpg'
import TextArea from 'antd/es/input/TextArea';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ufjgctq', 'template_xfs7jy9', form.current, 'gh7xc3fLl5_FeqiNU')
            .then((result) => {
                console.log(result.text);


            },
                (error) => {
                    console.log(error.text);

                }

            );
        e.target.reset()




    }

    return (
        <div id='contact'>
            <div>
                <h1 className="text-3xl text-white font-bold text-center pt-40 ">CONTACT INFORMATION</h1>
                <p className="text-center text-neutral-500 mb-10 "> For any query feel free to contact</p>
            </div>


            <div className='col lg:flex justify-center gap-10 '>
                <div>
                    {/* <img className='h-[300px]   ' src={contact} alt="" /> */}
                    <iframe width="520" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=dhaka,%20bangladesh+(Pinki%20Roy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                </div>

                <div className=' text-white'>
                    <h3 className="text-3xl font-bold mt-5">Message Me Here!!</h3>
                    <form ref={form} onSubmit={sendEmail} className='text-black'>
                        <input className='mb-3 mt-3 p-2 w-full rounded' type='text' placeholder="Your Name" name='name' required />
                        <br />
                        <input className='mb-3 p-2 w-full rounded' type='email' placeholder="Your Email" name='email' required />
                        <br />

                        <textarea className='p-2 w-full rounded' rows={4} placeholder='Message' name='message' required />
                        <button className='mt-3 bg-cyan-400 rounded p-2 text-slate-800' type="submit" name='submit' >
                            Send
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;