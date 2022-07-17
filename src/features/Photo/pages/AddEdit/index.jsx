// import Banner from '../../../../components/Banner';
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../compoents/PhotoForm";
import Images from '../../../../contants/images';
import "./style.scss";


const AddEdit = () => {
    return (
        <section className="photo-edit">
            <Banner title="AddEdit ..."/>
            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </section>
    );
};

export default AddEdit;