import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import iOSProject from "../assets/images/proj1color.jpg";
import KlangProject from "../assets/images/proj2color.jpg";
import AttendanceProject from "../assets/images/proj3color.jpg";
import PortfolioProject from "../assets/images/proj4.jpg";
import RoverProject from "../assets/images/proj5color.jpg";

export const Projects = () => {

  const projects = [
    {
      title: "iOS Application",
      description: "iOS mobile application ",
      imgUrl: iOSProject,
      githubUrl: "https://github.com/SriRamaD/iOSApplication",
    },
    {
      title: "KLANG Language",
      description: "A custom programming language for efficient parsing and syntax analysis",
      imgUrl: KlangProject,
      githubUrl: "https://github.com/SriRamaD/KLANGLanguage",
    },
    {
      title: "Attendance Tracking",
      description: "",
      imgUrl: AttendanceProject,
      githubUrl: "https://github.com/SriRamaD/Attendance-Tracking",
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: PortfolioProject,
      githubUrl: "https://github.com/SriRamaD/Portfolio-Website",
    },
    {
      title: "Autonomous Rover using Unity",
      description: "Design & Development",
      imgUrl: RoverProject,
      githubUrl: "https://github.com/SriRamaD/AutonomousRover",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Row>
                    {
                      projects.map((project, index) => {
                      return (
                        <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        githubUrl={project.githubUrl}
                        />
                      )
                      })
                    }
                  </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}