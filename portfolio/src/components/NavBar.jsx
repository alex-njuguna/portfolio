import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled && "scrolled"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img width="70px" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center mx-auto">
            <li className="nav-item">
              <a
                className={
                  activeLink === "home" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("home")}
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "skills" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "projects" ? "nav-link active" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-brands fa-facebook-messenger fa-lg text-primary"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-brands fa-x-twitter fa-lg text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fa-brands fa-linkedin-in fa-lg text-primary"></i>
              </a>
            </li>
            <li className="">
              <a className=" btn btn-info" href="#">
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
