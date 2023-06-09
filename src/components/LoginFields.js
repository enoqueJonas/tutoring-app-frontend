import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../api/usersData';

const LoginFields = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [login] = useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name,
    }).unwrap()
      .then((response) => {
        if (response.message === 'Logged In Successfully') {
          navigate('/home', { replace: true });
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
    <form
      className="fields-wrapper items-center flex flex-col justify-center h-[300px] w-[500px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Username"
        className="input-field m-[8px] h-[35px] w-[325px] rounded-lg"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="submit"
        value="Login"
        className="input-field m-[8px] h-[35px] w-[325px] rounded-lg border border-white-500 text-white hover:bg-white hover:bg-opacity-40"
      />
      <Link to="/signup" className="text-white text-sm">
        Click here to sign up if you are not registered yet!
      </Link>
    </form>
  );
};

export default LoginFields;
