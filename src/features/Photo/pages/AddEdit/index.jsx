// import Banner from '../../../../components/Banner';
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../compoents/PhotoForm";
import Images from '../../../../contants/images';
import { addPhoto } from "../../photoSlide";
import { useDispatch } from "react-redux";
import "./style.scss";

const AddEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmitFrom = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(addPhoto(values));
                navigate('/photos');
            }, 50000)
        });
    };


    return (
        <section className="photo-edit">
            <Banner title="AddEdit ..."/>
            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmitFrom}/>
            </div>
        </section>
    );
};

export default AddEdit;