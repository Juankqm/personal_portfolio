
import "./AboutMe.css";
import { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";

const AboutMe = (props) => {

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => { fadeInSubscription.unsubscribe(); };
  }, [props.id])


  const SCREEN_CONST = {
    description:
      "I’m a Systems Engineering graduate with 4 years of experience as a Programmer Analyst, passionate about programming and continuously expanding my skill set through self-directed learning. Currently pursuing a Master’s degree in Project Management to strengthen my leadership and strategic planning capabilities.",
    highlights: {
      bullets: [
        "Systems Engineer",
        "Full Stack Developer",
        ".Net Core",
        "HTML, CSS, JavaScript, ReactJs",
        "RESTful APIs",
        "Microsoft SQL Server",
        "Workflow Applications"
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONST.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me </button>
              <a href="Juan_Quiros_CV.pdf" download="Juan Quiros Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
