import Banner from '../../../../components/Banner';
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import Images from '../../../../contants/images';

const HomePage = () => {
    return (
        <section>
            <Banner title="Hello World! ..." backgroundUrl={Images.background_01}/>
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