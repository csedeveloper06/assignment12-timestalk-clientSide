import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

    return (
        <div className="py-20">
           <SectionTitle heading="Payment" subHeading="Please Pay to read"></SectionTitle>
           <div>
                <Elements  stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
                {/* <button className="btn btn-warning w-44 lg:ml-[330px]">Pay</button> */}
           </div>
        </div>
    );
};

export default Payment;