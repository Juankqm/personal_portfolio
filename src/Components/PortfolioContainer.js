import { TOTAL_SCREENS } from "../utilities/commonUtils";
import Footer from "./Footer/Footer.js";

const PortfolioContainer = () => {   
    
    const mapAllScreens = () => {
        return TOTAL_SCREENS.map((screen) => 
                screen.component ? (
                   <screen.component 
                        screenName={screen.screen_name} 
                        key={screen.screen_name}
                        id={screen.screen_name}  
                    />
                    ) : (
                        <>
                         <div key={screen.screen_name}></div>
                            <Footer />
                        </>
                   
            )
        );
    };
     return <div className="portfolio-container">{mapAllScreens()}</div>

}
export default PortfolioContainer;