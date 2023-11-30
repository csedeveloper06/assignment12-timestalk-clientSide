import { Helmet } from "react-helmet";
import {  useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const articles = useLoaderData();

    const {_id} = useParams();
    const article = articles.find(article => article._id === _id);
    
    const {title, image, description,tag,publisher } = article;
    console.log(article);

    return (
        <div className="card card-side bg-base-100 shadow-xl py-16">
            <Helmet>
                <title>Times Talk | Article Details</title>
            </Helmet>
            <figure><img className="w-80 h-80" src={image} /></figure>
            <div className="card-body w-52">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{tag}</p>
                <p>{publisher}</p>
                <div className="card-actions justify-start">
                      <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
      </div>
    );
};

export default CardDetails;