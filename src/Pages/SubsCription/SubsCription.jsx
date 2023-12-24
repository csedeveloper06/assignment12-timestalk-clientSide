import { Helmet } from "react-helmet";
import Hero from "../Shared/Hero/Hero";
import subscriptionImage from '../../../public/assets/subscription2.avif'
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const SubsCription = () => {

    const [ cart ] = useCart();

    return (
        <div>
             <Helmet>
                <title>Times Talk | Subscriptions</title>
            </Helmet>
            <Hero img={subscriptionImage} title="Payment"></Hero>
            <div className="dropdown dropdown-bottom lg:ml-[500px] mt-10">
                <div tabIndex={0} role="button" className="btn m-1">Subscription Period</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>1 Minute</a></li>
                    <li><a>5 Days</a></li>
                    <li><a>10 Days</a></li>
                </ul>
            </div>
            <div>
            {
                cart.length ?  
                <Link to='/dashboard/payment'>
                     <button className="btn btn-warning my-10 flex items-center
                    w-3/4 ml-40 text-2xl font-bold">Subscribe</button>
                </Link>
                :
                <button disabled className="btn btn-warning my-10 flex items-center
                w-3/4 ml-40 text-2xl font-bold">Subscribe</button>
            }
            </div>
        </div>
    );
};

export default SubsCription;