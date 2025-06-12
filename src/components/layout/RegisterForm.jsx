import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import "./Form.css";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";
import { api } from "../../config";
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const navitate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "" || confirmPassword === "") {
        setIsError(true);
        setIsMatch(false);
        return;
      } else if (password !== confirmPassword) {
        setIsMatch(true);
        setIsError(false);
        return;
      } else {
        setIsError(false);
        setIsMatch(false);
        await axios.post(`${api}/auth/register`, {
          email,
          password,
        });
        toast.success("User registration successfull");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navitate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormLabel>Confirm Password</FormLabel>
        <Input
          id="con-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {isError && <p>Please fill all fields</p>}
        {isMatch && <p>Confirm password not match</p>}
        <Button type="submit" colorScheme="blue" onClick={handleRegister}>
          Register
        </Button>
      </FormControl>
    </div>
  );
}

export default RegisterForm;
