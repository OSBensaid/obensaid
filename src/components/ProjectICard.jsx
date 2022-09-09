import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../styles/ProjectICard.css";
function ProjectICard({ image, name }) {
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
        <p>
          DevMemphis is a general purpose user group for software developers in
          Memphis TN. George started DevMemphis in 2018 with several other user
          group leaders with the goal of accommodating a more diverse range of
          topics and formats.
        </p>
        <div className="projectTags">
          <span className="tag">
            <GitHubIcon />
            Code
          </span>
          <span className="tag">
            <VisibilityIcon />
            Website
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectICard;
