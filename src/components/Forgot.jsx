import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        { email }
      );
      if (response.data.status) {
        alert("An email has been sent to your account with instructions to reset your password.");
        navigate("/login");
      } 
      // console.log(response.data);
      else {
        alert("Failed to send reset password email: " + response.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="signup-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Forgot;
