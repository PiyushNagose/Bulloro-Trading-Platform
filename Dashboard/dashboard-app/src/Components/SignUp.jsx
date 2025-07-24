import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
      const createdAt = new Date();
      const res = await axios.post(
        "http://localhost:8080/signup",
        { ...formData, createdAt },
        { withCredentials: true }
      );
      setMessage(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <Paper
        elevation={4}
        className="p-4"
        style={{ width: "100%", maxWidth: "500px", borderRadius: "20px" }}
      >
        <Typography variant="h4" className="text-center text-primary mb-2">
          Create Account
        </Typography>
        <Typography variant="body2" className="text-center text-muted mb-3">
          Sign up to access your dashboard
        </Typography>

        {message && (
          <div className="alert alert-info text-center py-2" role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Box className="mb-3">
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>

          <Box className="mb-3">
            <TextField
              fullWidth
              type="text"
              name="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Box>

          <Box className="mb-4">
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="mb-3"
            style={{ backgroundColor: "#1976d2" }}
          >
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" align="center" className="mt-3">
          Already have an account?
          <a href="/login" className="text-decoration-none text-primary">
            Login here
          </a>
        </Typography>
      </Paper>
    </div>
  );
}
