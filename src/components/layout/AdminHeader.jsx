import { Avatar, Button } from "@chakra-ui/react";
import { useGlobal } from "../../GlobalContext";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { api } from "../../config";

function AdminHeader() {
  const { user, setUser } = useGlobal();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post(`${api}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  };
  return (
    <div className="Admin-header-section">
      <h1>Admin Dashboard</h1>
      <div className="btn-section">
        {user && (
          <div className="email-section">
            <Avatar name={user.email} size="sm" />
            {user.email}
          </div>
        )}
        <Link to="/">
          <Button colorScheme="red" variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminHeader;
