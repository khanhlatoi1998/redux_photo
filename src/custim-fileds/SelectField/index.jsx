import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

const SelectField = (props) => {
    const {
        form, field,
        label, type, options, placeholder, disable
    } = props;
    const { name, value, onBlur, onChange } = field;
    const { errors, touched } = form;

    const showError = errors[name] && (touched[name] || touched["react-select-3-input"]);

    let selectedOption = options.find(option => option.value === value);


    const handlSelectedOptionChange = (selectedOption) => {
        let selectedValue = selectedOption ? selectedOption.value : selectedOption;

        // const changeEvent = {
        //     target: {
        //         name: name,
        //         value: selectedValue
        //     }
        // }

        // field.onChange(changeEvent);

        form.setFieldValue(name, selectedValue);
    };

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handlSelectedOptionChange}
                
                isDisabled={disable}
                placeholder={placeholder}
                options={options}
            />

            {showError && <p style={{ color: 'red' }}>{errors[name]}</p>}
        </FormGroup>
    );
};

export default SelectField;