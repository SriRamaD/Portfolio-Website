import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import homeLogo from '../assets/images/logo.svg';
import linkedinLogo from '../assets/images/linkedinlogo.svg';
import githubLogo from '../assets/images/gitlogo.png';
// import mailLogo from '../assets/images/gmail2.png';
// import { Connect } from "./Connect";
export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY >50)
                setScrolled(true);
            else
                setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const handleConnectClick = () => {
        // Scroll to the Connect section
        const connectSection = document.getElementById('connect');
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                {/* <Navbar.Brand href="#logo">
                    <img src={homeLogo} alt="#Main Logo" />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/krishnasai1310/">
                            <img src={linkedinLogo} alt="LinkedIn Icon"/>
                        </a>
                        <a href="https://github.com/SriRamaD">
                            <img src={githubLogo} alt="Github Icon"/>
                        </a>
                    </div>
                    <button className="connect-button" onClick={handleConnectClick}>
                        <span>Let's Connect</span>
                    </button>
                </span>
            </Container>
        </Navbar>
    )
}