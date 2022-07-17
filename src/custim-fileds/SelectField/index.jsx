import { FormFeedback, FormGroup, Label } from "reactstrap";
import  Select  from "react-select";
import { ErrorMessage } from "formik";

const SelectField = (props) => {
    const { 
        form, field,
        label, type, options, placeholder, disable 
    } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;

    const showError = errors[name] && touched[name];


    let selectedOption = options.find(option => option.value === value);

    const handlSelectedOptionChange = (selectedOption) => {
        let selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }

        field.onChange(changeEvent);
    };
    


    return (
        <FormGroup>
           { label && <Label for={name}>{label}</Label> }
           <Select
                id={name}
                {...field}
                value={selectedOption}

                onChange={handlSelectedOptionChange}
                onClick={() => console.log("clicked")}
                isDisabled={disable}
                placeholder={placeholder}
                options={options}

                className={showError ? 'is-invalid' : ''}
            />
        { showError && <p>{errors[name]}</p>}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default SelectField;