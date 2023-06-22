import { Card } from "antd";
import html from '../../images/html.png'
import css from '../../images/css-3.png'
import js from '../../images/js.png'
import bootstrap from '../../images/bootstrap.png'
import node from '../../images/nodejs.png'
import git from '../../images/git.png'
import mysql from '../../images/mysql.png'
import react from '../../images/react.png'
import tailwind from '../../images/Tailwind.png'
import github from '../../images/github.png'
import MongoDB from '../../images/mongodb.png'
import firebase from '../../images/firebase.png'
import reactRouter from '../../images/react-router.png'
import express from '../../images/Expressjs.png'
import figma from '../../images/figma.png'

const Skills = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-40 ">SKILLS</h1>
            <p className="text-center text-neutral-500 mb-10 ">Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,<br /> performant apps and websites for smartphones, tablets, and desktops.</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 justify-items-center justify-center text-center">
                <Card
                    hoverable
                    style={{
                        width: 100,
                        
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={html} />}
                >
                   <p className="font-bold">HTML</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={css} />}
                >
                    <p className="font-bold">CSS</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 120,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={js} />}
                >
                    <p className="font-bold">JavaScript</p>
                    
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={bootstrap} />}
                >
                    <p className="font-bold">Bootstrap</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={node} />}
                >
                    <p className="font-bold">Node.JS</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={git} />}
                >
                    <p className="font-bold">Git</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={mysql} />}
                >
                    <p className="font-bold">MySQl</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={react} />}
                >
                    <p className="font-bold">React.JS</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={MongoDB} />}
                >
                    <p className="font-bold">MongoDb</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={tailwind} />}
                >
                    <p className="font-bold">Tailwind</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={github} />}
                >
                    <p className="font-bold">GitHub</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={firebase} />}
                >
                    <p className="font-bold">Firebase</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={reactRouter} />}
                >
                    <p className="font-bold">React Router</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={figma} />}
                >
                    <p className="font-bold">Figma</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img className="h-20 p-2" alt="example" src={express} />}
                >
                    <p className="font-bold">Express</p>
                </Card>
            </div>

        </div>
    );
};

export default Skills;