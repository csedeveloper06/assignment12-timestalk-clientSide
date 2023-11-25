import Gallery from "../Gallery/Gallery";
import Plans from "../Plans/Plans";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
          <h2 className="text-2xl">This is home</h2> 
          <Gallery></Gallery> 
          <Plans></Plans>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;