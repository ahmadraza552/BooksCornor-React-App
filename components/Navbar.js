import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">My App</Link>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

        {!isLoggedIn ? (
          <div>
            {/* <Link className="btn btn-outline-success m-2" to="/login">Login</Link>
            <Link className="btn btn-outline-success m-2" to="/signup">Signup</Link> */}
          </div>
        ) : (
          <button onClick={handleLogout} className="btn btn-success">
            Logout
          </button>
        )}
      </div>
    </div>
  </nav>
);
}
export default Navbar;
