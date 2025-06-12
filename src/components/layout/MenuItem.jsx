import "./MenuItem.css";
import { api } from "../../config";

function MenuItem({ item, onClick }) {
  return (
    <div className="menuItem-container" onClick={onClick}>
      <img src={`${api}${item.image}`} alt="Food-image" />
      <h5>{item.name}</h5>
      <p>Rs. {item.price}</p>
    </div>
  );
}

export default MenuItem;
