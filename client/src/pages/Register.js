// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const regHandler = async (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Register Successfully!");
          navigate("/login");
        }
      });
  };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  console.log(name);
  console.log(email);
  console.log(password);
  return (
    <form onSubmit={regHandler}>
      <h4 className="">Sign Up</h4>
      <div className="from-floating mb-3 mt-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Register;
