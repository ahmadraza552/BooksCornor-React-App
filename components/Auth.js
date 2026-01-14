import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({ name: "",email: "", password: ""});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!isLogin) {
      // SIGNUP
      const emailExists = users.some(u => u.email === user.email);
      if (emailExists) {
        alert("Email already exists");
        return;
      }
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful");
      setIsLogin(true);
    } else {
      // LOGIN
      const foundUser = users.find(
        u => u.email === user.email && u.password === user.password
      );

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        alert("Login successful");
        navigate("/home");
      } else {
        alert("Wrong email or password");
      }
    }

    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-white"
        style={{ width: "350px" }}
      >
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Signup"}</h2>

        {!isLogin && (
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
              value={user.name}
              required
            />
          </div>
        )}

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          {isLogin ? "Login" : "Signup"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-primary"
          style={{ cursor: "pointer" }}
        >
          {isLogin ? "Create a new account" : "Already have an account?"}
        </p>
      </form>
    </div>
  );
};

export default Auth;
