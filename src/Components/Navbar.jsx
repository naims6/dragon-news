import React, { use } from "react";
import userIcon from "../assests/user.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { userInfo, logoutUser } = use(AuthContext);
  const navigate = useNavigate();
  // log out user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("logout successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container2 flex justify-between items-center mb-16 sticky top-0 z-10 bg-white shadow">
      <div>
        <h2>{userInfo?.email}</h2>
        <h2>{userInfo?.displayName}</h2>
      </div>
      <nav>
        <ul className="flex gap-10">
          <li className="cursor-pointer text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-gray-500">About</li>
          <li className="cursor-pointer text-gray-500">Carrer</li>
        </ul>
      </nav>
      <div className="flex items-center gap-2.5">
        <img src={userIcon} alt="userIcon" />
        {userInfo ? (
          <Link
            onClick={handleLogout}
            className="btn bg-gray-800 text-white px-10"
          >
            Logout
          </Link>
        ) : (
          <Link className="btn bg-gray-800 text-white px-10" to={"/auth"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
