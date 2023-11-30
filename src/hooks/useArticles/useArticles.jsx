import { useEffect, useState } from "react";


const useArticles = () => {

    const [articles, setArticles] = useState([]);
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/articles')
            .then(res => res.json())
            .then(data => {
                setArticles(data);
                setLoading(true);
            });
    }, [])

    return [articles, loading]
}

export default useArticles;