import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/Navbar.css";
function Navbar() {
  const [taggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  return (
    <div className="navbar" id={taggleMenu ? "open" : "close"}>
      <div className="navbar__wrapper">
        <div className="brand-logo">
          <Link to="/">
            <h3>OBENSAID</h3>
          </Link>
        </div>
        <div className="toggleButton">
          <button onClick={() => setToggleMenu((prev) => !prev)}>
            {taggleMenu ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
