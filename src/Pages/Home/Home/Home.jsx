import Gallery from "../Gallery/Gallery";
import Plans from "../Plans/Plans";
import Statistics from "../Statistics/Statistics";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
          <h2 className="text-2xl">This is home</h2> 
          <Gallery></Gallery> 
          <Statistics></Statistics>
          <Plans></Plans>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;