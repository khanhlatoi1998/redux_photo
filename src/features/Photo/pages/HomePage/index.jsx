import Banner from '../../../../components/Banner';
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";


const HomePage = () => {
    return (
        <section>
            <Banner />
            <Container className="text-center">
                <NavLink
                    to="/photos"
                >
                    add Photo
                </NavLink>
            </Container>
        </section>
    );
};

export default HomePage;