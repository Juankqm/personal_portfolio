import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/scrollService";

import WaveBackground from '../../assets/Home/shape-bg.png'
export default function Footer() {
  return (
    <>
      <div className="scroll-container">
        <button className="btn-scroll" onClick={() => ScrollService.scrollHandler.scrollToHome()} >
          {/* {" "} */}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
        <div className='footer-parent-img'>
          &nbsp; 
{/* <img src= {WaveBackground} alt='no internet connection'></img>  */}
        </div>
    </>

  );
}


