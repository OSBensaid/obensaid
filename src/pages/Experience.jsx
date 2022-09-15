import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import expriences from "../helpers/experience";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="timeline">
        {expriences.map((exprience) => (
          <div className="experienceWrapper" key={exprience.id}>
            <div className="experienceCard">
              <div className="experienceIcon">
                {exprience.icon === "work" ? <WorkIcon /> : <SchoolIcon />}
              </div>
              <div className="experienceDetail">
                <div className="experienceTitle">
                  <h2>{exprience.title}</h2>
                  <span>{exprience.date}</span>
                </div>
                <div className="exprienceDesc">{exprience.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
