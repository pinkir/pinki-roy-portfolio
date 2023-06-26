import Meta from 'antd/es/card/Meta';
import railway from '../../images/railway.jpg'
import { Button, Card } from 'antd';
import shine from '../../images/Shine.png'
import chef from '../../images/chef.png'
import little from '../../images/little.png'
import Zoom from 'react-reveal/Zoom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data))

    },[])
    return (

        <>
            <div id='projects' className='bg-gray-600 h-full bg-fixed mt-40' style={{ backgroundImage: `url(${railway})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className="text-center text-white pt-10 pb-20">
                    <h1 className="text-4xl font-bold text-center mt-40 ">PROJECTS</h1>
                    <p className="text-center text-white mb-10 mt-3 "> Here are some projects which I have worked on recently..</p>
                </div>

            </div>
            <Zoom>
                <div className='mt-20 grid grid-cols lg:grid-cols-3 gap-2 justify-items-center justify-center'>
                    {
                        projects.map(project => <Card key={project._id}
                            hoverable
                            style={{
                                width: 300,
                            }}
                            cover={<img alt="example" src={project.picture} />}
                        >
                            <Meta title="Shine On Summer" description={project.description} />
                            <div className='flex items-center mt-5 text-3xl text-sky-500'>
                                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                <Button type="link"><a href={project.link} target="blank">Please Visit The Site Here</a></Button>
                            </div>
                        </Card>)
                    }
                    
                </div>
            </Zoom >
        </>

    );
};

export default Projects;