import { Helmet } from "react-helmet";


const MyProfile = () => {
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