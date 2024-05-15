import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { aboutInfo } from "../About/About";

import './Contact.css';

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
                        <div>
                            <span className="fas fa-map-marker-alt"></span>
                            <span> Delhi, {aboutInfo.country}</span>
                        </div>
                        <div>
                            <span className="fas fa-phone"></span>
                            <span>
                                <a 
                                    href={`tel:${aboutInfo.phone[0].countryCode}${aboutInfo.phone[0].number}`}
                                >
                                    +{aboutInfo.phone[0].countryCode} {aboutInfo.phone[0].number}
                                </a>
                            </span>
                        </div>
                        <div>
                            <span className="fas fa-envelope"></span>
                            <span> <a href={`mailto:${aboutInfo.email}`}>{aboutInfo.email}</a></span>
                        </div>
                        <div>
                            <span className="fab fa-github"></span>
                            <span> <a href={`${aboutInfo.socials.github}`}>Github</a></span>
                        </div>
                        <div>
                            <span className="fab fa-linkedin"></span>
                            <span> <a href={`${aboutInfo.socials.linkedin}`}>LinkedIn</a></span>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <h3>Send Me a Message</h3>
                        <Card className="mt-4">
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="subject">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Form.Group className="mb-3 h-100" controlId="message">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" className="h-75"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={6} sm={6} xs={12} className="mx-auto mt-3">
                                            <button className="btn rounded-4 fw-bold w-100">Send</button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;