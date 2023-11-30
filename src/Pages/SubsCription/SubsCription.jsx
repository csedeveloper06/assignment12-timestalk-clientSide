import { Helmet } from "react-helmet";
import Hero from "../Shared/Hero/Hero";
import subscriptionImage from '../../../public/assets/subscription3.jpg'

const SubsCription = () => {
    return (
        <div>
             <Helmet>
                <title>Times Talk | Subscriptions</title>
            </Helmet>
            <Hero img={subscriptionImage}></Hero>
        </div>
    );
};

export default SubsCription;