import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Resume.css';
import SkillList from '../../components/SkillList/SkillList';


const Resume = () => {
    return (
        <section id="resume">
            <Container className="navbar-offset">
                <div className="page-title">
                  <h2 className='dots'>Resume</h2>
                </div>
                <Row>
                    {/* Education and experience section */}
                    <Col xs={12} md={6} lg={6}>
                        <h3>Education</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="left-part">
                                    <span className="item-time-period">2019-2023</span>
                                    <span className="item-company">Aligarh Muslim University</span>
                                </div>
                                <div className="divider"></div>
                                <div className="right-part">
                                    <div className="item-title">
                                        B.Tech (Eletrical Egineering)
                                    </div>
                                    <p><i>9.23 CPI</i></p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="left-part">
                                    <span className="item-time-period">2016-2018</span>
                                    <span className="item-company">Bishop Conrad Senior Secondary School</span>
                                </div>
                                <div className="divider"></div>
                                <div className="right-part">
                                    <div className="item-title">
                                        Senior Secondary Certificate
                                    </div>
                                    <p><i>85%</i></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h3>Experience</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="left-part">
                                    <span className="item-time-period">Feb 2023 - July 2023</span>
                                    <span className="item-company">Comviva</span>
                                </div>
                                <div className="divider"></div>
                                <div className="right-part">
                                    <div className="item-title">
                                        Product Development Intern
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="left-part">
                                    <span className="item-time-period">Aug 2023</span>
                                    <span className="item-company">Comviva</span>
                                </div>
                                <div className="divider"></div>
                                <div className="right-part">
                                    <div className="item-title">
                                        Product Development Engineer
                                    </div>
                                    <p>
                                        Developed and maintained web applications using Java, JSP, and MySQL.
                                        Responsible for designing database schemas, implementing business logic, and creating user-friendly interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {/* Skills section */}
                    <Col>
                        <div className='d-flex'>
                            <h3 
                                className='m-0 position-relative'
                                style={{paddingRight: '25px'}}
                            >My <span className='dots color-text'>Skills</span></h3>
                        </div>
                        <SkillList />
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <div className='d-flex'>
                            <h2
                                className='m-0 position-relative'
                                style={{paddingRight: '25px'}}
                            >
                                <span className='dots'>Certifications</span>
                            </h2>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}


export default Resume;