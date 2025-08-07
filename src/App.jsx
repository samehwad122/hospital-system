import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Cases from './pages/Cases';
import NursesTable from './pages/NursesTable';
import BedsTable from './pages/BedsTable';
import Doctors from './pages/DoctorsTable';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute'; // أضفنا ده

const router = createBrowserRouter([
  {
    path: '/signin',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <SignIn />
      </div>
    ),
  },
  {
    path: '/signup',
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <SignUp />
      </div>
    ),
  },
  {
    path: '',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <div className="text-center">Page not found</div>,
    children: [
      { path: '', element: <Home /> },
      { path: '/cases', element: <Cases /> },
      { path: '/nurses', element: <NursesTable /> },
      { path: '/beds', element: <BedsTable /> },
      { path: '/doctors', element: <Doctors /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
