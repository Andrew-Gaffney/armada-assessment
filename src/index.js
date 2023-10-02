import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RandomMovie from './RandomMovie';
import MostPopular from './MostPopular';
import MovieProfile from './MovieProfile';
import ErrorPage from './ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "random",
        element: <RandomMovie />,
        errorElement: <ErrorPage />      },
      {
        path: "most-popular",
        element: <MostPopular />,
      }
    ],
  },
  {
    path: "movie/:id",
    element: <MovieProfile />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <RouterProvider router={router} />
  </div>
);
