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
        <div>
            <div className="text-center text-white text-5xl font-bold pt-56 pb-72">
                <h1>Hi! I am Pinki,</h1>
                <p>I am a {' '}
                    <span style={{ color: '	#ffd700', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['MERN Stack Developer', 'React Developer',
                            'Full Stack Developer',
                            'Front End Developer',  ]}
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
            </div>
        </div>
    </>
);
};

export default Banner;