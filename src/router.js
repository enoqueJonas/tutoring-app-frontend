import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <nav>Navbar</nav>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
