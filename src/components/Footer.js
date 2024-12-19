import { Container, Row, Col } from "react-bootstrap";
import linkedinLogo from '../assets/images/linkedinlogo.svg';
import githubLogo from '../assets/images/linkedinlogo.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="aligns-items-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="">
                                <img src={linkedinLogo} alt="" />
                            </a>
                            <a href="">
                                <img src={githubLogo} alt="" />
                            </a>
                        </div>
                        <p className="text-right">Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}