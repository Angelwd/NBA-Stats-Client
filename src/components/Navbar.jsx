import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import 'bootstrap/dist/css/bootstrap.min.css'


const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (


    
    <nav>
      
      {!getToken() && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
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


