import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from '../api/usersData';
import { updateUser } from '../redux/tutories/tutoriesSlice';

const LoginFields = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [login] = useLoginUserMutation();
  const { user } = useSelector((store) => store.tutories);

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name,
    })
      .unwrap()
      .then((response) => {
        if (response.message === 'Logged In Successfully') {
          dispatch(updateUser({ loggedIn: true, data: response.user }));
          console.log('Loginnnn');
          navigate('/');
        }
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  useEffect(() => {
    if (user.loggedIn) {
      navigate('/');
    }
  }, [user.loggedIn, dispatch]);

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
