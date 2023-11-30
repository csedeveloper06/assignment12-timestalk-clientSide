import { Helmet } from "react-helmet";
import Gallery from "../Gallery/Gallery";
import Plans from "../Plans/Plans";
import Statistics from "../Statistics/Statistics";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Times Talk | Home</title>
          </Helmet>
          <h2 className="text-2xl">This is home</h2> 
          <Gallery></Gallery> 
          <Plans></Plans>
          <Testimonial></Testimonial>
          <Statistics></Statistics>
        </div>
    );
};

export default Home;