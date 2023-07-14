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
import { Zoom } from "react-reveal";
import Bounce from 'react-reveal/Bounce';


const Skills = () => {
    return (
        <div id="skills">
            <Zoom>
                <h1 className="text-4xl text-white font-bold text-center mt-40 ">SKILLS</h1>
            </Zoom>
            <p className="text-center text-neutral-500 mb-10 ">Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,<br /> performant apps and websites for smartphones, tablets, and desktops.</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 justify-items-center justify-center text-center text-white ">
                <Bounce right>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,


                        }}
                        cover={<img className="h-20 p-2" alt="example" src={html} />}
                    >
                        <p className="font-bold text-white">HTML</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={css} />}
                    >
                        <p className="font-bold text-white">CSS</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={js} />}
                    >
                        <p className="font-bold text-white">JavaScript</p>

                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={bootstrap} />}
                    >
                        <p className="font-bold text-white">Bootstrap</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={node} />}
                    >
                        <p className="font-bold text-white">Node.JS</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2 bg-slate-400" alt="example" src={git} />}
                    >
                        <p className="font-bold text-white">Git</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={mysql} />}
                    >
                        <p className="font-bold text-white">MySQl</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={react} />}
                    >
                        <p className="font-bold text-white">React.JS</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={MongoDB} />}
                    >
                        <p className="font-bold text-white">MongoDb</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={tailwind} />}
                    >
                        <p className="font-bold text-white">Tailwind</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2 bg-slate-400" alt="example" src={github} />}
                    >
                        <p className="font-bold text-white">GitHub</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={firebase} />}
                    >
                        <p className="font-bold text-white">Firebase</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-16 p-2" alt="example" src={reactRouter} />}
                    >
                        <p className="font-bold text-white">React Router</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={figma} />}
                    >
                        <p className="font-bold text-white">Figma</p>
                    </Card>
                    <Card
                        className="bg-transparent"
                        hoverable
                        style={{
                            width: 100,
                        }}
                        cover={<img className="h-20 p-2" alt="example" src={express} />}
                    >
                        <p className="font-bold text-white">Express</p>
                    </Card>
                </Bounce>
            </div>

        </div>
    );
};

export default Skills;