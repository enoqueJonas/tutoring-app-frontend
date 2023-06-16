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
    dispatch(
      updateUser({
        loggedIn: currentUser && currentUser.logged_in,
        data: (currentUser && currentUser.user) || {},
      }),
    );
  }, [currentUser]);

  if (isLoading) {
    return <h1 className="absolute z-50 flex justify-center items-center text-white bg-lime-500 h-screen w-screen">Loading...</h1>;
  }
  if (isError) {
    return <p>Could not open page.</p>;
  }

  const isAuthenticated = user.loggedIn;

  if (!isAuthenticated) {
    const isAuthenticatedCookie = document.cookie.includes('_tutoring_key');
    if (isAuthenticatedCookie) {
      dispatch(updateUser({ loggedIn: true, data: currentUser.user }));
    } else {
      navigate('/login'); // Redirect the user to the login page
      return null; // Render nothing while the redirection takes place
    }
  }

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
