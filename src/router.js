import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SideBar from './components/side-nav/sideBar';
import ClassForm from './components/add-class/AddClass';
import Reservation from './pages/Reservation';
import Details from './pages/Details';
import DeleteClass from './components/delete-class/deleteClass';
import ProtectedRoute from './ProtectedRoute';

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
        element: <ProtectedRoute component={Home} />,
      },
      {
        path: 'home',
        element: <ProtectedRoute component={Home} />,
      },
      {
        path: 'classes/:subjectId',
        element: <ProtectedRoute component={Details} />,
      },
      {
        path: '/addClass',
        element: <ProtectedRoute component={ClassForm} />,
      },
      {
        path: '/reservation',
        element: <ProtectedRoute component={Reservation} />,
      },
      {
        path: '/deleteClass',
        element: <ProtectedRoute component={DeleteClass} />,
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
