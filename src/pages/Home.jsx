import { useState } from "react";
import Menu from "../components/layout/Menu";
import NavBar from "../components/layout/NavBar";
import Order from "../components/layout/Order";
import "./Home.css";

function Home() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="main">
      <div className="header-section">
        <NavBar />
      </div>
      <div className="middle-section">
        <Menu orders={orders} setOrders={setOrders} />
        <Order orders={orders} setOrders={setOrders} />
      </div>
    </div>
  );
}

export default Home;
