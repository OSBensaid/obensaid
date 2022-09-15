import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hello I'm
          <div className="name">Oussama Bensaid</div>
        </h2>
        <div className="prompt">
          <p>A software developer with passion for learning and creating.</p>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/oussama-bensaid"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:osbensaid@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              href="https://github.com/OSBensaid"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="scrollContainer">
            <div className="crollDown"></div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, Redux, HTML, CSS, SASS, NPM, BootStrap,
              MaterialUI, Chakra UI, Ant Design, Yarn, StyledComponents,
              StoryBook
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Axios, NestJS, TypeORM, MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
