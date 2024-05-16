import Form from "react-bootstrap/Form";
import { findInputError, isFormInvalid } from "../../utils/formUtils";

import { useFormContext } from "react-hook-form";

interface FormInputProps {
    label: string;
    type?: string;
    controlId: string;
    validation: any;
    name: string;
    as?: React.ElementType;
}

type InputErrorType = {
    error?: {
        message: string;
    }
};

const FormInput = ({ label, type, controlId, validation, name, ...otherProps } : FormInputProps) => {
    const { register, formState: { errors } } = useFormContext();

    const inputError: InputErrorType = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                type={type}
                isInvalid={isInvalid}
                {...register(name, validation)} 
                {...otherProps} 
            />
            <Form.Control.Feedback type="invalid">
                  {isInvalid && inputError?.error?.message}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default FormInput;