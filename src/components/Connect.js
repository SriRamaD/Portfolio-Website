import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/images/Hi1.png";
import emailjs from "@emailjs/browser"; // Import EmailJS

export const Connect = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    const serviceId = 'service_l2qtlpr';
    const templateId = 'template_rcjwrmo';
    const publicKey = 'Df6yH3EgWBAtkbXXG';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sri Rama',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

  };

  return (
    <section className="connect" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={Image1} alt="Lets connect" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Col>
                </Row>
                {/* <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col> */}
                <Row>
                <Col sm={6} className="px-1">
                  <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                </Col>
                </Row>
                {/* <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col> */}
                <Row>
                <Col sm={6} className="px-0">
                  <textarea rows={6} value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                </Col>
                </Row>
                <Row>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Row>
                {/* {status.message && <Col><p className={status.success ? "success" : "danger"}>{status.message}</p></Col>} */}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Connect;
