import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginUserMutation } from '../api/usersData';

const LoginFields = () => {
  const [name, setName] = useState('');
  const [login] = useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name,
    }).unwrap()
      .then((response) => {
        if (response.message === 'Logged In Successfully') {
          window.location.href = '/home';
        } else {
          // Handle unsuccessful login
          console.error('Invalid username');
        }
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  return (
    <form className="fields-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Login" className="input-field" />
      <Link to="/users/new">
        Click here to sign up if you are not registered yet!
      </Link>
    </form>
  );
};

export default LoginFields;
