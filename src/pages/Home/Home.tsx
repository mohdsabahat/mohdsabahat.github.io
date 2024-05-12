import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Home.css';
import { useEffect, useState } from "react";
import bgImage from '../../assets/images/bg2.png';
import { ABOUT_PAGE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const roleList = ['Full Stack Developer', 'Web Designer', 'Tech Enthusiast'];

const TIME_FOR_SINGLE_LETTTER = 100;
const TIME_FOR_SINGLE_ROLE = 2000;

const homeSectionStyles = {
    background: `url("${bgImage}") no-repeat center center`, 
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    // position: 'relative',
    overflow: 'hidden',
    zIndex: '2'
};

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
        <section id="home" style={homeSectionStyles}>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <div className="text text-white">
                            <div>
                                <h2 className="role color">{myRole}</h2>
                            </div>
                            <div className="name">Mohd Sabahat</div>
                        </div>
                    </Col>
                    <div className="overlay"></div>
                </Row>
            </Container>
        </section>
        {/* <section className="home-about p-5 d-block d-lg-none">
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
        </section> */}
        </>
    );
}

export default Home;