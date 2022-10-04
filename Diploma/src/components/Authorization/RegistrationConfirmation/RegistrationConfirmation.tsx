import * as React from 'react';
import { Link } from 'react-router-dom';
import './registrationConfirmation.css';



export function RegistrationConfirmation({email}: {email: string}) {
  return (
    <div className='containerConfirmation'>
        <div className='link'>
            <Link className='linkConfirmation' to="/backToHome">Back to home</Link>
        </div>

        <div className='textRegistrationConfirmation'>
            <h1>Registration Confirmation</h1> 
        </div>    

        <div className='activateWithEmail'>  
        <p>
            {`Please activate your account with the activation link in the email ${email}.`}
        </p>
        <p className='checkEmail'>Please, check your email</p>
        
        </div>
    </div>
  );
}