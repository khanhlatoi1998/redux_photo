import { FormGroup, Label } from "reactstrap";
import RandomPhoto from "../../components/RadomPhoto";


const RandomPhotoField = (props) => {
    const { label, field, form } = props;
    const { name, value, onBlur } = field;

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
        </FormGroup>
    );
};

export default RandomPhotoField;