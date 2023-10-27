import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Counter from './pages/counter';
import Modal from './pages/modal';
import Quiz from './pages/quiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/modal',
    element: <Modal />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
]);
