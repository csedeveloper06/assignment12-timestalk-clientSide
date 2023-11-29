import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
// import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

  const navLinks = (
    <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li> 
          <NavLink to='/allarticles'>All Articles</NavLink>
        </li>
        <li>
          <NavLink to='/addarticles'>Add Articles</NavLink>
        </li>
        <li>
          <NavLink to='/subscription'>Subscription</NavLink>
        </li>
        <li>
          <NavLink to='/myarticles'>My Articles</NavLink>
        </li>
        <li>
          <NavLink to='/premiumarticles'>Premium Articles</NavLink>
        </li>
        {
          isAdmin ? <>
            <li>
              <NavLink to='/dashboard' className='mr-2'>Dashboard</NavLink>
            </li>
          </> : ' '
        }
       
{/* 
      {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      } */}

      {/* {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
      }  */}

      {/* <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
      </li> */}

      {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-secondary">LogOut</button>
            </> :
            <>
                <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                
            </>
     }

    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
        <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/hK57GmH/globe-logo.jpg" />   
                </div>
                <a className="btn btn-ghost text-xl">TimesTalk</a>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end avatar">
          <div className="w-24 rounded-full">
            {
                 user? 
                 <>
                  <Link to='/myprofile'>
                      <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                  </Link>
                 </> 
                 :
                 <>
                    <Link to='/login'>
                        <img src="https://i.ibb.co/x3RPF21/icon.png"/>
                    </Link>
                 </>
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
