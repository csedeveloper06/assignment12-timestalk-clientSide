import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import { SiAffinitypublisher } from "react-icons/si";
import { BsCartFill } from "react-icons/bs";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  // const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-600">
        <ul className="menu px-4 py-24">
          {isAdmin ? 
            <>
              <li>
                <NavLink to="/dashboard/adminallarticles">
                  <FaList></FaList>
                  Admin All Articles
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allpublishers">
                  <SiAffinitypublisher />
                  Add Publishers
                </NavLink>
              </li>
            </>
           : 
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/myarticles">
                  <BsCartFill className="text-2xl"></BsCartFill>
                  My Articles
                </NavLink>
              </li>
            </>
          }

          {/* Shared nav links */}
          <div className="divider"></div>
          {
            <>
              <li>
                <NavLink to="/dashboard/payment">
                  {/* <BsCartFill className="text-2xl"></BsCartFill> */}
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  PaymentHistory
                </NavLink>
              </li>
            </>
          }
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
