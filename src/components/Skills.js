import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/images/SkillLogo.png";

export const Skills = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const renderSkill = (skill) => (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      {/* <div className="skill-percentage" style={{ width: `${percentage}%` }}></div> */}
    </div>
  );

  return (
    <Row id="skills">
        <h1 style={{ marginBottom: '30px' }}> Skills </h1>
    <Col md={6}> {/* This Col wraps the Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} className="skill-carousel">
        <Carousel.Item>
          <h3>Programming Skills</h3>
          {renderSkill('JavaScript')}
          {renderSkill('Java')}
          {renderSkill('Python')}
          {renderSkill('C')}
          {renderSkill('SQL')}
          {renderSkill('HTML')}
          {renderSkill('CSS')}
          {renderSkill('C#')}
          {renderSkill('Swift')}
          {/* Add more programming skills here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Tools/Technologies</h3>
          {renderSkill('Git')}
          {renderSkill('Docker')}
          {renderSkill('AWS')}
          {renderSkill('GCP')}
          {renderSkill('Docker')}
          {renderSkill('Git')}
          {renderSkill('Bootstrap')}
          {renderSkill('Jenkins')}
          {/* Add more tools/technologies here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Frameworks</h3>
          {renderSkill('React')}
          {renderSkill('Angular')}
          {renderSkill('Vue.js')}
          {renderSkill('Express.js')}
          {renderSkill('Node.js')}
          {renderSkill('Spring')}
          {renderSkill('REST')}
          {renderSkill('Hibernate')}
          {renderSkill('GraphQL')}
          {/* Add more frameworks here */}
        </Carousel.Item>
        <Carousel.Item>
          <h3>Database Skills</h3>
          {renderSkill('MySQL')}
          {renderSkill('MongoDB')}
          {renderSkill('MS SQL Server')}
          {renderSkill('PostgreSQL')}
          {/* Add more database skills here */}
        </Carousel.Item>
      </Carousel>
    </Col>
    <Col md={6}> {/* This Col wraps the image */}
      <img src={Logo} alt="SkillImage" className="skill-logo mb-5" />
    </Col>
    </Row>
  );
};

export default Skills;
