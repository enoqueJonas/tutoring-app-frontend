import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SideBar from './components/side-nav/sideBar';
import ClassForm from './components/add-class/AddClass';
import DeleteClass from './components/delete-class/deleteClass';

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
        element: <ClassForm />,
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
