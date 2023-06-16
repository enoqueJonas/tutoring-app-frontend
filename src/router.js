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
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'classes/:subjectId',
        element: <Details />,
      },
      {
        path: '/addClass',
        element: <ClassForm />,
      },
      {
        path: '/reservation',
        element: <ProtectedRoute element={Reservation} />,
      },
      {
        path: '/deleteClass',
        element: <DeleteClass />,
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
