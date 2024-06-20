import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import Terms from './Pages/Terms';
import Layout from './components/Global/Layout';
import Rules from './Pages/Rules';
import VotingList from './Pages/VotingList';
import Wiki from './Pages/Wiki';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/voting',
        element: <VotingList />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/rules',
        element: <Rules />,
      },
      {
        path: '/wiki',
        element: <Wiki />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
