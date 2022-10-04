import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../hooks/auth.service";

import './RegistrationStyle.css'


export function Registration(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await register(username, email, password);
    navigate("/registrationConfirmation");

  };
  return (
    <div className="containerRegistration">
      <div className="mainWrapperRegistration">
        <div className="registrationNavigation2">
          <div className="loginTitleButton2"
            onClick={() => {
              navigate("/login");
              setOpen(!open);
            }}
          >
            Login
          </div>
          <div className="registrationTitleButton2"
            onClick={() => {
              navigate("/registration");
              setOpen(!open);
            }}
          >
            Registration
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="wrapperLablesInputs">
            <label htmlFor="username">Username</label>
            <input
              placeholder="Your Name"
              type="username"
              id="username"
              value={username}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
            />
          </div>
          <div className="wrapperLablesInputs">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
          </div>
          <div className="wrapperLablesInputs">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Your Password"
              type="password"
              id="password"
              value={password}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
          </div>
          <div className="wrapperLablesInputs">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)}
            />
          </div>
          
            <input className="submitInputRegistration" type="submit"  />  
           
          {/* <ForgotPasswordWrapper></ForgotPasswordWrapper> */}
        </form>
      </div>
    </div>
  );
}