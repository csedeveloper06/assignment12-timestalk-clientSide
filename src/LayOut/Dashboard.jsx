import { NavLink, Outlet } from "react-router-dom";
import { PiUsersFill,PiArticleFill } from "react-icons/pi";
import { SiAffinitypublisher } from "react-icons/si";
// import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

       // TODO: get isAdmin value from the database
    //    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-amber-500">
                <ul className="menu mt-56">
                   <li>
                        <NavLink to='/dashboard/allusers'>
                            <PiUsersFill className="text-2xl"></PiUsersFill>
                                All Users
                        </NavLink>
                   </li>
                   <li>
                    <NavLink to='/dashboard/allarticles'>
                        <PiArticleFill className=" text-2xl"></PiArticleFill>
                        All Articles
                    </NavLink>
                   </li>
                   <li>
                    <NavLink to='/dashboard/allpublishers'>
                        <SiAffinitypublisher className="text-2xl"/>
                        All Publishers
                    </NavLink>
                   </li>
                </ul>
            </div>
            <div className="divider"></div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;