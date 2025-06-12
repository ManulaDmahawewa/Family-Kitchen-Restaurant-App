import { Link } from "react-router";

const items = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Menu Item",
    path: "/admin/items",
  },
  {
    id: 3,
    name: "Orders",
    path: "/admin/orders",
  },
];

function AdminNavBar() {
  return (
    <div className="sideNavbar-section">
      {items.map((item) => {
        return (
          <Link className="sidebar-item" key={item.id} to={item.path}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default AdminNavBar;
