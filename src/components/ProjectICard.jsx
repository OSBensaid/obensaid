import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../styles/ProjectICard.css";
function ProjectICard({ image, name, description, codeUrl, viewUrl, tags }) {
  return (
    <div className="projectItem">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="projectImage"
      />
      <div className="projectDetails">
        <h1>{name}</h1>
        <div>
          {tags.map((tag, index) => (
            <span key={index}>{tag}, </span>
          ))}
        </div>
        <p>{description}</p>
        <div className="projectTags">
          <a className="tag" href={codeUrl}>
            <GitHubIcon />
            Code
          </a>
          <a className="tag" href={viewUrl}>
            <VisibilityIcon />
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectICard;
