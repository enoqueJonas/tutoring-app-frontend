import React, { useState } from 'react';
import { useCreateUserMutation } from '../api/usersData';

const UserRegistrationForm = () => {
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
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        className="registration-form-filed"
        name="username"
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        className="registration-form-filed"
        name="email"
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input type="submit" value="Register" className="registration-form-filed" />
    </form>
  );
};
export default UserRegistrationForm;
