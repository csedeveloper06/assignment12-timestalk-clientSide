import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";


const AllArticles = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://assignment12-auth.web.app/articles')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, [])

    console.log(cards);

    return (
        <div>
            <Helmet>
                <title>Times Talk | All Articles</title>
            </Helmet>
            <h2 className="text-4xl text-center">This is All Articles Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cards.map(card => <ArticleCard
                    key={card._id}
                    card={card}>
                    </ArticleCard>)
                }
            </div>
        </div>
    );
};

export default AllArticles;