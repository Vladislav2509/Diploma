import * as React from "react";
import { Link } from "react-router-dom";
import "./registrConfirmationStyle.css";

export function RegistrConfirmation() {
  return (
    <div className="containerConfirmation">
      <div className="link">
        <Link className="linkConfirmation" to="/backToHome">
          Back to home
        </Link>
      </div>

      <div className="textRegistrationConfirmation">
        <h1>Registration Confirmation</h1>
      </div>

      <div className="successfullyCreated">
        <p>
          Your account has been successfully created.
        </p>
        <p className="checkEmail">Please, check your email.</p>
      </div>
    </div>
  );
}
