import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@mui/material";

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
      const res = await axios.post("http://localhost:8080/login", formData, {
        withCredentials: true,
      });

      setMessage(res.data.message);

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to dashboard
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Login failed. Please check your credentials.");
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
          Don't have an account?{" "}
          <a href="/signup" className="text-decoration-none text-primary">
            Sign up here
          </a>
        </Typography>
      </Paper>
    </div>
  );
}
