import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "../../components/RadomPhoto";


const RandomPhotoField = (props) => {
    const { label, field, form } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;

    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    };


    return (
        <FormGroup>
            { label && <Label for={name}>{label}</Label>}
            <RandomPhoto 
                name={name}
                imgUrl={value}
                onRandomButtonBlur={onBlur}
                onImageUrlChange={handleImageUrlChange}
                
                
            />

            {showError && <p style={{color: 'red'}}>{errors[name]}</p>}
        </FormGroup>
    );
};

export default RandomPhotoField;