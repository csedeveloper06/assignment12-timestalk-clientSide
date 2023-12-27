import { Helmet } from "react-helmet";
import Gallery from "../Gallery/Gallery";
import Plans from "../Plans/Plans";
import Statistics from "../Statistics/Statistics";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Times Talk | Home</title>
          </Helmet>
          <div>
            <Banner></Banner>
            <Gallery></Gallery> 
            <Plans></Plans>
            <Testimonial></Testimonial>
            <Statistics></Statistics>
          </div>
        </div>
    );
};

export default Home;