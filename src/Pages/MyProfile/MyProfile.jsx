
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";


const MyProfile = () => {
    
    const { user } = useAuth();

    return (
        <div>
             <Helmet>
                <title>Times Talk | My Profile</title>
            </Helmet>
            <div className="card w-96 bg-base-100 shadow-xl py-20">
                <div className="card-body">
                    <img src={user.photoURL} alt="" />
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;