import Banner from "../../../../components/Banner";
import PhotoForm from "../../compoents/PhotoForm";
import Images from '../../../../contants/images';
import { addPhoto, updatePhoto} from "../../photoSlide";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const AddEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const randomId = Math.floor(Math.random() * 10000);
    const { photoId } = useParams();
    const isAddMode = !photoId;


    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId)); // convert string to number with +string

    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: 'https://i.picsum.photos/id/800/200/300.jpg?hmac=p2lPeodOve_jNKshk2YAKVhKm4UUIJhfUe_Tt4FdnTA'
        }
        : editedPhoto

    const handleSubmitFrom = (values) => {
        if (isAddMode) {
            values.id = randomId; 
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                isAddMode ? dispatch(addPhoto(values)) : dispatch(updatePhoto(values));
                navigate('/photos');
            }, 100)
        });
    };


    return (
        <section className="photo-edit">
            <Banner title="AddEdit ..."/>
            <div className="photo-edit__form">
                <PhotoForm
                    initialValues={initialValues} 
                    onSubmit={handleSubmitFrom} 
                />
            </div>
        </section>
    );
};

export default AddEdit;