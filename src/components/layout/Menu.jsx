import { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import axios from "axios";
import { api } from "../../config";
import toast from "react-hot-toast";

function Menu({ orders, setOrders }) {
  const [foodItems, setFoodItems] = useState([]);

  const handleSelectItems = (clikedItem) => {
    const selectItem = orders.find((item) => {
      return item.id == clikedItem.id;
    });
    if (selectItem) {
      toast.error("This item already added to the list");
    } else {
      setOrders([...orders, { ...clikedItem, qty: 1 }]);
    }
  };
  useEffect(() => {
    const getMenuItems = async () => {
      const result = await axios.get(`${api}/item/all`);
      setFoodItems(result.data);
    };
    getMenuItems();
  }, []);

  return (
    <div className="main-menu-section">
      {foodItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => {
              handleSelectItems(item);
            }}
          />
        );
      })}
    </div>
  );
}

export default Menu;
