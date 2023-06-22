import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useCurrentUserQuery } from './api/usersData';
import { updateUser } from './redux/tutories/tutoriesSlice';

const ProtectedRoute = ({ component: Component }) => {
  const { data: currentUser, isLoading, isError } = useCurrentUserQuery();
  const { user } = useSelector((store) => store.tutories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.logged_in) {
      dispatch(
        updateUser({
          loggedIn: true,
          data: currentUser.user || {},
        }),
      );
    }
  }, [currentUser, dispatch]);

  if (isLoading) {
    return <h1 className="absolute z-50 flex justify-center items-center text-white bg-lime-500 h-screen w-screen">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="absolute z-50 flex justify-center items-center bg-lime-500 text-white h-screen w-screen">Could not open page!</h1>;
  }

  const isAuthenticated = user.loggedIn;

  if (!isAuthenticated) {
    navigate('/login'); // Redirect the user to the login page
    return null; // Render nothing while the redirection takes place
  }

  return (
    <Component />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
