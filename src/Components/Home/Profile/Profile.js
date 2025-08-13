import ScrollService from "../../../utilities/scrollService";

import './Profile.css'
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/juan-quir%C3%B3s-202344158/" target="blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Juankqm" target="blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://wa.me/50687915836?text=Hola%20Juan,%20vi%20tu%20portafolio" target="blank">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Juan Quiros</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>  Systems Engineer </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                technologies.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>

            <a href="Juan_Quiros_CV.pdf" download="Juan Quiros Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
