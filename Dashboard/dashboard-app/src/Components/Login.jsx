import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@mui/material";

import axios from "../api/axios";
import { setStoredUser } from "../utils/auth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", formData, {
        withCredentials: true,
      });

      setMessage(res.data.message);
      setStoredUser(res.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Paper
        elevation={6}
        className="p-4"
        style={{ maxWidth: 400, width: "100%" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Log In
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Access your dashboard
        </Typography>

        {message && (
          <div className="alert alert-info text-center py-2" role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#1976d2" }}
          >
            Log In
          </Button>
        </form>

        <Typography variant="body2" align="center" className="mt-3 text-muted">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-decoration-none text-primary">
            Sign up here
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}
