import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        {/* <a
                            className="header__link header__title"
                            href="https://www.facebook.com/campaign/landing.php?&campaign_id=1661697988&extra_1=s%7Cc%7C515923224890%7Ce%7Cfacebook%7C&placement=&creative=515923224890&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661697988%26adgroupid%3D65157402478%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028581%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIOB2OmS9_rUDT6XolOeGwMVp71_F2A8_w9SvgDV8boB41_4v7eVdhBoC414QAvD_BwE"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Quốc Khánh
                        </a> */}
                        <NavLink 
                            to="/"
                            className="header__link"
                        >Quốc Khánh</NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            to="/photos"
                            className="header__link"
                           
                        >
                            Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;