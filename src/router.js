import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SideBar from './components/side-nav/sideBar';
import AddClass from './pages/AddClass';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="element-outlet">
        <SideBar />
        <Outlet />
      </div>
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
      {
        path: '/addClass',
        element: <AddClass />,
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
