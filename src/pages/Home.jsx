import EmailIcon from "@mui/icons-material/Email";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef } from "react";
import "../styles/Home.css";
function Home() {
  const skillLocation = useRef(null);
  const topLocation = useRef(null);

  const scrollToSection = (elementRef) => {
    window.history.replaceState({}, document.title);
    if (elementRef.current.className === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="home" ref={topLocation}>
      <div className="about">
        <h2>
          Hello I'm
          <div className="name">Oussama Bensaid</div>
        </h2>
        <div className="prompt">
          <p>A software developer with passion for learning and creating.</p>
          <div className="links">
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
          </div>
          <button
            onClick={() => {
              scrollToSection(skillLocation);
            }}
            className="navigationBtn"
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      <div className="skills" ref={skillLocation}>
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
        <button
          onClick={() => {
            scrollToSection(topLocation);
          }}
          className="navigationTop"
        >
          <ExpandLessIcon />
        </button>
      </div>
    </div>
  );
}

export default Home;
