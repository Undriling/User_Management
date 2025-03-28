import { useState } from "react";
import { useNavigate } from "react-router";
import SMHeader from "./smHeader";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <>
      <SMHeader />
      <div className="flex items-center justify-center h-screen bg-gray-200 font-serif">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Signup
          </h2>
          <form
            onSubmit={handleSignup}
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
              className="w-full p-2 bg-blue-500 text-white rounded">
              Signup
            </button>
          </form>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
