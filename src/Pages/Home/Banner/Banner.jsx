import { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {

    const [ trendingArticles, setTrendingArticles ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(res => res.json())
            .then(data => setTrendingArticles(data))
    }, [])



    // const { _id,image,views } = trendingArticles

    console.log("The trending articles in banner component:",trendingArticles);

    return (
      
            <div className="p-5">
                <Carousel className="mt-8">
                    {
                        trendingArticles
                                .sort((a,b)=> a?.views > b?.views? -1 : 1 )
                                .slice(0,6 )
                                .map((trendingArticle) => (
                                    <div key={trendingArticle._id}>
                                        <img  src={ trendingArticle?.image } />
                                    </div>
                                ))
                    }
                  </Carousel>
            </div>   
    );
};

export default Banner;