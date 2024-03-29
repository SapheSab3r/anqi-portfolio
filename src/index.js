import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './pages/AboutPage'
import PvsZ from './pages/PvsZ';
import Steppie from './pages/Steppie'
import Website from './pages/Website'
import Tetris from './pages/Tetris'
import Voad from './pages/Voad'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutPage",
    element: <AboutPage />,
  },
  {
    path: "/project/1",
    element: <PvsZ />,
  },
  {
    path: "/project/2",
    element: <Tetris />,
  },
  {
    path: "/project/3",
    element: <Website />,
  },
  {
    path: "/project/4",
    element: <Steppie />,
  },
  {
    path: "/project/5",
    element: <Voad />,
  },

]);



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

