

const PublisherCard = ({publisher}) => {

    const {  publishersName, image } = publisher;
    console.log(publisher);

    return (
        <div className="card w-60 h-52 bg-base-100 shadow-xl image-full">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{publishersName}</h2>
            <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
            </div>
      </div>
    );
};

export default PublisherCard;