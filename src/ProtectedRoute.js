import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';

const ProtectedRoute = ({ path, element }) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

export default ProtectedRoute;
