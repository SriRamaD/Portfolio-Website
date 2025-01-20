import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Image1 from "../assets/images/Hi1.png";
import emailjs from "@emailjs/browser";
export const Connect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to check if name and email are provided
    if (!name || !email) {
      setStatus('Name and Email are required!');
      return;
    }

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
        setStatus('Email sent successfully!');  // Success message
        setButtonText('Send');
        setTimeout(() => setStatus(''), 3000);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Something went wrong. Please try again later.'); // Error message
        setButtonText('Send');
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
              <Row sm={6} className="px-1">
                <input
                  type="text"
                  value={name}
                  placeholder="Name *"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Row>
              <Row sm={6} className="px-1">
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address *"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Row>
              <Row sm={6} className="px-1">
                <textarea
                  rows={6}
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Row>
              <Row>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Row>

              {/* Displaying status messages */}
              {status && (
                <Col>
                  <p
                    className={status.includes('successfully') ? "success-message" : "error-message"}
                  >
                    {status}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          Thank you for reaching out! I'll be in touch soon 🎉
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Connect;
