import { useState } from "react";
import "./Form.css";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import toast from "react-hot-toast";
import axios from "axios";
import { useGlobal } from "../../GlobalContext";
import { api } from "../../config";
import { useNavigate } from "react-router";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useGlobal();
  const navigate = useNavigate();

  console.log(user);

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        `${api}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      setUser(result.data);
      toast.success("Login successfull");
      setEmail("");
      setPassword("");
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("incorrect user name or password");
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </FormControl>
    </div>
  );
}

export default LoginForm;
