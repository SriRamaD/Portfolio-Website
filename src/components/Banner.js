import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import Image1 from "../assets/images/Hi1.png";
import Image2 from "../assets/images/Hi3.png";
import Image3 from "../assets/images/Hi4.png";
import { useState, useEffect } from "react";
import resume from "../assets/Resume_Sri.pdf";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["Full Stack Developer", "Software Engineer", "Frontend Developer", "Backend Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 200;

    const images = [Image1, Image2, Image3];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const toRotate = ["Full Stack Developer", "Software Engineer", "Frontend Developer", "Backend Developer"];
        const tick = () => {
            let i=loopNum%toRotate.length;
            let fullText = toRotate[i]; 
            let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);
            setText(updatedText);
    
            if(isDeleting) {
                setDelta(prevDelta => prevDelta/2)
            }
            if(!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            }
            else if(isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
        }
        const ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [delta, isDeleting, loopNum, text])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, [images.length]);

    // const tick = () => {
    //     let i=loopNum%toRotate.length;
    //     let fullText = toRotate[i]; 
    //     let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);
    //     setText(updatedText);

    //     if(isDeleting) {
    //         setDelta(prevDelta => prevDelta/2)
    //     }
    //     if(!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     }
    //     else if(isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum+1);
    //         setDelta(500);
    //     }
    // }
    const handleConnectClick = () => {
        // Scroll to the Connect section
        const connectSection = document.getElementById('connect');
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Sri Rama `}</h1>
                        <h1 className="wrap">{ text }</h1>
                        <p>
                            Experienced and skilled Software Engineer with around 3 years of expertise in 
                            full-stack development. Proven track record of delivering highquality software 
                            solutions and optimizing performance. Proficient in a wide range of programming 
                            languages, tools, and technologies, enabling seamless end-to-end web and mobile
                            application development.
                        </p>
                        <Row>
                            <Col>
                                <button onClick={handleConnectClick}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </Col>
                            <Col>
                                <a href={resume} download="Resume_Sri" className="btn-download">
                                    Download Resume
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={images[currentImage]} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};