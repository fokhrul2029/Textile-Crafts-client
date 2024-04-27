import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextApi/AuthProvider";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/craft-items">Art & craft</NavLink>
      </li>
      <li>
        <NavLink to="/add-craft">Add Craft</NavLink>
      </li>
      <li>
        <NavLink to="/craft-list">My Art & Craft</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-slate-100 mb-10">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-1">
              <img
                className="border-2 rounded-full border-orange-400 p-[2px] w-11 h-11"
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
              />
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
