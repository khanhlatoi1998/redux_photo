import Banner from '../../../../components/Banner';
import Images from '../../../../contants/images';
import { removePhoto } from '../../photoSlide';
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import "./HomePage.scss";


const HomePage = () => {
    const photos = useSelector(state => state.photos);
    const [showContent, setShowContent] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemovePhoto = (photo) => {
        let removePhotoId = photo.id;
        dispatch(removePhoto(removePhotoId));
    };

    const handleEditPhoto = (photo) => {
        const photoId = photo.id;
        navigate(`/photos/${photoId}`);
    };

    return (
        <section className="home-page">

            <Banner title="Hello World! ..." backgroundUrl={photos.length > 0 ? photos[0].photo : Images.background_01} />
            <Container className="text-center">
                <NavLink
                    to="/photos/add"
                >
                    add Photo
                </NavLink>
                <Row>
                    {
                        photos[0] && photos.map((photo, index) => {
                            return (
                                <Col sm="6" key={photo.id}>
                                    <div className="photo-box" onMouseEnter={() => setShowContent(true)} onMouseLeave={() => setShowContent(false)}>
                                        <div className="photo">
                                            <img src={photo.photo} alt={photo.title} />

                                            <div className="photo__overlay">
                                                <h3 className="photo__title">{photo.title}</h3>

                                                <div className="photo__actions">
                                                    <div>
                                                        <Button outline size="sm" color="light" onClick={() => handleEditPhoto(photo)}>
                                                            Edit
                                                        </Button>
                                                    </div>

                                                    <div>
                                                        <Button outline size="sm" color="danger" onClick={() => handleRemovePhoto(photo)}>
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
};

export default HomePage;