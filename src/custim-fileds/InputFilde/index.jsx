import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

const InputFiled = (props) => {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;

    const {name, value, onChange, onBlur} = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    console.log(touched[name]);
    
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input 
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            />
            
            {/* FormFeedBack cần có một thẻ trước có invalid */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default InputFiled;