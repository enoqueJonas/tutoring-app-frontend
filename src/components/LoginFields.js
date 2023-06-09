import React from 'react';
import { Link } from 'react-router-dom';

const LoginFields = () => (
  <div className="fields-wrapper">
    <input type="text" placeholder="Username" className="input-field" />
    <input type="submit" value="Login" className="input-field" />
    <Link to="/users/new">
      Click here to sign up if you are not registered yet!
    </Link>
  </div>
);

export default LoginFields;
