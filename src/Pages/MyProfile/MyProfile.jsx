import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const MyProfile = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, [])

    console.log(cards);
    return (
        <div>
             <Helmet>
                <title>Times Talk | My Profile</title>
            </Helmet>
            <h2 className="text-3xl">This is My Profile</h2>
        </div>
    );
};

export default MyProfile;