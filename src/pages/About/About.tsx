import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './About.css';
import { Card } from "react-bootstrap";

const aboutInfo = {
    firstName: 'Mohd',
    lastName: 'Sabahat',
    address: '206, Rabri Tola, Old City',
    city: 'Bareilly',
    state: 'UP',
    pinCode: 243005,
    email: 'mohdsabahat123@gmail.com',
    phone: [918171556909]
}

const About = () => {
    return (
        <section id="about">
            <Container>
                <Col>
                    <Row>
                        <Card className="mt-4">
                            <Card.Title className="text-center">About - WIP</Card.Title>
                            <Card.Body>
                                <ul>
                                    <li>{aboutInfo.firstName} {aboutInfo.lastName}</li>
                                    <li>{aboutInfo.address}, {aboutInfo.city}, {aboutInfo.state}</li>
                                    <li>{aboutInfo.pinCode}</li>
                                    <li>{aboutInfo.email}</li>
                                    <li>{aboutInfo.phone}</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </section>
    )
}

export default About;