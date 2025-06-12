import "./AdminMenuItem.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { api } from "../config";
import { Link } from "react-router";

function AdminMenuItem() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchAllMenuItems = async () => {
      const result = await axios.get(`${api}/item/all`);
      setMenuItems(result.data);
    };
    fetchAllMenuItems();
  }, []);

  return (
    <div className="admin-menu-item-section">
      <h2>Menu Items</h2>
      <Link to="/admin/items-form">
        <Button leftIcon={<FaPlus />} colorScheme="blue" variant="outline">
          Add Items
        </Button>
      </Link>
      <TableContainer>
        <Table variant="simple" colorScheme="cyan">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
              <Th>Image</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {menuItems.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td isNumeric>RS. {item.price}</Td>
                  <Td>
                    <img
                      className="itemImage"
                      src={`${api}${item.image}`}
                    ></img>
                  </Td>
                  <Td>
                    <Link to={`/admin/items-form/${item.id}`}>
                      <Button colorScheme="yellow" variant="outline">
                        Edit
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminMenuItem;
