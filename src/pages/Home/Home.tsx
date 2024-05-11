import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Home.css';
import { useEffect, useState } from "react";
import image from '../../assets/images/p.jpg';
import { ABOUT_PAGE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const roleList = ['Full Stack Developer', 'Web Designer', 'Tech Enthusiast'];

const TIME_FOR_SINGLE_LETTTER = 100;
const TIME_FOR_SINGLE_ROLE = 2000;

const Home = () => {
    const [myRole, setMyRole] = useState('');
    const navigate = useNavigate();

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
        let i = 0;
        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            i = (i+1) % roleList.length;
            //setMyRole(roleList[Math.floor(Math.random() * roleList.length)]);
            setMyRole(roleList[i] );
            i++;
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <>
        <section id="home" style={{backgroundColor: 'black'}}>
            <Container>
                <Row className="position-relative">
                    <Col md={6} xs={12}>
                        <div className="text text-white">
                            <span className="heading">Hello!</span>
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
        <section className="home-about p-5 d-block d-lg-none">
            <Container>
                <Row>
                    <Col>
                        <div className="d-md-block d-flex flex-column">
                            <h1 className="text-center">More about me  </h1>
                            <Row>
                                <Col className="mx-auto" xs={12} md={6} lg={4}>
                                    <button className="btn btn-custom-primary w-100" onClick={ () => navigate(ABOUT_PAGE_URL) }>About me</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default Home;