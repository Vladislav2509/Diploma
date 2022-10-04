import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import './loginStyle.css';

const LoginTitle = "Login";
const RegistrationTitle = "Registration";

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await login(email, password);
    navigate("/all_films");
  };


  return (
    <div className="container">
      <div className="mainWrapper">
        <div className="registrationNavigation">
          <div className="loginTitleButton" onClick={() => { navigate("/login") }}>
            {LoginTitle}
          </div>

          <div className="registrationTitleButton" onClick={() => { navigate("/registration") }}>
            {RegistrationTitle}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="emailPasswordWrapper">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e: { target: { value: React.SetStateAction<string>; } }) => setEmail(e.target.value)}
            />
          </div>

          <div className="emailPasswordWrapper">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Your Password"
              type="password"
              id="password"
              value={password}
              onChange={(e: { target: { value: React.SetStateAction<string>; } }) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotPasswordWrapper">
            <div className="forgotPasswordButton" onClick={() => { navigate("/reset_password") }}>
              Forgot password?
            </div>
          </div>

          <input className="submitInputLogin" type="submit" />

        </form>
      </div>
    </div>
  );
}

