import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useEffect } from "react";
import { data } from "autoprefixer";
import PublisherCard from "../../PublisherCard/PublisherCard";


const Publishers = () => {

    const [ publishers, setPublishers ] = useState([]);

    useEffect(()=>{
        fetch('https://assignment12-timestalk-server.vercel.app/publishers')
        .then(res => res.json())
        .then(data => setPublishers(data))
    }, [])

    console.log(publishers);

    return (
        <div>
            <SectionTitle
                subHeading="Publishers for the articles"
                heading="Publishers"
            >
            </SectionTitle>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {
                    publishers.map(publisher => <PublisherCard
                        key={publisher._id}
                        publisher={publisher}
                    ></PublisherCard>)
                }
            </div>

        </div>
    );
};

export default Publishers;