import { Helmet } from "react-helmet";
import Hero from "../Shared/Hero/Hero";
import subscriptionImage from '../../../public/assets/subscription2.avif'

const SubsCription = () => {
    return (
        <div>
             <Helmet>
                <title>Times Talk | Subscriptions</title>
            </Helmet>
            <Hero img={subscriptionImage} title="Payment"></Hero>
            <h1 className="text-3xl">Subscription Area</h1>
        </div>
    );
};

export default SubsCription;