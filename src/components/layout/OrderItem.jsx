import { Button } from "@chakra-ui/react";
import "./OrderItem.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { api } from "../../config";

function OrderItem({
  item,
  handleQtyIncrement,
  handleQtyDecriment,
  handleDelete,
}) {
  return (
    <div className="orderItem-container">
      <img src={`${api}${item.image}`} alt="food-image" />
      <div className="itemDetail-container">
        <h3>{item.name}</h3>
        <p>
          {item.price} x {item.qty}
        </p>
        <div className="btn-section">
          <Button colorScheme="blue" onClick={handleQtyIncrement}>
            <FaPlus />
          </Button>
          <Button colorScheme="yellow" onClick={handleQtyDecriment}>
            <FaMinus />
          </Button>
        </div>
      </div>
      <div className="delete-btn-section">
        <Button colorScheme="red" onClick={handleDelete}>
          <RiDeleteBinLine />
        </Button>
      </div>
    </div>
  );
}

export default OrderItem;
