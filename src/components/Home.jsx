import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          alert("Logout successful!");
          navigate("/login");
        } else {
          alert("Logout failed. Please try again.");
        }
      })
      .catch((err) => {
        alert("An error occurred during logout.");
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Home</h3>
      <Link to="/dashboard">Dash</Link>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
