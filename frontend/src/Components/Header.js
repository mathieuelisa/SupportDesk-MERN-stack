import { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/Auth/authSlice.js";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {}, []);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    console.log("remove user on localstorage");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>Support Desk</Link>
      </div>
      <ul>
        {!user ? (
          <>
            <li>
              <Link to={"/register"}>
                <FaUser />
                Register
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt />
                Login
              </Link>
            </li>{" "}
          </>
        ) : (
          <>
            <li>
              <button className="btn" onClick={handleLogout}>
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
