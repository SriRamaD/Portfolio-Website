import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import CapitalOneLogo from "../assets/images/capitalone2.png";
//import ShoptakiLogo from "../assets/images/shoptaki1.png";
import PNILogo from "../assets/images/PNI1.png";
import AmazonLogo from "../assets/images/Amazon.png";
import CapgeminiLogo from "../assets/images/Capgemini.png";

const ExperienceBlock = ({ experience }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="px-5">
      <Card className="experience-card">
        <Card.Img variant="top" src={experience.logo} />
        <Card.Body>
          <Card.Title>{experience.company}</Card.Title>
          <Card.Text>
            {experience.period}
            <br />
            {experience.shortDescription}
          </Card.Text>
          <Button onClick={handleShow}>Read More</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" className="align-tems: bottom">
        <Modal.Header closeButton>
          <Modal.Title>{experience.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{experience.period}</h5>
          {console.log('Full Description:', experience.fullDescription)}
          <ul>
            {experience.fullDescription.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    // Add your experiences here
    {
      company: 'Role: Full Stack Developer',
      period: 'August 2023 - January 2025',
      logo: CapitalOneLogo, // path to logo image
      shortDescription: 'Plano, TX',
      fullDescription: [
        'Designed and implemented cloud-based full-stack solutions using Java, JavaScript, TypeScript, SQL, and HTML/CSS, improving system efficiency and supporting over 500 in-branch locations.',
        'Streamlined deployment processes by utilizing Docker and Kubernetes, reducing deployment time by 40% and ensuring system uptime of 99.9%.',
        'Leveraged AWS services such as Lambda, RDS (PostgreSQL), S3, and API Gateway to build scalable, secure solutions capable of handling millions of daily financial transactions.',
        'Collaborated with Agile teams to deliver modernized transaction solutions, leveraging Spring Boot to build scalable microservices that increased branch ambassador productivity by 30%.',
        'Optimized database queries in PostgreSQL, achieving a 20% reduction in response times, and enhanced data reliability to support millions of daily financial transactions.',
        'Integrated React.js for front-end development, improving UI performance by 25%, and ensuring a seamless user experience across devices.',
      ]
    },
    {
        company: 'Role: Full Stack Developer',
        period: 'September 2022 - May 2023',
        logo: PNILogo, // path to logo image
        shortDescription: 'New York, NY',
        fullDescription: [
          'Developed web pages with HTML, CSS, jQuery, Bootstrap, TypeScript and ReactJS, achieving load time closer to 2 seconds.',
          'Implemented Spring framework with Hibernate for MS SQL Server, resulting in faster queries and improved application performance.',
          'Created REST API endpoints with JAX-RS and Spring Boot, helping in quicker responses within 2.6 seconds.',
          'Engineered an iOS mobile app using Agile, TDD methodologies; created interactive UI with SwiftUI, improving user engagement by 40%.',
          'Designed a matching algorithm for users based on personality traits and desired attributes, resulting in a 94% success rate of matching compatibility.',
          'Utilized AWS services such as EC2, RDS, S3; enabling real-time usage and data reliability for users, with a data synchronization success rate of 98.9%.',
        ]
      },
      {
        company: 'Role: Software Development Engineer Intern',
        period: 'May 2022 - August 2022',
        logo: AmazonLogo, // path to logo image
        shortDescription: 'Bellevue, WA',
        fullDescription: [
          'Worked in a team to develop an innovative technology to enable a new skill in Alexa that helps customers to learn a new language.',
          'Collaborated with cross-functional teams to develop an efficient and accurate phonetic level pronunciation evaluation algorithm to build a Java library.',
          'Crafted comprehensive unit tests with JUnit, achieving 94% code and 90% branch coverage, ensuring a highly reliable and robust library.',
          'Leveraged various AWS services (EC2, S3, Lambda, RDS) ensuring secure and cost-effective implementation while maintaining 99.99% uptime.',
        ]
      },
      {
        company: 'Role: Software Engineer',
        period: 'October 2020 - June 2021',
        logo: CapgeminiLogo, // path to logo image
        shortDescription: 'Chennai, India',
        fullDescription: [
          'Successfully executed testing protocols using Selenium for a banking application, with 50% reduction in bugs and 2x improvement in response time.',
          'Implemented a highly efficient microservices architecture, leading to 3 hours decrease in system downtime in a month.',
          'Created SQL queries to extract data from various database tables, resulting in a 25% reduction in testing time and a 15% increase in data accuracy.',
          'Utilized Jenkins to automate testing tasks, reducing manual intervention, and saving an average of 6 hours per testing cycle for the engineers.',
          'Written and executed 180+ manual test cases and automation scripts using Selenium WebDriver, TestNG, Git, Jenkins, and Maven.',
        ]
      },
  ];

  return (
    <Row id="experience">
        <h1 style={{ marginBottom: '30px' }}>Experience</h1>
      {experiences.map((exp, idx) => (
        <Col key={idx} sm={12} md={6} className="mb-4">
          <ExperienceBlock experience={exp} />
        </Col>
      ))}
    </Row>
  );
};
