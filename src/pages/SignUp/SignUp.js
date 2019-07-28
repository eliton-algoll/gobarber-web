import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/img/gobarber_logo.svg';

export default function SignUp() {
  return (
    <>
      <h1>
        <img src={logo} alt="GoBarber" />
      </h1>

      <form>
        <input placeholder="Your name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your password" />
        <button type="submit">Create Account</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
