import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { Register } from '../components/auth/signUp';

export const RegisterContext = React.createContext();

const RegisterProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("60be297bc1ce0378e4564f2a");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const state = {
    setFirstName,
    setLastName,
    setAge,
    setCountry,
    setEmail,
    setPassword,
    setRole,
    addNewUser,
    message,
  };

  async function addNewUser() {
    try {
      const newUser = { firstName, lastName, age, country, email, password, role };
      //client validation
      if (
        firstName === "" ||
        lastName === "" ||
        country === "" ||
        age === undefined ||
        email === "" ||
        password === ""
      ) {
        setMessage("Please fill all the info");
      } else {
        await axios.post("/register", newUser).then((response) => {
          if (response.status == 200) {
            setMessage("The user has been created successfully ");
            setTimeout(function () {
              history.push("/Login");
            }, 2000);
          } else {
            setMessage("Error happened while register, please try again");
          }
        });
      }
    } catch (error) {
      setMessage("Error 5000 happened while register, please try again");
      throw error;
    }
  }

  return <RegisterContext.Provider value={state}>{props.children}</RegisterContext.Provider>;
};

export default RegisterProvider;
