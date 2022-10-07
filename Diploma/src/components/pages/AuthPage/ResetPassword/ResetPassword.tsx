import React, { useState } from "react";
import { resetPassword } from "../../../../hooks/auth.service";
import { Button } from "../../../Button/ButtonAuth";
import './resetPasswordStyle.css';


export function ResetPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    resetPassword(email);
  };
  return (
    <div className="containerResetPassword">
      <div className="mainResetPassword">
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
          <Button />
        </form>
      </div>
    </div>
  );
};
