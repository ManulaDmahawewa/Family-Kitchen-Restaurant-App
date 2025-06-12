import "./AdminOrders.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../config";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrdersData = async () => {
    const result = await axios.get(`${api}/item/orders`);
    console.log("orders details:", result.data);

    setOrders(result.data);
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const handleComplete = async (clickedOrder) => {
    await axios.post(`${api}/item/order-complete/${clickedOrder.id}`, {});

    fetchOrdersData();
  };

  return (
    <div className="order-table-container">
      <h2>Orders</h2>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Order Code</Th>
              <Th>Item</Th>
              <Th className="qty" isNumeric>
                Quantity
              </Th>
              <Th isNumeric>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => {
              return (
                <Tr key={order.id}>
                  <Td>{order.code}</Td>
                  <Td>
                    {order.items.map((item, index) => {
                      return <div key={index}>{item.name}</div>;
                    })}
                  </Td>
                  <Td isNumeric>
                    {" "}
                    {order.items.map((item, index) => {
                      return (
                        <div key={index} className="order-qty">
                          {item.qty}
                        </div>
                      );
                    })}
                  </Td>
                  <Td isNumeric>{order.total}</Td>
                  <Td>
                    {order.complete ? (
                      <Badge colorScheme="green">Completed</Badge>
                    ) : (
                      <Button
                        colorScheme="green"
                        onClick={() => {
                          handleComplete(order);
                        }}
                      >
                        Not Complete
                      </Button>
                    )}
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

export default AdminOrders;
