import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import toast from "react-hot-toast";

import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import { toastStyles } from "../../utils/toastStyles";

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

    const sendMail = async (data: any) => {
        return fetch('https://contact-dev.youranimefix666.workers.dev/', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(data) 
        });
    };
    const dummySuccessSendMail = async (data: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }
    const dummyFailureSendMail = async (data: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(
                    {
                        json: () => new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve({message: 'Failed to send message'})
                            }, 1000);
                        })
                    }
                );
            }, 2000);
        });
    }

    const handleFormSubmit = methods.handleSubmit((data) => {
        console.log(data);
        try {
            toast.promise(sendMail(data), {
                    loading: 'Sending message...',
                    success: 'Thank you for contacting me.',
                    error: (e) => {
                        e.json().then((res: any) =>
                            console.log('Reason for failure : ', res)
                        );
                        return 'Failed to send message';
                    },
                },
                {
                    style: {
                    minWidth: '250px',
                    }
                }
            );
        } catch (error) {
            console.error('Error submitting form : ', error);
            toast.error('Failed to submit form', toastStyles.dark);
        }
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
                        <input 
                            type="hidden" 
                            {...methods.register(`eml2`)} 
                            defaultValue="" 
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <FormInput
                            className="h-75"
                            label="Message"
                            controlId="message"
                            validation={message_validation}
                            name="message"
                            as="textarea"
                        />
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