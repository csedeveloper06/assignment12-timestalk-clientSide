import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorPage from '../../public/errorPage.json'


const ErrorPage = () => {
    return (
        <div className="relative w-full">
            <Lottie className='w-[40%] h-auto mx-auto' animationData={errorPage} />
            <Link to='/'><button className="absolute top-[85%] left-[40%] mx-auto 
                btn-warning bg-amber-400 w-60 h-16 rounded-2xl font-bold text-2xl">Go Home</button></Link> 
        </div>
    );
};

export default ErrorPage;