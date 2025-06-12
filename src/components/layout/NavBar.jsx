import { Link } from "react-router";
import "./NavBar.css";
import { Button } from "@chakra-ui/react";
import { useGlobal } from "../../GlobalContext";

function NavBar() {
  const { user } = useGlobal();
  return (
    <div className="navbar-main">
      <div className="logo-section">
        <img src="/images/logo2.png" alt="logo" />
        <h1>Family Kitchen Restaurant</h1>
      </div>
      <div className="buttons-section">
        {!user ? (
          <>
            <Link to="/register">
              <Button colorScheme="yellow" variant="outline">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="blue" variant="outline">
                Login
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/admin">
            <Button colorScheme="blue">Go To Dashboard</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
