import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GlobalContext from "./GlobalContext";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AdminMenuItem from "./pages/AdminMenuItem";
import AdminOrders from "./pages/AdminOrders";
import AddItem from "./pages/additem";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <GlobalContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/items"
              element={
                <AdminLayout>
                  <AdminMenuItem />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminLayout>
                  <AdminOrders />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/items-form"
              element={
                <AdminLayout>
                  <AddItem />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/items-form/:id"
              element={
                <AdminLayout>
                  <AddItem />
                </AdminLayout>
              }
            />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ChakraProvider>
  );
}

export default App;
