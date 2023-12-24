import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ArticleCard = ({card}) => {

    const{_id,title,image,tag,description,publisher,type} = card;

    return (
        <div className="card card-compact w-[300px] h-[450px] bg-base-100 shadow-xl my-16">
            <Helmet>
                <title>Times Talk | Card</title>
            </Helmet>
            <figure><img className="w-[100%] h-[100%]" src={image}  /></figure>
            <div className="card-body">
            <h2 className="card-title text-red-700">{title.slice(0,45)}</h2>
            <p className="text-gray-700 opacity-60 text-xs text-justify">{description.slice(0,150)}</p>
            <p className="text-2xl font-bold text-red-500">{tag}</p>
            <p className="text-lg font-semibold text-red-500">{publisher}</p>
            <div className=" justify-center">
                <Link to={`/carddetails/${_id}`}>
                   <button className="btn btn-warning w-full  mb-6 text-2xl font-bold text-white">Details</button>
                </Link>
            </div>
        </div>
      </div>
    );
};

export default ArticleCard;