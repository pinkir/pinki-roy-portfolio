import Meta from 'antd/es/card/Meta';
import blog from '../../images/blog.jpg'
import { Button, Card } from 'antd';
import gpt from '../../images/gpt.jpg'
import re from '../../images/re.png'
import mern from '../../images/mern.jpg'
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Blog = () => {
    return (
        <>
            <div id='blog' className='bg-gray-600 h-full bg-fixed mt-40 ' style={{ backgroundImage: `url(${blog})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className="text-center text-white pt-10 pb-20">
                    <h1 className="text-4xl font-bold text-center mt-40 ">BLOGS</h1>
                    <p className="text-center text-white mb-10 mt-3 "> Here are some latest Blogs</p>
                </div>

            </div>
            <div className='mt-20 grid grid-cols lg:grid-cols-3 gap-2 justify-items-center justify-center pb-40'>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={gpt} />}
                >
                    <Meta title="ChatGPT-4 For Future" description="Chat GPT 4 is the latest version of OpenAI’s GPT (Generative Pre-trained Transformer) language model. It is a significant breakthrough in the field of AI and natural language processing, as it is capable of generating high-quality, engaging content quickly and efficiently." />
                    <div className='flex items-center mt-5 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://medium.com/@techynilesh/chat-gpt-4-the-future-of-ai-e05bd9ffeb57" target="blank">Read More</a></Button>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={mern} />}
                >
                    <Meta title="MERN Stack" description="MERN Stack is a compilation of four different technologies MongoDb, Express.JS, React.JS and Node.JS. It's purpose is to develop apps using JavaScript only. It allows faster development and execution of websites and applications." />
                    <div className='flex items-center mt-5 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7072469493234434048/" target="blank">Read More</a></Button>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={re} />}
                >
                    <Meta title="Learn REACT" description="We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing a new officially  " />
                    <div className='flex items-center mt-5 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://react.dev/blog/2023/05/03/react-canaries" target="blank">Read More</a></Button>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Blog;