import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ArticleCard = ({card}) => {

    const{_id,title,image,tag,description,publisher,type} = card;

    return (
        <div className="card card-compact w-[300px] h-[500px] bg-base-100 shadow-xl my-16">
            <Helmet>
                <title>Times Talk | Card</title>
            </Helmet>
            <figure><img src={image}  /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description.slice(0,250)}</p>
            <div className="card-actions justify-end">
                <Link to={`/carddetails/${_id}`}>
                   <button className="btn btn-primary w-full mb-6">Details</button>
                </Link>
            </div>
            </div>
      </div>
    );
};

export default ArticleCard;