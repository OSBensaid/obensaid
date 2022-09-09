import image1 from "../assets/001.jpg";
import image2 from "../assets/002.jpg";
import image3 from "../assets/003.jpg";
import image4 from "../assets/004.webp";
import image5 from "../assets/005.jpg";
import image6 from "../assets/006.jpg";
import ProjectICard from "../components/ProjectICard";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectsList">
        <ProjectICard name="Social Media Website" image={image1} />
        <ProjectICard name="Ecommerce Website" image={image2} />
        <ProjectICard name="Spotify Clone" image={image3} />
        <ProjectICard name="Dashboard Visualizer" image={image4} />
        <ProjectICard name="Mobile Game" image={image5} />
        <ProjectICard name="Management System" image={image6} />
      </div>
    </div>
  );
}
