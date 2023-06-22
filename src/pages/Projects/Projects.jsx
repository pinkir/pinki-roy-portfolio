import Meta from 'antd/es/card/Meta';
import railway from '../../images/railway.jpg'
import { Button, Card } from 'antd';
import shine from '../../images/Shine.png'
import chef from '../../images/chef.png'
import little from '../../images/little.png'
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Projects = () => {
    return (
        <>
            <div className='bg-gray-600 h-full bg-fixed mt-40' style={{ backgroundImage: `url(${railway})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className="text-center text-white pt-10 pb-20">
                    <h1 className="text-4xl font-bold text-center mt-40 ">PROJECTS</h1>
                    <p className="text-center text-white mb-10 mt-3 "> Here are some projects which I have worked on recently..</p>
                </div>

            </div>
            <div className='mt-20 grid grid-cols lg:grid-cols-3 gap-2 justify-items-center justify-center'>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={shine} />}
                >
                    <Meta title="Shine On Summer" description="It is a summer camp swimming website. Users can enroll on classes and pay for them. There are some instructors who can add new classes. An admin should approve the classes to show the classes on classes page." />
                    <div className='flex items-center mt-5 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://shine-on-summer.web.app/" target="blank">Please Visit The Site Here</a></Button>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={chef} />}
                >
                    <Meta title="Chef's Dining" description="Chef's Dining is a mediterranean recipe website. User can find latest recipes from the top chefs in the world. Also they can add their new recipes. User can see chefs details and add any recipe as their favorite." />
                    <div className='flex items-center mt-7 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://chefs-dining.web.app/" target="blank">Please Visit The Site Here</a></Button>
                    </div>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={little} />}
                >
                    <Meta title="Little Lamb" description="Little Lamb is a animal toy store website. Here user can find all category of animal stuffed toys. User can find toys by the category and select them. A Seller can add, update or delete toys which they want to sell. " />
                    <div className='flex items-center mt-7 text-3xl text-sky-500'>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        <Button type="link"><a href="https://little-lamb-a9733.web.app/" target="blank">Please Visit The Site Here</a></Button>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Projects;