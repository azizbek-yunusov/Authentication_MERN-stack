// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { id } = useParams();
  const navigate = useNavigate();

  // const fetchData = async () => {
  //   const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`);
  //   setTitle(data.travel.title);
  //   setDescr(data.travel.descr);
  //   setImage(data.travel.image);
  // };

  const regHandler = async (e) => {
    e.preventDefault();
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          localStorage.setItem("token", data.user._id);
          toast.success("Login Successfully!");
          navigate("/");
          window.location.reload();
        }
      });
  };
  return (
    <form onSubmit={regHandler}>
      <h4 className="">Sign In</h4>
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

export default Login;
