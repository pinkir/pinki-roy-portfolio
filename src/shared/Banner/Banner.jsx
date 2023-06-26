import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {
    
   


    const handleType = (count) => {
        // access word count number
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }


    return (
        <>
            <div id='home' >
                <div className="text-center text-white text-5xl font-bold pt-56 pb-72">
                    <h1>Hi! I am Pinki,</h1>
                    <p>I am a {' '}
                        <span className='text-cyan-300'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN Stack Developer', 'React Developer',
                                    'Full Stack Developer',
                                    'Front End Developer',]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span></p>
                    <p><Button className='bg-gradient-to-r from-cyan-500 to-blue-500' type="primary" shape="round" icon={<DownloadOutlined />} >
                        <a href='resume.pdf' download >Resume</a>
                    </Button></p>
                </div>
            </div>
            
        </>
    );
};

export default Banner;