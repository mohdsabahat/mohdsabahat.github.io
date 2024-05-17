import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { aboutInfo } from "../About/About";

import './Contact.css';
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <section id="contact">
            <Container className="navbar-offset">
                <div className="page-title">
                  <h2>Contact <span className='dots color-text'>Me</span></h2>
                </div>
                <hr></hr>
                <Row className="gy-4">
                    <Col xs={12} md={4}>
                        <Card className="mb-2">
                            <Card.Body className="align-self-center">
                                <div className="d-flex flex-column">
                                    <span className="fas fa-map-marker-alt mx-auto mb-2 icon"></span>
                                    <span className="mx-auto  icon-text"> Delhi, {aboutInfo.country}</span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-2">
                            <Card.Body className="align-self-center">
                                <div className="d-flex flex-column">
                                <span className="fas fa-phone  mx-auto mb-2 icon"></span>
                                <span className="mx-auto  icon-text">
                                    <a 
                                        className="text-decoration-none"
                                        href={`tel:${aboutInfo.phone[0].countryCode}${aboutInfo.phone[0].number}`}
                                    >
                                        +{aboutInfo.phone[0].countryCode} {aboutInfo.phone[0].number}
                                    </a>
                                </span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-2">
                            <Card.Body className="align-self-center">
                                <div className="d-flex flex-column">
                                <span className="fas fa-envelope mx-auto mb-2 icon"></span>
                                <span className="mx-auto  icon-text">
                                    <a 
                                        className="text-decoration-none"
                                        href={`mailto:${aboutInfo.email}`}
                                    >
                                        {aboutInfo.email}
                                    </a>
                                </span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-2">
                            <Card.Body className="align-self-center">
                                <div className="d-flex flex-column">
                                <span className="fab fa-github mx-auto mb-2 icon"></span>
                                <span className="mx-auto  icon-text">
                                    <a 
                                        className="text-decoration-none"
                                        href={`${aboutInfo.socials.github}`}
                                    >
                                        Github
                                    </a>
                                </span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-2">
                            <Card.Body className="align-self-center">
                                <div className="d-flex flex-column">
                                <span className="fab fa-linkedin mx-auto mb-2 icon"></span>
                                <span className="mx-auto  icon-text"> 
                                    <a 
                                        className="text-decoration-none"
                                        href={`${aboutInfo.socials.linkedin}`}
                                    >
                                        LinkedIn
                                    </a>
                                </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8}>
                        <h3>Send Me a Message</h3>
                        <Card className="mt-4">
                            <Card.Body>
                                <ContactForm />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <div className="mt-3 position-relative" style={{ paddingBottom: '50%'}}
                >
                    <iframe 
                        title="My Address Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95104629645!2d76.76356261822156!3d28.644287349748502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1715836442953!5m2!1sen!2sin" 
                        style={{position: 'absolute', border:0, top: 0, left: 0, height: '100%', width: '100%'}} 
                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Container>
        </section>
    )
}

export default Contact;