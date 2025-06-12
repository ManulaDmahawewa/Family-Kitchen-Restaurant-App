import { Button } from "@chakra-ui/react";
import "./Order.css";
import OrderItem from "./OrderItem";
import axios from "axios";
import { api } from "../../config";
import toast from "react-hot-toast";

function Order({ orders, setOrders }) {
  const total = orders.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleQtyIncrement = (clickedOrderItem) => {
    const changeQty = orders.map((item) => {
      return item.id === clickedOrderItem.id
        ? { ...item, qty: item.qty + 1 }
        : item;
    });

    setOrders(changeQty);
  };

  const handleQtyDecriment = (clickedOrderItem) => {
    const changeQty = orders.map((item) => {
      return item.id === clickedOrderItem.id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item;
    });

    setOrders(changeQty);
  };

  const handleDelete = (clickedOrderItem) => {
    const newOrders = orders.filter((item) => {
      return item.id !== clickedOrderItem.id;
    });
    setOrders(newOrders);
  };

  const handlePlaceOrder = async () => {
    try {
      await axios.post(`${api}/item/place-order`, { items: orders });
      toast.success("Order Placed Successfully");
      setOrders([]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="main-order-section">
      <h1>Your Order </h1>

      {orders.map((item) => {
        return (
          <OrderItem
            key={item.id}
            item={item}
            handleQtyIncrement={() => {
              handleQtyIncrement(item);
            }}
            handleQtyDecriment={() => {
              handleQtyDecriment(item);
            }}
            handleDelete={() => {
              handleDelete(item);
            }}
          />
        );
      })}
      {orders.length > 0 && (
        <>
          <h2>Total :{total}</h2>
          <div className="btn-PlaceOrder">
            <Button colorScheme="blue" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
