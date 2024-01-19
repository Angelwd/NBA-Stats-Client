import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../images/nbalogo.png"


const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (


    
    <nav>
      
      {!getToken() && (
        <>
        <div><img className="homelogo" src={logo} alt="logo" /></div>
        <h2>Stats Companion App </h2>
         <h4><Link to="/login">Login</Link></h4> 
          <h4><Link to="/signup">Signup</Link></h4>
        </>
      )}

      {getToken() && (
        <>
          <Link to="/profile">Profile</Link>
          <button className="btn btn-danger" onClick={logOutUser}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;


