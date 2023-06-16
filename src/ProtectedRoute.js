import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUserQuery } from './api/usersData';
import { updateUser } from './redux/tutories/tutoriesSlice';
import { useSelector, useDispatch } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {data: currentUser, isLoading, isError} = useCurrentUserQuery();
  const {user} = useSelector(store => store.tutories);
  const dispatch = useDispatch();

  if(isLoading){
    return<p>Loading...</p>
  }
  if(isError){
    return<p>Could not open page.</p>
  }

  useEffect(() => {
    dispatch(updateUser({
      loggedIn: currentUser.logged_in || false,
      data: currentUser.user || {},
    }));
  }, []);

  const isAuthenticated = user.loggedIn;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
