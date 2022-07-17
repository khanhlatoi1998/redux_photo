import Banner from '../../../../components/Banner';
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import Images from '../../../../contants/images';
import { useSelector } from 'react-redux';


const HomePage = () => {
    const photos = useSelector(state => state.photos);


    return (
        <section>

            <Banner title="Hello World! ..." backgroundUrl={photos.length > 0 ? photos[0].photo : Images.background_01}/>
            <Container className="text-center">
                <NavLink
                    to="/photos/add"
                >
                    add Photo
                </NavLink>
            </Container>
        </section>
    );
};

export default HomePage;