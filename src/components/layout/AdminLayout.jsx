import "./AdminLayout.css";
import { useGlobal } from "../../GlobalContext";
import AdminHeader from "./AdminHeader";
import AdminNavBar from "./AdminNavBar";
import { Navigate } from "react-router";
import LoadingIcon from "./LoadingIcon";

function AdminLayout({ children }) {
  const { user, isLoading } = useGlobal();
  console.log("user,user:", user);

  if (isLoading) {
    return <LoadingIcon />;
  }

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div className="adminLayout-section">
      <AdminHeader />
      <div className="main-panel">
        <AdminNavBar />
        <div className="page-loading-section"> {children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
