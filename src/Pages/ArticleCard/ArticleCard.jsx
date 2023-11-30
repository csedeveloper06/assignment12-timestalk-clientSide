

const ArticleCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={} /></figure>
            <div className="card-body">
                <h2 className="card-title">{}</h2>
                <p>{}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
      </div>
    );
};

export default ArticleCard;