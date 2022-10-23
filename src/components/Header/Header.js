import React, { useContext } from "react";
import { FaFly, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import './Header.css'

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.error(error)
    })
  }

  return (
    <div className="navbar">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <FaFly className="text-black text-3xl font-bold"></FaFly>{" "}
          <span className="text-3xl text-black">Earth Trekkers</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex mr-3">
        <ul className="menu menu-horizontal p-0 text-black font-semibold text-xl">
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          {
            user && user?.uid ?
             <li onClick={handleLogOut}><Link>Log out</Link></li>
           :
           <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
           
          }
          {
            user && user.uid ? <li>
            <img className="w-16 rounded-full" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </li> : <FaUser className="relative top-4"></FaUser>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
