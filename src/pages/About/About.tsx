import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './About.css';
import { Card } from "react-bootstrap";

interface AboutInfo {
    firstName: string,
    lastname: string,
    address: string,
    city: string,
    state: string,
    pincode: number,
    email: string,
    phone: {countryCode: string, number: string}[]
}
export const aboutInfo = {
    firstName: 'Mohd',
    lastName: 'Sabahat',
    address: '206, Rabri Tola, Old City',
    city: 'Bareilly',
    country: 'India',
    state: 'UP',
    pinCode: 243005,
    email: 'mohdsabahat123@gmail.com',
    phone: [{countryCode: '91', number: '8171556909'},{countryCode: '91', number: '9412067348'}],
    socials: { 
        github: 'https://www.github.com/mohdsabahat',
        linkedin: 'https://www.linkedin.com/in/mohd-sabahat'
    }
}

const About = () => {
    return (
        <section id="about">
            <Container className="navbar-offset">
                <div className="page-title">
                  <h2>About <span className="dots color-text">Me</span></h2>
                </div>
                <Row className="g-5">
                    <Col xs={12} md={6} lg={6} >
                        <p className="about-text">
                            {/* [TODO] About discovering a passion for making things work better. Whether it's a piece of code or complex system. */}
                            {/* I've got a soft spot for python. It's like the Swiss Army knife in my toolkit. It's helped me dive into averaging from video streaming and figuring out API's.
                            And yes, I have spent quite a few nights contributing to open source projects because, Why not? It's fun it's challenging and it's where I've learned some of my best tricks.  */}
                            Hey there! I love turning complex problems into simple elegant web solutions. Whether it's a snappy single page app or a full fledge enterprise system, I'm on it. 
                            So if you're looking for someone who can bridge the gap between servers and screens, look no further. Let's build something great together. 
                        </p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <ul className="about-list ps-0">
                            <li>
                                <span className="title">Name</span>
                                <span className="value">
                                    {aboutInfo.firstName} {aboutInfo.lastName}
                                </span>
                            </li>
                            <li>
                                <span className="title">Address</span>
                                <span className="value">
                                    {aboutInfo.address}, {aboutInfo.city}, {aboutInfo.state}; {aboutInfo.pinCode}
                                </span>
                            </li>
                            <li>
                                <span className="title">E-mail</span>
                                <span className="value">
                                    {aboutInfo.email}
                                </span>
                            </li>
                            <li>
                                <span className="title">Phone</span>
                                <span className="value">
                                    {aboutInfo.phone.map((phone,idx) => {
                                        return <span className="phone-number mx-1" key={phone.number}>{phone.countryCode}-{phone.number}{idx < aboutInfo.phone.length - 1 ? ',' : ''}</span>
                                    })}
                                </span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;