import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const alertShown = useRef(false); // Ref to track alert display

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:5000/auth/verify")
      .then((res) => {
        if (res.data.status) {
          if (!alertShown.current) {
            alert("Verification successful!");
            alertShown.current = true; // Set alertShown to true
          }
        } else {
          if (!alertShown.current) {
            alert(`Verification failed: ${res.data.message}`);
            alertShown.current = true; // Set alertShown to true
          }
          navigate('/login');
        }
      })
      .catch((error) => {
        if (!alertShown.current) {
          alert("An error occurred during verification.");
          console.error(error);
          alertShown.current = true; // Set alertShown to true
        }
        navigate('/login'); // Redirect to login on error
      });
  }, [navigate]);

  return <div>Dashboard</div>;
}

export default Dashboard;
