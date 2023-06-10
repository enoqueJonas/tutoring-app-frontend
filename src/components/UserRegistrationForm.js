import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../api/usersData';

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
  });

  const [createUser] = useCreateUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      name: userInfo.username,
      email: userInfo.email,
    })
      .then(() => {
        navigate('/home', { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      className="registration-form items-center flex flex-col justify-center h-[300px] w-[500px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Username"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="username"
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="email"
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        type="submit"
        value="Register"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg border border-white-500 text-white hover:bg-white hover:bg-opacity-40"
      />
      <Link to="/" className="text-white text-sm">
        Click here to login if you are already registered!
      </Link>
    </form>
  );
};
export default UserRegistrationForm;
