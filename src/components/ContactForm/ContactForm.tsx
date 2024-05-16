import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../FormInput/FormInput";

const name_validation = {
    required: 'Name is required',
    maxLength: {
        value: 50,
        message: 'Name should be less than 50 characters'
    }
};
const email_validation = {
    required: 'Email is required',
    pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email'
    }
};
const subject_validation = {
    required: 'Subject is required',
    maxLength: {
        value: 100,
        message: 'Subject should be less than 100 characters'
    }
};
const message_validation = {
    required: 'Message is required',
    maxLength: {
        value: 500,
        message: 'Message should be less than 500 characters'
    }
};

const ContactForm = () => {
    const methods = useForm();

    const handleFormSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleFormSubmit} >
                <Row>
                    <Col xs={12} md={6}>
                        <FormInput 
                            label="Name"
                            type="text"
                            controlId="name"
                            validation={name_validation}
                            name="name"
                        />
                        <FormInput
                            label="Email"
                            type="email"
                            controlId="email"
                            validation={email_validation}
                            name="email"
                        />
                        <FormInput
                            label="Subject"
                            type="text"
                            controlId="subject"
                            validation={subject_validation}
                            name="subject"
                        />
                        {/* <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" {...methods.register('name', name_validation)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...methods.register('name', email_validation)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" {...methods.register('name', subject_validation)}/>
                        </Form.Group> */}
                    </Col>
                    <Col xs={12} md={6}>
                        <FormInput
                            label="Message"
                            controlId="message"
                            validation={message_validation}
                            name="message"
                            as="textarea"
                        />
                        {/* <Form.Group className="mb-3 h-100" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                className="h-75"
                                {...methods.register('message', message_validation)}
                                isValid={methods.formState.touchedFields.message && !methods.formState.errors.message}
                            />
                        </Form.Group> */}
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12} className="mx-auto mt-3">
                        <button className="btn rounded-4 fw-bold w-100">Send</button>
                    </Col>
                </Row>
            </Form>
        </FormProvider>
    );
}

export default ContactForm;