import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import SMHeader from "./smHeader";
import {
  API_Login_URL,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD,
} from "../constants";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else if (
      formData.email === DEFAULT_ADMIN_EMAIL &&
      formData.password === DEFAULT_ADMIN_PASSWORD
    ) {
      try {
        const res = await axios.post(
          API_Login_URL,
          formData
        );
        localStorage.setItem("token", res.data.token);
        alert("API Login Successful!");
        navigate("/dashboard");
      } catch (error) {
        alert("API Login Failed!");
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <SMHeader />
      <div className="flex items-center justify-center h-screen bg-gray-200 font-serif">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login
          </h2>
          <form
            onSubmit={handleLogin}
            className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded">
              Login
            </button>
          </form>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}>
              Signup
            </span>
          </p>
          <p className="text-center mt-3 text-gray-400">Developed by Manash Baruah</p>
        </div>
      </div>
    </>
  );
};

export default Login;
