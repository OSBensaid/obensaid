import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../styles/ProjectICard.css";
function ProjectICard({ image, name, description, codeUrl, viewUrl, tags }) {
  return (
    <div className="projectItem">
      <div className="projectImage">
        <img src={image} alt="" />
      </div>
      <div className="projectDetails">
        <h1>{name}</h1>
        <div className="projectTags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}, </span>
          ))}
        </div>
        <p>{description}</p>
        <div className="projectBtns">
          <a className="btn" href={codeUrl} target="_blank" rel="noreferrer">
            <GitHubIcon />
            Code
          </a>
          <a className="btn" href={viewUrl} target="_blank" rel="noreferrer">
            <VisibilityIcon />
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectICard;
