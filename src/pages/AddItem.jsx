import { useEffect, useState } from "react";
import "./AddItem.css";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { api } from "../config";

import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios.get(`${api}/item/${param.id}`);
      const item = result.data;
      setName(item.name);
      setPrice(item.price);
      setImage(item.image);
    };
    if (param.id) {
      fetchItem();
    }
  }, [param.id]);

  const handleupload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios.post(`${api}/upload`, formData);
    setImage(result.data.path);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${api}/item/add`, { name, price, image });
      toast.success("Item added successfully");
      navigate("/admin/items");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`${api}/item/edit/${param.id}`, { name, price, image });
      toast.success("Item updated successfully");
      navigate("/admin/items");
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  return (
    <div className="items-form">
      <h2>{!param.id ? "Add Item" : "Edit Item"}</h2>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormLabel>Price</FormLabel>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
        />
        <FormLabel>Image</FormLabel>
        <Input id="image" type="file" onChange={handleupload} />
        {image && <img src={`${api}${image}`} alt="" />}
        {!param.id ? (
          <>
            <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
              Add Item
            </Button>
          </>
        ) : (
          <Button type="submit" colorScheme="blue" onClick={handleEdit}>
            Edit Item
          </Button>
        )}
      </FormControl>
    </div>
  );
}

export default AddItem;
