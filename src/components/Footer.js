import { Container, Row, Col } from "react-bootstrap";
import linkedinLogo from '../assets/images/linkedinlogo.svg';
import githubLogo from '../assets/images/gitlogo.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="aligns-items-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/krishnasai1310/">
                                <img src={linkedinLogo} alt="" />
                            </a>
                            <a href="https://github.com/SriRamaD">
                                <img src={githubLogo} alt="" />
                            </a>
                        </div>
                        <p className="items-align-center">Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}