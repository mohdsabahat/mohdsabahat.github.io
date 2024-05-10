import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import './Home.css';
import { useEffect, useState } from "react";
import image from '../../assets/images/p.jpg';
import Row from "react-bootstrap/Row";

const roleList = ['Full Stack Developer', 'Web Designer', 'Tech Enthusiast'];

const TIME_FOR_SINGLE_LETTTER = 100;
const TIME_FOR_SINGLE_ROLE = 2000;

const Home = () => {
    const [myRole, setMyRole] = useState('');

    useEffect(() => {

        const addLetter = async (currentLetter: string) => {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    setMyRole((prevRole) => {
                        return prevRole + currentLetter;
                    });
                    resolve(true);
                }, TIME_FOR_SINGLE_LETTTER);
            });
        };

        const loopRole = async (role: string) => {
            return new Promise(async (resolve, reject) => {
                for(let letterIndex = 0; letterIndex < role.length; letterIndex++) {
                    await addLetter(role[letterIndex]);
                }
                resolve(true);
            });
        };

        const loopRoles = async () => {
            let roleIndex = 0;
            while(true) {
                //await loopRole(roleList[roleIndex]);
                roleIndex = (roleIndex + 1) % roleList.length;
            }
        }
        
        //loopRoles();

        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            setMyRole(roleList[Math.floor(Math.random() * roleList.length)]);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <section id="home" style={{backgroundColor: 'black'}}>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="text text-white">
                            <span className="heading">Hello</span>
                            <div className="name">I'm <span className="color">Mohd Sabahat</span></div>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">And I am a </span>
                                <h2 className="role color">{myRole}</h2>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="image">
                            <img src={image} className="w-100" alt="Mohd Sabahat" />
                        </div>
                    </Col>
                    <div className="overlay"></div>
                </Row>
            </Container>
        </section>
    );
}

export default Home;