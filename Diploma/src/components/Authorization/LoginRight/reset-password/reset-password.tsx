import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './reset-asswordStyle.css';

import {
  Container,
  MainWrapper,
  Form,
  Wrapper,
  Label,
  Input,
  SubmitButton,
  SubmitInput,
} from "./styled";
import { resetPassword } from "../../../../hooks/auth.service";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    resetPassword(email);
    navigate("/reset_password_success");
  };
  return (
    <div className="containerResetPassword">
      <div className="mainWrapperResetPassword">
        <form className="formResetPassword" onSubmit={handleSubmit}>
          <div className="wrapperResetPassword">
            <label className="labelResetPassword" htmlFor="email">Email</label>
            <input className="inputResetPassword"
              placeholder="Your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <SubmitButton> */}
            <SubmitInput type="submit" />
          {/* </SubmitButton> */}
        </form>
      </div>
    </div>
  );
};
